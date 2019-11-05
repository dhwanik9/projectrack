import React from 'react'

const TeamMemberProgress = () => {
  const teamMembers = [
    {
      name: "Team Member 1",
      noOfTasks: 40,
      taskCompleted: 50,
      taskRemaining: 50,
      taskEta: <span>17<sup>th</sup> October 2019</span>
    },
    {
      name: "Team Member 2",
      noOfTasks: 20,
      taskCompleted: 45,
      taskRemaining: 55,
      taskEta: <span>13<sup>th</sup> October 2019</span>
    },
    {
      name: "Team Member 3",
      noOfTasks: 26,
      taskCompleted: 65,
      taskRemaining: 35,
      taskEta: <span>19<sup>th</sup> October 2019</span>
    },
    {
      name: "Team Member 4",
      noOfTasks: 15,
      taskCompleted: 24,
      taskRemaining: 76,
      taskEta: <span>20<sup>th</sup> October 2019</span>
    }
  ]
  return (
    <>
      {
        teamMembers.map((member, index) => (
          <div key={index}>
            <h2 className="overall-project-progress-title">{member.name}'s Progress</h2>
            <div className="team-member-project-progress">
              <div className="card no-of-tasks-card">
                <div className="card-content">
                  <span>{member.noOfTasks}</span>
                </div>
                <div className="card-footer">
                  <h3>No. Of Tasks</h3>
                </div>
              </div>
              
              <div className="card completion-card">
                <div className="card-content">      
                  <span>{member.taskCompleted}%</span>            
                  <svg>
                    <circle 
                    cx="132" 
                    cy="80" 
                    r="60" 
                    fill="none" 
                    stroke="#001960" 
                    strokeWidth="25px" />
                    <circle 
                    cx="132" 
                    cy="80" 
                    r="60" 
                    fill="none" 
                    stroke="#fff" 
                    strokeWidth="25px"
                    strokeDasharray="376.8"
                    strokeDashoffset={(2 * 3.14 * 60) * ((100 - member.taskCompleted) / 100)} />
                  </svg>
                </div>
                <div className="card-footer">
                  <h3>Tasks Completed</h3>
                </div>
              </div>
              
              <div className="card remaining-card">
                <div className="card-content">
                  <span>{member.taskRemaining}%</span>
                  <svg>                  
                    <circle 
                    cx="132" 
                    cy="80" 
                    r="60" 
                    fill="none" 
                    stroke="#001960" 
                    strokeWidth="25px" />
                    <circle 
                    cx="132" 
                    cy="80" 
                    r="60" 
                    fill="none" 
                    stroke="#fff" 
                    strokeWidth="25px"
                    strokeDasharray="376.8"
                    strokeDashoffset={(2 * 3.14 * 60) * ((100 - member.taskRemaining) / 100)} />
                  </svg>
                </div>
                <div className="card-footer">
                  <h3>Tasks Remaining</h3>
                </div>
              </div>
              
              <div className="card eta-card">
                <div className="card-content">
                  {member.taskEta}
                </div>
                <div className="card-footer">
                  <h3>Task ETA</h3>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default TeamMemberProgress
