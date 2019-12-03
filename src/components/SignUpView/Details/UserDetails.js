import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import uuid from 'uuid/v1'
import '../SignUp.css'
import firebase from '../../../backend/firebaseConfig'

const UserDetails = () => {
  const history = useHistory()
  const [skills, setSkills] = useState([])
  const [skill, setSkill] = useState('')
  const [userDetails, setUserDetails] = useState({
    role: '',
    description: '',
  })
  const [error, setError] = useState("")
  const name = firebase.fetchUserData()
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setUserDetails({ ...userDetails, [name]: value })
  }
  const handleSkillChange = (e) => {
    setSkill(e.target.value)
  }

  const addSkill = (tech) => {
    setSkills([...skills, { tech, id: uuid() }])
  }

  const deleteSkill = (id) => {
    setSkills(
      skills.filter(skill => skill.id !== id)
    )
  }
  const handleSkillClick = (e) => {
    const skillInput = document.getElementById("skills")
    e.preventDefault()
    if (skill)
      addSkill(skill)
    else {
      skillInput.className = "error"
      skillInput.placeholder = "Please input something"
    }
    setSkill('')
  }

  const handleBlur = (e) => {
    if(!e.target.value) {
      e.target.className = "error"
      e.target.placeholder = "This field is required"
    }
    else {
      e.target.className = "input"
    }
  }

  const saveData = (e) => {
    e.preventDefault()
    if(
      userDetails.role === "" ||
      userDetails.descriptions === "" ||
      skills.length === 0) {
      setError("All the fields are required")
    }
    else {
      setError("")
      firebase.storeUserData(userDetails, skills).then(() => {
        history.replace("/signup/userPosition")
      }).catch((error) => {
        alert(error)
      })
    }
  }

  return (
    <form className="user-details">
      <div className="card">
        <div className="card-header">
          <h2 className="card-header-title">Hey, { name }</h2>
          <p className="card-header-subtitle">Fill in your details below.</p>
          <p className="card-header-subtitle">
            Required fields are marked with *. <br />
            <b>Do not refresh the page while setting up your account.</b>
          </p>
        </div>
        <div className="card-content">
          <label htmlFor="role">
            Role *
          </label>
          <input
            type="text"
            className="input"
            name="role"
            value={userDetails.role}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="skill">
            Skills *
          </label>
          <input
            type="text"
            id="skills"
            name="skill"
            value={skill}
            onChange={handleSkillChange}
            onBlur={handleBlur}
          />
          <button onClick={handleSkillClick} id="addBtn">Add</button>
          <ul>
            {
              skills.map(skill => (
                <li key={skill.id}>
                  {skill.tech}
                  <span onClick={() => deleteSkill(skill.id)}>X</span>
                </li>
              ))
            }
          </ul>
          <label htmlFor="description">
            Description *
          </label>
          <textarea
            className="input"
            name="description"
            type="text"
            rows="3"
            cols="30"
            value={userDetails.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span id="error">{error}</span>
          <button className="nextBtn" onClick={ saveData } >
            Next
          </button>
        </div>
      </div>
    </form>
  )
}

export default UserDetails
