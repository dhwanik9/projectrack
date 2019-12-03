import React from 'react'
import SideBar from './SideBar'
import MainView from './MainView'
import './SignedInView.css'
import firebase from '../../backend/firebaseConfig'
import { useHistory } from 'react-router-dom'

const SignedInView = () => {
  const { history } = useHistory()

  if(!firebase.getUserId()) {
    history.replace('/')
  }

  return (
    <div className="signed-in-view">
      <SideBar />
      <MainView />
    </div>
  )
}

export default SignedInView
