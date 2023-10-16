import {Navigate} from "react-router-dom"
import DashBoardLayout from "../Layouts/DashBoardLayout"
import Dashboard from "../Pages/Dashboard"


export const PrivateRoutes = () => {
    return {
        element: <DashBoardLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "*",
                element: <Navigate to='/dashbord' replace={true} />,
            },
        ],
    };
}