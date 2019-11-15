import React, { useState } from 'react'
import expand_collapse from '../../../../images/expand_collapse.png'

export const CompletedTasks = ({ completedTasks }) => {
  const [expanded, setExpanded] = useState(false)

  const expandCompletedTasks = () => {
    setExpanded(!expanded)
  }

  return (
    <div className={["completed-tasks", expanded ? "expand" : ""].join(" ")}>

      <div className="completed-tasks-header">
        <h2 className="completed-tasks-title">Completed Tasks</h2>
        <img src={expand_collapse} alt="expand/collapse" className="expand-collapse" onClick={expandCompletedTasks} />
      </div>

      <div className={["completed-tasks-list", expanded ? "expand" : ""].join(" ")}>
        {
          completedTasks.length > 0 ? (
            completedTasks.map(task => (
            <div className="task" key={task.id}>
              <h3 className="task-title">{task.title}</h3><br />
              <p className="task-description">{task.description}</p><br />
            </div>
          ))
          ) : (
            <p style={{marginTop: '4px'}}>You've not completed any task yet. Make sure to complete your tasks before they reach their deadline.</p>
          )
        }
      </div>
    </div>
  )
}
