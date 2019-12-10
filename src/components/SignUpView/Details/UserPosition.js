import React from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../../../backend/firebaseConfig'

const UserPosition = () => {
  const uid = localStorage.getItem("uid")
  const history = useHistory()

  const teamLeader = () => {
    firebase.db.collection("users").doc(uid).update({
      position: "Team Leader",
      waitingInvite: false,
      tid: uid,
      pid: uid
    }).then(() => {
        firebase.db.collection("teams").doc(uid).set({
          tid: uid,
          teamMembers: [uid],
        }).catch(error => {
          alert(error)
        })
      }).then(() => {
        localStorage.setItem("userAt", "projectDetails")
        history.push("/signUp/projectDetails")
      }).catch(error => {
        alert(error)
    }).catch(error => {
      alert(error)
    })
  }

  const teamMember = () => {
    firebase.db.collection("users").doc(uid).update({
      position: "Team Member",
      waitingInvite: true,
    }).then(() => {
      firebase.fetchUserData(localStorage.getItem("uid"))
      localStorage.setItem("userAt", "invitationWait")
      history.push("/signUp/invitationWait")
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

export default UserPosition
