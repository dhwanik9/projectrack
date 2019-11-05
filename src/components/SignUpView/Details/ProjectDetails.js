import React, { useState } from 'react'
import '../SignUp.css'
import uuid from 'uuid/v1'
const ProjectDetails = () => {
  const initialState = {
    title: '',
    description: '',
    completeBy: '',
    teamMember1: '',
    teamMember2: '',
    teamMember3: '',
  }
  const [projectDetails, setProjectDetails] = useState(initialState)
  const [technologies, setTechnologies] = useState([])
  const [tech, setTech] = useState('')
  const [error, setError] = useState("")
  const [isSubmit, setIsSubmit] = useState(false)
  
  const handleTechChange = (e) => {
    setTech(e.target.value)
  }

  const addTech = (tech) => {
    setTechnologies([...technologies, { tech, id: uuid() }])
  }

  const deleteTech = (id) => {
    setTechnologies(
      technologies.filter(technology => technology.id !== id)
    )
  }
  const handleTechClick = (e) => {
    const techInput = document.getElementById("tech-used")
    e.preventDefault()
    if (tech)
      addTech(tech)
    else {
      techInput.className = "error"
      techInput.placeholder = "Please input something"
    }
    setTech('')
  }
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setProjectDetails({...projectDetails, [name]: value})
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
      projectDetails.title === "" || 
      projectDetails.description === "" ||
      projectDetails.completeBy === "" ||
      technologies.length === 0) {
      setError("All the fields are required")
    }
    else {
      setError("")
      setIsSubmit(true)
    }
  }

  return (
      <form className="project-details">
        <div className="card">
          <div className="card-header">
            <h2 className="card-header-title">Project Details</h2>
            <p className="card-header-subtitle">Fill in the project details below.</p>
            <p className="card-header-subtitle">Required fields are marked with *</p>
          </div>
          <div className="card-content">
            <label htmlFor="title">Title *</label>
            <input 
              className="input"
              name="title"
 
              type="text"
              value={projectDetails.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="deadline">Complete By *</label>
            <input
              type="date"
              className="input"
              name="completeBy"
              value={projectDetails.completeBy}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="tech-used">Technologies Used *</label>
            <input
              type="text"
              id="tech-used"
              name="title"
              value={tech}
              onChange={handleTechChange}
              onBlur={handleBlur}
            />
            <button onClick={handleTechClick} id="addBtn">Add</button>
            <ul>
              {
                technologies.map(technology => (
                  <li key={technology.id}>
                    {technology.tech}
                    <span onClick={() => deleteTech(technology.id)}>X</span>
                  </li>
                ))
              }
            </ul>
            <label htmlFor="deadline">Team Member 1 *</label>
            <input
              type="text"
              className="input"
              name="teamMember1"
              value={projectDetails.teamMember1}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="deadline">Team Member 2 *</label>
            <input
              type="text"
              className="input"
              name="teamMember2"
              value={projectDetails.teamMember2}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="deadline">Team Member 3 *</label>
            <input
              type="text"
              className="input"
              name="teamMember3"
              value={projectDetails.teamMember3}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="description">Description *</label>
            <textarea
              className="input"
              name="description"
              type="text"
              rows="3"
              cols="30"
              value={projectDetails.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          <span id="error">{error}</span>
          {
            isSubmit ? (
              <button className="nextBtn" >
                Dashboard
                {/* <Link to="/dashboard" className="link">
                  Dashboard
                </Link> */}
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

export default ProjectDetails
