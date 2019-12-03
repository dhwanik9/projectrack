import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import dashboard from '../../images/dashboard.png'
import myprogress from '../../images/myprogress.png'
import myteam from '../../images/myteam.png'
import documents from '../../images/documents.png'
import firebase from '../../backend/firebaseConfig'
import { withRouter } from 'react-router-dom'

const SideBar = (props) => {
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
    firebase.signOut()
    props.history.replace('/')
  }

  return (
    <>
      <div className="header">
        <h1>Projectrack</h1>
        <button className="logoutBtn" onClick={ onLogout }>Logout</button>
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

export default withRouter(SideBar)
