import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import firebase from '../../backend/firebaseConfig'

const InvitationWait = () => {
  const history = useHistory()
  const [code, setCode] = useState("")
  const uid = localStorage.getItem("uid")

  const handleChange = (e) => {
    setCode(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (code !== "") {
      firebase.db.collection("teams").doc(code).get().then(team => {
        const teamData = team.data()
        return teamData
      }).then(teamData => {
        firebase.db.collection("teams").doc(code).update({
          teamMembers: [...teamData.teamMembers, uid]
        }).then(() => {
          firebase.db.collection("users").doc(uid).update({
            waitingInvite: false,
            tid: code,
            pid: code
          }).then(() => {
            history.replace("/app/dashboard")
          }).catch(error => {
            alert(error)
          })
        }).catch(error => {
          alert(error)
        })
      }).catch(error => {
        alert(error)
      })
    }
  }

  return (
    <div className="invitation-wait">
      <p style={{marginTop: 0}}>
        If you have received the invitation code from your team
        leader then enter it below. Otherwise wait for your team
        leader to share it with you.
      </p>
      <input 
        className="code-input"
        type="text"
        value={ code }
        onChange={handleChange}
      />
      <button onClick={ handleClick }>
        Accept Invitation
      </button>
    </div>
  )
}

export default InvitationWait
