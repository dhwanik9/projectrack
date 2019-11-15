import React from 'react'
import DashboardProjectDetails from './DashboardProjectDetails'
import OverallProjectProgress from './OverallProjectProgress'
import TeamMemberProgress from './TeamMemberProgress'

const Dashboard = () => {
  document.title = "Dashboard"

  return (
    <div className="dashboard">
      <DashboardProjectDetails />
      <OverallProjectProgress />
      <TeamMemberProgress />
    </div>
  )
}

export default Dashboard
