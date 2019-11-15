import React, { useState } from 'react'
import { Tasks } from './Tasks'
import { CompletedTasks } from './CompletedTasks'


const MyTasks = () => {
  const initialTasksState = []

  const [tasks, setTasks] = useState(initialTasksState)
  const [completedTasks, setCompletedTasks] = useState([])

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const deleteTask = (id) => {
    const newTasks = [...tasks]
    newTasks.splice(id, 1)
    setTasks(newTasks)
  }
  const markComplete = (index) => {
    setCompletedTasks([...completedTasks, tasks[index]])
    deleteTask(index)
  }
  return (
    <div className="my-tasks">
      <Tasks
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
        markComplete={markComplete} />

      <CompletedTasks 
        completedTasks={completedTasks} />
    </div>
  )
}

export default MyTasks
