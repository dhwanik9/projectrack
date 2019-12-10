import React from 'react'
import SignedOutView from './components/SignedOutView/SignedOutView'
import { Route, Switch } from "react-router-dom"
import SignUpView from './components/SignUpView/SignUpView'
import SignedInView from './components/SignedInView/SignedInView'
import './index.css'

function App() {
    
  return (
    <div className="App">
      <Switch>
        {
          localStorage.getItem("uid") && localStorage.getItem("accountSetUp") === "true" ?
            (<Route exact path="/" component={ SignedInView } />) :
            (<Route exact path="/" component={ SignedOutView } />)
        }
        <Route path="/signup" component={ SignUpView } />
        <Route path="/app" component={ SignedInView } />
      </Switch>
    </div>
  )
}

export default App
