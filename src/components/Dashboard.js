import React, { useContext } from 'react'
import { AppContext } from "../context"

const Dashboard = () => {
    const [displayName] = useContext(AppContext)
    return (
        <div>
            
            <div className="center">
                <h1>Welcome {displayName} 😎</h1>
            </div>
        </div>
    )
}

export default Dashboard
