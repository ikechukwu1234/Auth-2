import React from 'react'
import {Outlet} from "react-router-dom"

const HomeLayout :React.FC= () => {
  return (
    <div>
        <div>HomeLayout</div>
        <Outlet />
      
    </div>
  )
}

export default HomeLayout
