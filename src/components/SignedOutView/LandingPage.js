import React, { useState } from 'react'
import InfoCards from './InfoCards/InfoCards';
import './styles.css'
import firebase from '../../backend/firebaseConfig'
import { useHistory } from 'react-router-dom'
import google from '../../images/google.png'
import { CircularProgress } from '@rmwc/circular-progress'
import '@rmwc/circular-progress/circular-progress.css'

const LandingPage = () => {
  document.title = "Projectrack"
  const history = useHistory()
  const [ loading, setLoading ] = useState(false)

  const handleSignUp = () => {
    setLoading(true)
    firebase.authenticate()
    .then(result => {
      const { uid, displayName, email, photoURL } = result.user
      localStorage.setItem("uid", uid)
      localStorage.setItem("name", displayName)
      localStorage.setItem("email", email)
      localStorage.setItem("photoUrl", photoURL)
      firebase.db.collection("users").doc(result.user.uid).get()
      .then(userData => {
        if(!userData.data().accountSetUp) {
          localStorage.setItem("accountSetUp", false)
          if ( localStorage.getItem("userAt") )
            history.replace(`/signup/${ localStorage.getItem("userAt") }`)
          else {
            history.replace("/signup/userDetails")
          }
        }
        else {
          localStorage.setItem("accountSetUp", true)
          history.replace("/app")
        }
      })
      .catch(error => {
        history.replace("/signup/userDetails")
        localStorage.setItem("accountSetUp", false)
      })
    })
    .catch(error => {
      setLoading(false)
      alert(error)
    })
  }

  return (
    <div className="landing-page">
      <div className="getting-started">
        <h1 className="title">Welcome to Projectrack</h1>
        <p className="subtitle">
          A simple & useful tool for managing your projects. <br></br>
          Sign up to get started or sign in if you've already signed up.
        </p>
        {
          !loading ? (
            <button className="sign-in-btn" onClick={ handleSignUp }>
              <img src={ google } alt="Google" />
              Sign In
            </button>
          ) : (
            <CircularProgress className="sign-in-btn" />
          )
        }
      </div>
      <div className="info-cards">
        <InfoCards />
      </div>
    </div>
  )
}

export default LandingPage
