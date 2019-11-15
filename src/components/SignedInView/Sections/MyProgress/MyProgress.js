import React from 'react'
import TaskProgress from './TaskProgress'
import MyTasks from './MyTasks'

const MyProgress = () => {
  document.title = "My Progress"

  return (
    <div className="my-progress">
      <TaskProgress />
      <MyTasks />
    </div>
  )
}

export default MyProgress
