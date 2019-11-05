import React from 'react'
import SideBar from './SideBar'
import MainView from './MainView'
import './SignedInView.css'

const SignedInView = () => {
  return (
    <div className="signed-in-view">
      <SideBar />
      <MainView />
    </div>
  )
}

export default SignedInView
