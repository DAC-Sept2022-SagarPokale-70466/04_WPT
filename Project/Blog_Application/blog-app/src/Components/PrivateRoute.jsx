import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn } from '../auth';
const PrivateRoute = () => {


    if (isLoggedIn()) {
        // debugger
        return <Outlet />
    }
    else {
        // debugger
        return <Navigate to={'/login'} />
    }
}

export default PrivateRoute