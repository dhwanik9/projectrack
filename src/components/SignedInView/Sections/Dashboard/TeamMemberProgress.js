import React from 'react'

const TeamMemberProgress = ({ members, tasks, completedTasks }) => {

  return (
    <>
      {
        members.map((member, index) => (
          <div key={index}>
            <h2 className="team-member-progress-title">{ member.name.split(' ')[0] }'s Progress</h2> 
            <div className="team-member-project-progress">
              <div className="card no-of-tasks-card">
                <div className="card-content">
                  <span>{ tasks[index].tasks.length }</span>
                </div>
                <div className="card-footer">
                  <h3>No. Of Tasks</h3>
                </div>
              </div>
              
              <div className="card completion-card">
                <div className="card-content">      
                  <span>{ isNaN(Math.floor((completedTasks[index].tasks.length / (completedTasks[index].tasks.length + tasks[index].tasks.length)) * 100)) ? 0 : Math.floor((completedTasks[index].tasks.length / (completedTasks[index].tasks.length + tasks[index].tasks.length)) * 100) }%</span>            
                  <svg>
                    <circle 
                    cx="127" 
                    cy="80" 
                    r="60" 
                    fill="none" 
                    stroke="#001960" 
                    strokeWidth="25px" />
                    <circle 
                    cx="127" 
                    cy="80" 
                    r="60" 
                    fill="none" 
                    stroke="#fff" 
                    strokeWidth="25px"
                    strokeDasharray="376.8"
                    strokeDashoffset={(2 * 3.14 * 60) * ((100 - ( isNaN(Math.floor((completedTasks[index].tasks.length / (completedTasks[index].tasks.length + tasks[index].tasks.length)) * 100)) ? 0 : Math.floor((completedTasks[index].tasks.length / (completedTasks[index].tasks.length + tasks[index].tasks.length)) * 100))) / 100)}
                    style={{transition: '.5s stroke-dashoffset'}} />
                  </svg>
                </div>
                <div className="card-footer">
                  <h3>Tasks Completed</h3>
                </div>
              </div>
              
              <div className="card remaining-card">
                <div className="card-content">
                  <span>{ isNaN(100 - (Math.floor((completedTasks[index].tasks.length / (completedTasks[index].tasks.length + tasks[index].tasks.length)) * 100))) ? 0 : 100 - (Math.floor((completedTasks[index].tasks.length / (completedTasks[index].tasks.length + tasks[index].tasks.length)) * 100)) }%</span>
                  <svg>                  
                    <circle 
                    cx="127" 
                    cy="80" 
                    r="60" 
                    fill="none" 
                    stroke="#001960" 
                    strokeWidth="25px" />
                    <circle 
                    cx="127" 
                    cy="80" 
                    r="60" 
                    fill="none" 
                    stroke="#fff" 
                    strokeWidth="25px"
                    strokeDasharray="376.8"
                    strokeDashoffset={(2 * 3.14 * 60) * ((100 - (isNaN(100 - (Math.floor((completedTasks[index].tasks.length / (completedTasks[index].tasks.length + tasks[index].tasks.length)) * 100))) ? 0 : 100 - (Math.floor((completedTasks[index].tasks.length / (completedTasks[index].tasks.length + tasks[index].tasks.length)) * 100)))) / 100)}
                    style={{transition: '.5s stroke-dashoffset'}} />
                  </svg>
                </div>
                <div className="card-footer">
                  <h3>Tasks Remaining</h3>
                </div>
              </div>
              
              <div className="card eta-card">
                <div className="card-content">
                  <span>{ member.tasksEta }</span>
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
