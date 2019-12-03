import React from 'react'
import { withRouter } from 'react-router-dom'
import firebase from '../../../backend/firebaseConfig'

const UserPosition = (props) => {
  const userData = firebase.getUserdata()

  const teamLeader = () => {
    firebase.db.collection("users").doc(userData.uid).update({
      position: "Team Leader",
      waitingInvite: false,
    }).then(() => {
      props.history.replace("/signUp/projectDetails")
    }).catch(error => {
      alert(error)
    })
  }

  const teamMember = () => {
    firebase.db.collection("users").doc(userData.uid).update({
      position: "Team Member",
      waitingInvite: true,
    }).then(() => {
      props.history.replace("/signUp/invitationWait")
    }).catch(error => {
      alert(error)
    })
  }

  return (
    <div className="user-position">
      <div className="card">
        <div className="card-header">
          <h2 className="card-header-title">Your Position</h2>
          <p className="card-header-subtitle">
            Select your position in the team.
            Please select carefully, once selected, you can't change your position.
          </p>
        </div>
        <div className="card-content">
          <button 
          className="team-leader"
          onClick={ teamLeader }>
            Team Leader
          </button>
          <button 
          className="team-member"
          onClick={ teamMember }>
            Team Member
          </button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(UserPosition)
