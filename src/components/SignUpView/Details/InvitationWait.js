import React from 'react'

const InvitationWait = () => {
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
          <button className="dashboard-btn">
            Go To Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}

export default InvitationWait
