import React from 'react'
import SideBar from './SideBar'
import MainView from './MainView'
import './SignedInView.css'
import { Redirect } from 'react-router-dom'

const SignedInView = () => {
  const uid = localStorage.getItem("uid")
  const accountSetUp = localStorage.getItem("accountSetUp")

  /* if ( !uid || accountSetUp === "false" )
    history.replace("/") */

  return (
    <div className="signed-in-view">
      {
        uid && accountSetUp === "true" ?
          (
            <>
              <SideBar />
              <MainView />
            </>
          ) : (
            <Redirect to="/" />
          )
      }
    </div>
  )
}

export default SignedInView
