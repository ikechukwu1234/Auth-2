import React from 'react'
import {Outlet} from "react-router-dom"

const DashBoardLayout :React.FC= () => {
  return (
    <div>
        <div>Dashboard Layout</div>
        <Outlet />
      
    </div>
  )
}

export default DashBoardLayout
