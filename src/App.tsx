import React, { useContext } from 'react'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { PublicRoutes } from './Component/Routes/PublicRoutes'
import {PrivateRoutes} from "./Component/Routes/PrivateRoutes"
import {GlobalContext} from './Component/Services/GlobalContext'

const App:React.FC= () => {
  const {isAuthenticated} = useContext (GlobalContext);

  const router = createBrowserRouter([
    isAuthenticated? PrivateRoutes(): {},
    ...PublicRoutes(),
  ])

  return <RouterProvider router={router} />  
}

export default App
