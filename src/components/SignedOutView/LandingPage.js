import React, { useContext } from 'react'
import InfoCards from './InfoCards/InfoCards';
import { Link } from 'react-router-dom'
import './styles.css'
import FirebaseContext from '../../context/FirebaseContext'

const LandingPage = () => {

  const firebase = useContext(FirebaseContext)

  const handleSignUp = () => {
    firebase.authenticate()
    .then(result => {
      
    })
  }

  return (
    <div className="landing-page">
      <div className="getting-started">
        <h1 className="title">Welcome to Projectrack</h1>
        <p className="subtitle">
          A simple yet useful app for managing your projects. <br></br>
          Sign up to get started or sign in if you've already signed up.
        </p>
        <button className="sign-in-btn">
          <Link to="/signin" className="link">
            Sign In
          </Link>
        </button>
        <button className="sign-up-btn" onClick={ handleSignUp }>
          Sign Up
        </button>
      </div>
      <div className="info-cards">
        <InfoCards />
      </div>
    </div>
  )
}

export default LandingPage
