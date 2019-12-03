import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../../../backend/firebaseConfig'

const InviteMembers = () => {
  const { uid } = firebase.getUserdata()
  const history = useHistory()

  const initialState = {
    teamMember1: '',
    teamMember2: '',
    teamMember3: '',
  }
  const [error, setError] = useState("")
  const [members, setMembers] = useState(initialState)

  const handleChange = (e) => {
    const {name, value} = e.target
    setMembers({...members, [name]: value})
  }

  const handleBlur = (e) => {
    if(!e.target.value) {
      e.target.className = "error"
      e.target.placeholder = "This field is required"
    }
    else {
      e.target.className = "input"
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    if(
      members.teamMember1 === "" || 
      members.teamMember2 === "" ||
      members.teamMember3 === "") {
      setError("All the fields are required")
    }
    else {
      setError("")
      firebase.db.collection("users").doc(uid).update({
        accountSetUp: true,
      }).then(() => {
        history.replace("/app")
      }).catch(error => {
        alert(error)
      })
    }
  }

  return (
    <form className="project-details">
        <div className="card">
          <div className="card-header">
            <h2 className="card-header-title">Invite Members</h2>
            <p className="card-header-subtitle">Invite your team members.</p>
            <p className="card-header-subtitle">Required fields are marked with *</p>
          </div>
          <div className="card-content">
            <label htmlFor="teamMember1">Team Member 1 *</label>
            <input
              type="text"
              className="input"
              name="teamMember1"
              value={members.teamMember1}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="teamMember2">Team Member 2 *</label>
            <input
              type="text"
              className="input"
              name="teamMember2"
              value={members.teamMember2}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="teamMember3">Team Member 3 *</label>
            <input
              type="text"
              className="input"
              name="teamMember3"
              value={members.teamMember3}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span id="error">{error}</span>
            <button className="submitBtn"
              onClick={handleClick}>
              Invite Members
            </button>
        </div>
      </div>
    </form>
  )
}

export default InviteMembers