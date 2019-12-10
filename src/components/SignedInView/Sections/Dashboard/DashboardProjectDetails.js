import React from 'react'

const DashboardProjectDetails = ({ project }) => {

  return (
    <div className="dashboard-project-details">
    <h2 className="dashboard-project-details-title">{ project.title }</h2>
      <p>
        { project.description }
      </p>
      <ul>
        {
          project.technologies.map(tech => (
            <li key={ tech.id }>{ tech.tech }</li>
          ))
        }
      </ul>
    </div>
  )
}

export default DashboardProjectDetails
