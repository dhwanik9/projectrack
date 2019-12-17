import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import uuid from 'uuid/v1'
import '../SignUp.css'
import firebase from '../../../backend/firebaseConfig'
import { CircularProgress } from "@rmwc/circular-progress"
import '@rmwc/circular-progress/circular-progress.css'

const UserDetails = () => {
  const history = useHistory()
  const [skills, setSkills] = useState([])
  const [skill, setSkill] = useState('')
  const [userDetails, setUserDetails] = useState({
    role: '',
    description: '',
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const user = {
    uid: localStorage.getItem("uid"),
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    photoUrl: localStorage.getItem("photoUrl"),
  }

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
    e.preventDefault()
    if (skill)
      addSkill(skill)
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
      userDetails.description === "" ||
      skills.length === 0) {
      setError("All the fields are required")
    }
    else {
      setError("")
      setIsLoading(true)
      firebase.storeUserData(user, userDetails, skills)
      .then(() => {
        firebase.storeTaskData(user.uid)
        .then(() => {
          firebase.storeCompletedTaskData(user.uid)
          .then(() => {
            firebase.storeDocumentData(user.uid)
            .then(() => {
              localStorage.setItem("userAt","userPosition")
              setIsLoading(false)
              if(user.uid)
                history.replace("/signup/userPosition")
            }).catch(er => {
              alert(er)
            })
          }).catch(er => {
            alert(er)
          })
        }).catch(er => {
          alert(er)
        })
      }).catch((error) => {
        alert(error)
      })
    }
  }
  
  return (
    <form className="user-details">
      <div className="card">
        <div className="card-header">
          <h2 className="card-header-title">Hey, { user.name }</h2>
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
          {
            isLoading ? (
              <CircularProgress />
            ) : (
              <button className="nextBtn" onClick={ saveData } >
                Next
              </button>
            )
          }
        </div>
      </div>
    </form>
  )
}

export default UserDetails
