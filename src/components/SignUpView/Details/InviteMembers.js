import React from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../../../backend/firebaseConfig'

const InviteMembers = () => {
  const uid = localStorage.getItem("uid")
  const history = useHistory()

  const handleClick = () => {
    firebase.db.collection("users").doc(uid).update({
      accountSetUp: true,
    })
    .then(() => {
      localStorage.setItem("accountSetUp", true)
      localStorage.removeItem("userAt")
      history.replace("/app")
    })
    .catch(error => {
        alert(error)
    })
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-header-title">Invite Members</h2>
        <p className="card-header-subtitle">Invite your team members.</p>
      </div>
      <div className="card-content">
        <p>
          <span className="token">{ uid }</span> <br />
          This is you invitation token. 
          Share it with you teammates to invite them to your team.
        </p>
      </div>
      <div className="card-footer">
        <button className="dashboard-btn" onClick={ handleClick }>
          Go To Dashboard
        </button>
      </div>
    </div>
  )
}

export default InviteMembers