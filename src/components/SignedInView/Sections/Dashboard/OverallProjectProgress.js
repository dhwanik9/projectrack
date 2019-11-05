import React from 'react'

const OverallProjectProgress = () => {
  return (
    <>
      <h2 className="overall-project-progress-title">
          Overall Project Progress
        </h2>
      <div className="overall-project-progress">
        <div className="card completion-card">
          <div className="card-content">
            <span>37%</span>
            <svg>
              <circle 
              cx="135" 
              cy="80" 
              r="60" 
              fill="none" 
              stroke="#001960" 
              strokeWidth="25px" />
              <circle 
              cx="135" 
              cy="80" 
              r="60" 
              fill="none" 
              stroke="#fff" 
              strokeWidth="25px"
              strokeDasharray="376.8"
              strokeDashoffset={(2 * 3.14 * 60) * ((100 - 37) / 100)} />
            </svg>
          </div>
          <div className="card-footer">
            <h3>Completed</h3>
          </div>
        </div>

        <div className="card remaining-card">
          <div className="card-content">
            <span>63%</span>
            <svg>
              <circle 
              cx="135" 
              cy="80" 
              r="60" 
              fill="none" 
              stroke="#001960" 
              strokeWidth="25px" />
              <circle 
              cx="135" 
              cy="80" 
              r="60" 
              fill="none" 
              stroke="#fff" 
              strokeWidth="25px"
              strokeDasharray="376.8"
              strokeDashoffset={(2 * 3.14 * 60) * ((100 - 63) / 100)} />
            </svg>
          </div>
          <div className="card-footer">
            <h3>Remaining</h3>
          </div>
        </div>
        
        <div className="card deadline-card">
          <div className="card-content">
            <span>1<sup>st</sup> March 2020</span>
          </div>
          <div className="card-footer">
            <h3>Deadline</h3>
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

export default OverallProjectProgress
