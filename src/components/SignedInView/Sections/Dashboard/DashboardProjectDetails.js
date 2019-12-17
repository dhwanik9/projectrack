import React from 'react'
import help from '../../../../images/help.png'

const DashboardProjectDetails = ({ project }) => {

  return (
    <div className="dashboard-project-details">
    <h2 className="dashboard-project-details-title">{ project.title }</h2>
      <span>
        { project.createdBy }
        <sup>
          <img 
          src={ help } 
          alt="Help" 
          style={{height: '18px', width: '18px'}}
          title="This is the invitation code. Share it with your teammates to invite them." />
        </sup>
        </span>
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
