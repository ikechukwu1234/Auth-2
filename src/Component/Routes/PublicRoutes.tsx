import { Navigate } from "react-router-dom"
import HomeLayout from "../Layouts/HomeLayout"
import Login from "../Pages/Login"
import Register from "../Pages/Register"




export const PublicRoutes = () => {
    return [
        {
            element: <HomeLayout />,
            children: [
                {
                    path: "/",
                    element: <Register />,
                },
                {
                    path: "/login",
                    element: <Login />,
                },
                {
                    path: "*",
                    element: <Navigate
                    to='/login' />,
                }
            ]
        }
    ]
}
