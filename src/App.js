import React from 'react'
import SignedOutView from './components/SignedOutView/SignedOutView'
import { Route, Switch } from "react-router-dom"
import SignUpView from './components/SignUpView/SignUpView'
import SignedInView from './components/SignedInView/SignedInView'
import './index.css'

function App(props) {
    
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={ SignedOutView } />
                <Route path="/signup" component={ SignUpView } />
                <Route path="/app" component={ SignedInView } />
            </Switch>
        </div>
    )
}

export default App
