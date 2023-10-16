import React from 'react'
import {useNavigate} from "react-router-dom"

const Dashboard :React.FC= () => {
    const Navigate = useNavigate();
    const LogoutUser = () => {
        window.localStorage.setItem("k10xAuth", JSON.stringify(false));

        Navigate("/login")
    }
  return (
    <div>
        <h2>Dashboard</h2>
        <button onClick={LogoutUser}>Logout</button>
      
    </div>
  )
}

export default Dashboard
