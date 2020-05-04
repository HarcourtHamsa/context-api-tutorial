import React, { useContext } from 'react'
import { AppContext } from "../context"

const Dashboard = () => {
    const [displayName] = useContext(AppContext)
    return (
        <div>
            
            <div className="center">
                <h1>Hi {displayName} 😎</h1>
                <a href="/" className="btn-grn">Go Home</a>
            </div>
        </div>
    )
}

export default Dashboard
