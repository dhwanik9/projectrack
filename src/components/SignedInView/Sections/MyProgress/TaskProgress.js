import React from 'react'

const TaskProgress = () => {
  return (
    <>
      <h2 className="task-progress-title" style={{marginTop: 0}}>
          Task Progress
      </h2>
      <div className="task-progress">
        <div className="card no-of-tasks-card">
            <div className="card-content">
              <span>3</span>
            </div>
            <div className="card-footer">
              <h3>No. Of Tasks</h3>
            </div>
        </div>

        <div className="card completion-card">
          <div className="card-content">
            <span>25%</span>
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
              strokeDashoffset={(2 * 3.14 * 60) * ((100 - 25) / 100)} />
            </svg>
          </div>
          <div className="card-footer">
            <h3>Completed</h3>
          </div>
        </div>

        <div className="card remaining-card">
          <div className="card-content">
            <span>75%</span>
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
              strokeDashoffset={(2 * 3.14 * 60) * ((100 - 75) / 100)} />
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
