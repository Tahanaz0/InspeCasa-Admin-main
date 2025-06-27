import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginSec from '../Component/LoginSec/LoginSec'
import User from '../Component/Users/User'
import UserPage from '../Pages/UserPage'
import PropertyPage from '../Pages/PropertyPage'
import SupportPage from '../Pages/SupportPage'
import ReportPage from '../Pages/ReportPage'
import ReportView from '../Component/Report/ReportView'

const CustomRoutes = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<LoginSec />} />
        <Route path="/user" element={<UserPage/>} />
            <Route path="/property" element={<PropertyPage/>} />
            <Route path="/support" element={<SupportPage/>} />
            <Route path="/report" element={<ReportPage/>} />
            <Route path="/report/view/:index" element={<ReportView />} />

      </Routes>
    </div>
  )
}

export default CustomRoutes
