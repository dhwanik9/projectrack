import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import uuid from 'uuid/v1'
import '../SignUp.css'
const UserDetails = () => {
  const [skills, setSkills] = useState([])
  const [skill, setSkill] = useState('')
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    role: '',
    description: '',
  })
  const [isSubmit, setIsSubmit] = useState(false)
  const [error, setError] = useState("")
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

  const handleClick = (e) => {
    e.preventDefault()
    if(
      userDetails.name === "" || 
      userDetails.email === "" ||
      userDetails.role === "" ||
      userDetails.descriptions === "" ||
      skills.length === 0) {
      setError("All the fields are required")
    }
    else {
      setError("")
      setIsSubmit(true)
    }
  }
  return (
    <form className="user-details">
      <div className="card">
        <div className="card-header">
          <h2 className="card-header-title">Your Details</h2>
          <p className="card-header-subtitle">Fill in your details below.</p>
          <p className="card-header-subtitle">Required fields are marked with *</p>
        </div>
        <div className="card-content">
          <label htmlFor="name">
            Name *
          </label>
          <input
            className="input"
            name="name"
            type="text"
            value={userDetails.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="email">
            Email *
          </label>
          <input
            className="input"
            name="email"
            type="text"
            value={userDetails.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
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
          {
            isSubmit ? (
              <button className="nextBtn" >
                <Link to="/signup/userPosition" className="link">
                  Next
                </Link>
              </button>
            ) : (
              <button className="submitBtn"
                onClick={handleClick}>
                  Submit
              </button>
            )
          }
        </div>
      </div>
    </form>
  )
}

export default UserDetails
