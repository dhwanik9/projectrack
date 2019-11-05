import React, { useState } from 'react';
import SignedOutView from './components/SignedOutView/SignedOutView'
import { Route, Redirect } from "react-router-dom";
import SignUpView from './components/SignUpView/SignUpView';
import SignedInView from './components/SignedInView/SignedInView'
import './index.css'

function App() {
    const [signIn, setSignIn] = useState(true)
    const handleClick = (e) => {
        setSignIn(true)
    }
    return (
        <div className="App">
            {
                signIn ? (
                    <>
                        <Redirect to="/app" />
                        <Route path="/app" component={SignedInView} />
                    </>
                ) : (
                    <>
                        <button onClick={handleClick}>Signin</button>
                        <Route exact path="/" component={SignedOutView} />
                        <Route path="/signup" component={SignUpView} />
                    </>
                )
            }
        </div>
    )
}

export default App;
