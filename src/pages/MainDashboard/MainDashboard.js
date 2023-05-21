import React from 'react'
import Sidebar from '../../components/sidebar/sidebare'
import { Outlet } from 'react-router-dom'
import './MainDashboard.css'

function MainDashboard() {
  return (
    <div className='main-dashboard'>
        <Sidebar />
        <div className='dashboard-pages'>
            <Outlet />
        </div>
    </div>
  )
}

export default MainDashboard