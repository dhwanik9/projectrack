import React from 'react'
import moment from 'moment'
import firebase from '../../../../backend/firebaseConfig'

const TaskProgress = ({ tasks, completedTasks}) => {
  const noOfTasks = tasks.length
  const noOfCompletedTasks = completedTasks.length
  const totalTasks = noOfTasks + noOfCompletedTasks
  const tasksCompleted = Math.floor((noOfCompletedTasks / totalTasks) * 100)
  const tasksRemaining = 100 - tasksCompleted
  let createdAtDay = 0
  let createdAtMonth = 0
  let completedAtDay = 0
  let completedAtMonth = 0
  let days = 0
  let months = 0
  let etaDays = 0
  completedTasks.forEach(task => {
    createdAtDay = task.createdAt.split("/")[1]
    createdAtMonth = task.createdAt.split("/")[0]
    completedAtDay = task.completedAt.split("/")[1]
    completedAtMonth = task.completedAt.split("/")[0]
    days += (createdAtDay <= completedAtDay ? completedAtDay - createdAtDay : 30 - (createdAtDay - completedAtDay))
    months += (createdAtMonth < completedAtMonth ? (12 - (createdAtMonth - completedAtMonth)) - 1 :  completedAtMonth - createdAtMonth)
  })
  etaDays = ((months * 30) + days) / completedTasks.length

  firebase.db.collection("users").doc(localStorage.getItem("uid")).update({
    tasksEta: moment().add(etaDays, 'days').format('LL'),
    etaDays: isNaN(etaDays) ? 0 : etaDays
  })

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
            <span>{moment().add(etaDays, 'days').format('LL')}</span>
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
