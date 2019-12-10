import React, { useState } from 'react'
import uuid from 'uuid/v1'
import firebase from '../../../../backend/firebaseConfig'

export const AddTaskForm = ({ closeModal }) => {
  const initialState = {
    id: '',
    title: '',
    description: '',
    completeBy: '',
    completed: false,
  }
  const [taskDetails, setTaskDetails] = useState(initialState)
  const [error, setError] = useState("")
  const uid = localStorage.getItem("uid")
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setTaskDetails({...taskDetails, [name]: value, id: uuid()})
  }

  const handleBlur = (e) => {
    if(!e.target.value) {
      e.target.className = "error"
      e.target.placeholder = "This field is required"
    }
    else {
      e.target.className = "input"
    }
  }

  const handleAdd = (e) => {
    e.preventDefault()
    if(
      taskDetails.title === "" || 
      taskDetails.description === "" ||
      taskDetails.completeBy === "" ) {
      setError("All the fields are required")
    }
    else {
      closeModal()
      firebase.updateTaskData(uid, taskDetails)
      .then(() => {
        setTaskDetails({title: '', description: '', completeBy: ''})
      }).catch(er => {
        alert(er)
      })
    }
  }

  return (
    <form className="add-task-form">
      <label htmlFor="title">Title *</label>
        <input 
          className="input"
          name="title"
          type="text"
          value={taskDetails.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="deadline">Complete By *</label>
        <input
          type="date"
          className="input"
          name="completeBy"
          value={taskDetails.completeBy}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="description">Description *</label>
        <textarea
          className="input"
          name="description"
          type="text"
          rows="3"
          cols="30"
          value={taskDetails.description}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button className="add-task-btn" onClick={handleAdd}>Add</button>
        <span id="error" style={{marginLeft: '8px'}}>{error}</span>
    </form>
  )
}
