import React from 'react'
import { Route } from 'react-router-dom'
import '../SignUp.css'
import UserDetails from './UserDetails'
import ProjectDetails from './ProjectDetails'
import UserPosition from './UserPosition'
import InvitationWait from './InvitationWait'
import InviteMembers from './InviteMembers'

const Details = () => {
  return (
      <div className="details">
        <Route path="/signup/userDetails" component={UserDetails} />
        <Route path="/signup/userPosition" component={UserPosition} />
        <Route path="/signup/projectDetails" component={ProjectDetails} />
        <Route path="/signup/invitationWait" component={InvitationWait} />
        <Route path="/signup/inviteMembers" component={InviteMembers} />
      </div>
  )
}

export default Details
