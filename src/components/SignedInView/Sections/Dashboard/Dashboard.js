import React, { useEffect, useState } from 'react'
import DashboardProjectDetails from './DashboardProjectDetails'
import OverallProjectProgress from './OverallProjectProgress'
import TeamMemberProgress from './TeamMemberProgress'
import firebase from '../../../../backend/firebaseConfig'
import { CircularProgress } from "@rmwc/circular-progress"
import '@rmwc/circular-progress/circular-progress.css'

const Dashboard = () => {
  document.title = "Dashboard"
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [project, setProject] = useState({})
  const members = []

  for(let i = 0; i < localStorage.getItem("memberCount"); i++) {
    members.push(JSON.parse(localStorage.getItem(`member${i}`)))
  }

  useEffect(() => {
    firebase.fetchUserData(localStorage.getItem("uid"))
    .then(doc => {
      firebase.fetchProjectData(doc.data().pid)
      .then(doc => {
        const data = {
          title: doc.data().title,
          description: doc.data().description,
          technologies: doc.data().technologies,
          completeBy: doc.data().completeBy,
          createdBy: doc.data().createdBy,
        }
        localStorage.setItem("completeBy", doc.data().completeBy)
        setProject(data)
        setLoading(false)
      })
    })
  }, [])

  useEffect(() => {
    members.map((member) => {
      firebase.fetchTaskData(member.uid)
      .onSnapshot(doc => {
        const data = doc.data()
        setTasks(t => [...t, data])
      })
      firebase.fetchCompletedTaskData(member.uid)
      .onSnapshot(doc => {
        const data = doc.data()
        setCompletedTasks(t => [...t, data])
      })
      return 0
    })
  }, [])

  return (
    <div className="dashboard">
      {
        loading ? (
          <CircularProgress />
        ) : (
          <>
            <DashboardProjectDetails project={ project } />
            <OverallProjectProgress project={ project } members={ members } />
            <TeamMemberProgress members={ members } tasks={ tasks } completedTasks={ completedTasks } />
          </>
        )
      }
    </div>
  )
}

export default Dashboard
