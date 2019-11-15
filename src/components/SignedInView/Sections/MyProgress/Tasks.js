import React, { useState } from 'react'
import { AddTaskForm } from './AddTaskForm'
import mark_done from '../../../../images/mark_done.png'
import delete_task from '../../../../images/delete_task.png'
import expand_collapse from '../../../../images/expand_collapse.png'


export const Tasks = ({ tasks, addTask, deleteTask, markComplete }) => {
  const [modalDisplay, setModalDisplay] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const openModal = (e) => {
    setModalDisplay(!modalDisplay)
  }

  const closeModal = (e) => {
    setModalDisplay(!modalDisplay)
  }

  const expandTasks = () => {
    setExpanded(!expanded)
  }

  return (
    <div className={["tasks", expanded ? "expand" : ""].join(" ")}>
      <div className="modal-container" style={{display: modalDisplay ? 'block' : 'none'}}>
        <div className="modal-box">
          <h2 className="add-new-task-title">Add a new task</h2>
          <span className="close-btn" onClick={closeModal}>X</span>
          <AddTaskForm closeModal={closeModal} addTask={addTask} />
        </div>
      </div>

      <div className="tasks-header">
        <h2 className="my-tasks-title">My Tasks</h2>
        <button className="add-task-btn" onClick={openModal}>Add Task</button>
        <img src={expand_collapse} alt="expand/collapse" className="expand-collapse" onClick={expandTasks} />
      </div>

      <div className={["tasks-list", expanded ? "expand" : ""].join(" ")}>
        {
          tasks.length > 0 ? (
            tasks.map((task, index) => (
              <div className="task" key={task.id}>
                <h3 className="task-title">{task.title}</h3><br />
                <p className="task-description">{task.description}</p><br />
                <p className="task-complete-by"><b>Complete By:</b> {task.completeBy}</p>
                <span className="task-actions">
                  <button style={{marginRight: 0}} className="delete-task" onClick={() => deleteTask(index)}>
                    <img alt="Delete" src={delete_task} />
                    Delete
                  </button>
                  <button className="mark-done" onClick={() => markComplete(index)}>
                    <img alt="Mark as Done" src={mark_done} />
                    Mark as done
                  </button>
                </span>
              </div>
            ))
          ) : (
            <p style={{margin: '4px 0', marginBottom: 0}}>You've don't any tasks. Go ahead and add one.</p>
          )
        }
      </div>
    </div>
  )
}
