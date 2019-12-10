import React from 'react'
import ProfileCard from './ProfileCard'

const MyTeam = () => {
  document.title = "My Team"
  
  return (
    <div className="my-team">
      <h2 style={{marginTop: 0}}>My Team</h2>
      <ProfileCard />
    </div>
  )
}

export default MyTeam
