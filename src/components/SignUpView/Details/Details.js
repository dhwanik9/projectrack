import React from 'react'
import { Route } from 'react-router-dom'
import '../SignUp.css'
import UserDetails from './UserDetails';
import ProjectDetails from './ProjectDetails';
import UserPosition from './UserPosition';
import InvitationWait from './InvitationWait';
import { Redirect } from 'react-router-dom'
const Details = () => {
  return (
      <div className="details">
        <Redirect to="/signup/userDetails" />
        <Route path="/signup/userDetails" component={UserDetails} />
        <Route path="/signup/userPosition" component={UserPosition} />
        <Route path="/signup/projectDetails" component={ProjectDetails} />
        <Route path="/signup/invitationWait" component={InvitationWait} />
      </div>
  )
}

export default Details
