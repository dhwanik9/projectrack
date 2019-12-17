import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import dashboard from '../../images/dashboard.png'
import myprogress from '../../images/myprogress.png'
import myteam from '../../images/myteam.png'
import documents from '../../images/documents.png'
import firebase from '../../backend/firebaseConfig'
import { useHistory } from 'react-router-dom'
import logout from '../../images/logout.png'

const SideBar = () => {
  const history = useHistory()
  const labels = [
    { id: 0, label: 'Dashboard', to: 'dashboard', img: dashboard},
    { id: 1, label: 'My Progress', to: 'myProgress', img: myprogress },
    { id: 2, label: 'My Team', to: 'myTeam', img: myteam },
    { id: 3, label: 'Documents', to: 'documents', img: documents},
  ]
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  const onLogout = () => {
    localStorage.clear()
    firebase.signOut()
    history.replace('/')
  }

  return (
    <>
      <div className="header">
        <h1>Projectrack</h1>
        <img 
          src={ localStorage.getItem("photoUrl") } 
          alt={ localStorage.getItem("name")} 
          height="32" 
          width="32" 
          style={{ filter: 'invert(0)' }} />
        <img 
          src={ logout } 
          alt="Logout" 
          onClick={ onLogout } 
          style={{ height: '24px', width: '24px', boxShadow: 'none', marginTop: '16px' }} />
      </div>
      <div className="bottom-nav">
        <ul className="bottom-nav-icons">
          {
            labels.map(label => (
              <li key={ label.id } className="bottom-nav-icon">
                <NavLink
                  to={`/app/${label.to}`} 
                  className="link"
                  activeStyle={{filter: 'invert(70%)'}}
                  >
                    <img alt={label.label} src={label.img} /><br/>
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="sidebar">
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
