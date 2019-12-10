import React from 'react'

const TaskProgress = ({ tasks, completedTasks}) => {
  const noOfTasks = tasks.length
  const noOfCompletedTasks = completedTasks.length
  const totalTasks = noOfTasks + noOfCompletedTasks
  const tasksCompleted = Math.floor((noOfCompletedTasks / totalTasks) * 100)
  const tasksRemaining = 100 - tasksCompleted
  
  return (
    <>
      <h2 className="task-progress-title" style={{marginTop: 0}}>
          Task Progress
      </h2>
      <div className="task-progress">
        <div className="card no-of-tasks-card">
            <div className="card-content">
            <span>{ noOfTasks }</span>
            </div>
            <div className="card-footer">
              <h3>No. Of Tasks</h3>
            </div>
        </div>

        <div className="card completion-card">
          <div className="card-content">
            <span>{ isNaN(tasksCompleted) ? 0 : tasksCompleted }%</span>
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
              strokeDashoffset={(2 * 3.14 * 60) * ((100 - (isNaN(tasksCompleted) ? 0 : tasksCompleted)) / 100)}
              style={{transition: '.5s stroke-dashoffset'}}
              />
            </svg>
          </div>
          <div className="card-footer">
            <h3>Completed</h3>
          </div>
        </div>

        <div className="card remaining-card">
          <div className="card-content">
            <span>{ isNaN(tasksRemaining) ? 0 : tasksRemaining }%</span>
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
              strokeDashoffset={(2 * 3.14 * 60) * ((100 - (isNaN(tasksRemaining) ? 0 : tasksRemaining)) / 100)}
              style={{transition: '.5s stroke-dashoffset'}} />
            </svg>
          </div>
          <div className="card-footer">
            <h3>Remaining</h3>
          </div>
        </div>

        <div className="card eta-card">
          <div className="card-content">
            <span>1<sup>st</sup> February 2020</span>
          </div>
          <div className="card-footer">
            <h3>ETA</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskProgress
