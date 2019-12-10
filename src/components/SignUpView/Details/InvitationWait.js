import React from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../../../backend/firebaseConfig'

const InvitationWait = () => {
  const history = useHistory()
  const uid = localStorage.getItem("uid")

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
    <div className="invitation-wait">
      <div className="card">
        <div className="card-header">
          <h3 className="card-header-title">Wait For Your Invitation</h3>
          <p className="card-header-subtitle">
            Wait for the team leader to send you the invitation. 
            If you think you have already been invited then check you mail box for the invitaton.
          </p>
        </div>
        <div className="card-content">
          <button className="dashboard-btn" onClick={ handleClick }>
            Go To Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}

export default InvitationWait
