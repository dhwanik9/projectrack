import React from 'react'
import MyTasks from './MyTasks'

const MyProgress = () => {
  document.title = "My Progress"

  return (
    <div className="my-progress">
      <MyTasks />
    </div>
  )
}

export default MyProgress
