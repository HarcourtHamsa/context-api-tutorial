import React, { useState, useContext } from 'react'
import { AppContext } from "../context"
import { Redirect } from "react-router-dom";

const Home = () => {
    const [userInput, setUserInput] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    // Create a local state using react hooks

    const [, setDisplayName] = useContext(AppContext)
    // We destructure what we passed in our AppProvider

    const updateUserInput = (e) => {
        setUserInput(e.target.value)
    }

    const handleFormSubmission = (e) => {
        e.preventDefault()
        // Stop the page from reloading

        setDisplayName(userInput)
        // Change the value of displayName throughout our app

        setIsLoggedIn(true)
        // Setting isLoggedIn to True so we can redirect to our dashboard
    }

    if (isLoggedIn) {
        return (<Redirect to="/dashboard" />)
        // We are redirecting the user to the dashboard
    }

    return (
        <div>
            <div className="center">
                <h3>Hi, What's your name?</h3>
                <form onSubmit={handleFormSubmission}>
                    <input
                        type="text"
                        name="userInput"
                        placeholder="What should i call you?"
                        value={userInput}
                        onChange={updateUserInput} />
                    <button>Continue</button>
                </form>
            </div>
        </div>
    )
}

export default Home
