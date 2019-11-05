import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  const labels = [
    { id: 0, label: 'Dashboard', to: 'dashboard' },
    { id: 1, label: 'My Progress', to: 'myProgress' },
    { id: 2, label: 'My Team', to: 'myTeam' },
    { id: 3, label: 'Documents', to: 'documents'},
  ]
  const [show, setShow] = useState(false)

const handleClick = () => {
  setShow(!show)
}

  return (
    <>
      <div className="header">
        <div className="mobile-nav" onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <h1>Projectrack</h1>
        <button className="logoutBtn">Logout</button>
      </div>
      <div className={ ["sidebar", show ? "show" : "hide"].join(' ') }>
        <ul className="sidebar-labels">
          {
            labels.map(label => (
              <li key={ label.id } className="sidebar-label">
                <NavLink
                  onClick={handleClick} 
                  to={`/app/${label.to}`} 
                  className="link"
                  activeStyle={{borderLeft: '3px solid #001960'}}
                  >
                    { label.label }
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default SideBar
