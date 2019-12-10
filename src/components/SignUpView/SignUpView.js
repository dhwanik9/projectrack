import React from 'react'
import Details from './Details/Details'
import firebase from  '../../backend/firebaseConfig'
import { useHistory } from 'react-router-dom'

const SignUpView = () => {
  const history = useHistory()

  if(!firebase.getUserId()) {
    history.replace('/')
  } 

  return (
    <Details />
  )
}

export default SignUpView
