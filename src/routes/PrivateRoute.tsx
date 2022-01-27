import {FC, useState} from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute: FC = () => {
    const [loading, setLoading] = useState(false)
    const [isAuthenticated, setAuth] = useState(true)

    if (loading) return <div>spinner component</div>
    if (!isAuthenticated) return <Navigate to="/login" />
  
    return <Outlet />
}

export default PrivateRoute
