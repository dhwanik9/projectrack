import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Dashboard from './Sections/Dashboard/Dashboard'
import MyProgress from './Sections/MyProgress/MyProgress'
import MyTeam from './Sections/MyTeam/MyTeam'
import Documents from './Sections/Documents/Documents'
import firebase from '../../backend/firebaseConfig'
import InvitationWait from './InvitationWait'
import Document from './Sections/Documents/Document'


const MainView = () => {
  const [waiting, setWaiting] = useState()
  const [team, setTeam] = useState([])
  const members = []
  const memberCount = localStorage.getItem("memberCount")
  const sections = [
    {
      path: '/app/dashboard/',
      component: Dashboard
    },
    {
      path: '/app/myprogress/',
      component: MyProgress
    },
    {
      path: '/app/myteam/',
      component: MyTeam
    },
    {
      path: '/app/documents/',
      component: Documents
    },
  ]

  for(let i = 0; i < memberCount; i++) {
    members.push(JSON.parse(localStorage.getItem(`member${i}`)))
  }

  firebase.db.collection("users").doc(localStorage.getItem("uid")).get()
  .then(doc => {
    if (doc.data().waitingInvite) {
      setWaiting(true)
    } else {
      setWaiting(false)
    }
  }).catch(er => {
    alert(er)
  })

  if(team.length === 0) {
    firebase.fetchUserData(localStorage.getItem("uid"))
    .then(doc => {
      if(doc.data().tid) {
        firebase.fetchTeamData(doc.data().tid)
        .then(doc => {
          setTeam(doc.data().teamMembers)
        })
      }
    }).catch(er => {
      alert(er)
    })
  }
  
  team.map((member, index) => {
    firebase.fetchUserData(member)
    .then(doc => {
      const data = doc.data()
      const user = {
        uid: data.uid,
        name: data.name,
        email: data.email,
        skills: data.skills,
        description: data.description,
        photoUrl: data.photoUrl,
      }
      localStorage.setItem("memberCount", team.length)
      localStorage.setItem(`member${index}`, JSON.stringify(user))
    })
    return 0
  })
  
  return (
    <div className="main-view"> 
      <Redirect to="/app/myProgress/" />     
      {
        waiting ? (
          <InvitationWait />
        ) : (
          <>
            {
              members.map(member => (
                <Route 
                  path={`/app/${member.name}`} 
                  render={() => <Document member={member} />}
                  key={member.uid} />
              ))
            }
            {
              sections.map((section, index) => (
                <Route 
                  exact={section.exact}
                  key={index}
                  path={section.path} 
                  component={section.component} />
              ))
            }
          </>
        )
      }
    </div>
  )
}

export default MainView
