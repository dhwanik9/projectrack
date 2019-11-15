import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Dashboard from './Sections/Dashboard/Dashboard'
import MyProgress from './Sections/MyProgress/MyProgress'
import MyTeam from './Sections/MyTeam'
import Documents from './Sections/Documents'

const MainView = () => {
  const sections = [
    {
      path: '/app/dashboard/',
      component: Dashboard
    },
    {
      path: '/app/myprogress/',
      component: MyProgress
    },
    {
      path: '/app/myteam/',
      component: MyTeam
    },
    {
      path: '/app/documents/',
      component: Documents
    },
  ]
  return (
    <div className="main-view">
      <Redirect to="/app/dashboard/" />
      {
        sections.map((section, index) => (
          <Route 
            exact={section.exact}
            key={index}
            path={section.path} 
            component={section.component} />
        ))
      }
    </div>
  )
}

export default MainView
