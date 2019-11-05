import React from 'react'
import { Link } from 'react-router-dom'

const UserPosition = () => {
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
          className="team-leader">
            <Link to="/signup/projectDetails" className="link">
              Team Leader
            </Link>
          </button>
          <button className="team-member">
            <Link to="/signup/invitationWait" className="link">
              Team Member
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserPosition
