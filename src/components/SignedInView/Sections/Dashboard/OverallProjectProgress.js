import React, { useState, useEffect} from 'react'
import firebase from '../../../../backend/firebaseConfig'
import moment from 'moment'

const OverallProjectProgress = ({ members }) => {
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  let noOfTasksRemaining = 0
  let noOfTasksCompleted = 0
  let noOfTasks = 0
  let tasksCompleted = 0
  let tasksRemaining = 0
  let daysTaken = 0
  let eta = 0
  let completedTasksLength = completedTasks.length ? completedTasks.length : 1
  let remainingTasksLength = tasks.length
  const completeBy = localStorage.getItem("completeBy")

  useEffect(() => {
    firebase.fetchUserData(localStorage.getItem("uid"))
    .then(() => {
      members.map((member) => {
        firebase.fetchTaskData(member.uid)
        .onSnapshot(doc => {
          const data = doc.data()
          setTasks(t => [...t, ...data.tasks])
        })
        firebase.fetchCompletedTaskData(member.uid)
        .onSnapshot(doc => {
          const data = doc.data()
          setCompletedTasks(t => [...t, ...data.tasks])
        })
        return 0
      })
    })
  }, [])

  noOfTasksRemaining += tasks.length
  noOfTasksCompleted += completedTasks.length
  noOfTasks = noOfTasksCompleted + noOfTasksRemaining
  tasksCompleted = Math.floor((noOfTasksCompleted / noOfTasks) * 100)
  tasksRemaining = 100 - tasksCompleted

  members.map(member => {
    daysTaken += member.etaDays
    return 0
  })
  
  eta = (daysTaken / completedTasksLength) * remainingTasksLength

  return (
    <>
      <h2 className="overall-project-progress-title">
          Overall Project Progress
      </h2>
      <div className="overall-project-progress">
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
              style={{transition: '.5s stroke-dashoffset'}} />
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
        
        <div className="card deadline-card">
          <div className="card-content">
            <span>{ completeBy }</span>
          </div>
          <div className="card-footer">
            <h3>Deadline</h3>
          </div>
        </div>

        <div className="card eta-card">
          <div className="card-content">
            <span>{ moment().add(eta, 'days').format('LL') }</span>
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
