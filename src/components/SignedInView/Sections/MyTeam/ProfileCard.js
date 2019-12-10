import React from 'react'
import { CircularProgress } from "@rmwc/circular-progress"
import '@rmwc/circular-progress/circular-progress.css'

const ProfileCard = () => {
  const members = []

  for(let i = 0; i < localStorage.getItem("memberCount"); i++) {
    members.push(JSON.parse(localStorage.getItem(`member${i}`)))
  }

  return (
    <div className="profile-container">
      {
        members.length === 0 ? (
          <CircularProgress />
        ) : (
          members.map(member => (
            <div key={ member.uid } className="profile-card">
                <img 
                  src={ member.photoUrl } 
                  alt={ member.name }
                />
                <h3>{ member.name }</h3>
                <p>{ member.description }</p>
                <ul>
                  {
                    member.skills.map(skill => (
                      <li key={ skill.id }>{ skill.tech }</li>
                    ))
                  }
                </ul>
            </div>
          ))
        )
      }
    </div>
  )
}

export default ProfileCard
