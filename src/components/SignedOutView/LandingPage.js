import React from 'react'
import InfoCards from './InfoCards/InfoCards';
import { Link } from 'react-router-dom'
import './styles.css'
import firebase from '../../backend/firebaseConfig'
import { useHistory } from 'react-router-dom'

const LandingPage = () => {
  document.title = "Projectrack"
  const history = useHistory()

  const handleSignUp = () => {
    firebase.authenticate()
    .then(result => {
      const { uid, displayName, email, photoURL} = result.user
      firebase.db.collection("users").doc(uid).set({
        uid: uid,
        name: displayName,
        email: email,
        photoUrl: photoURL,
        accountSetUp: false,
      })
      .then(() => {
        firebase.db.collection("users").doc(result.user.uid).get()
        .then(userData => {
          !userData.data().accountSetUp ? 
            history.push("/signup/userDetails") :
            history.push("/app")
        })
        .catch(error => {
          history.push("/signup/userDetails")
        })
      })
    })
    .catch(error => {
      alert(error)
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
