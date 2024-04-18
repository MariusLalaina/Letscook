import React from 'react'
import { Navigate, Outlet, redirect } from 'react-router-dom'
import Connected from './components/connected'

function ProtectedRoute() {

  return (
    <>
    <Connected/>
   { localStorage.getItem("token") ? <Outlet/> : <Navigate to={"/log"}/>}
    </>
    )
}

export default ProtectedRoute