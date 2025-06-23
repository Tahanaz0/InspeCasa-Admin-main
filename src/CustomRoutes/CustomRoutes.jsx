import React from 'react'
import { Route, Routes } from 'react-router'
import LoginSec from '../Component/LoginSec/LoginSec'
import User from '../Component/Users/User'
import UserPage from '../Pages/UserPage'
import PropertyPage from '../Pages/PropertyPage'
import SupportPage from '../Pages/SupportPage'

const CustomRoutes = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<LoginSec />} />
        <Route path="/user" element={<UserPage/>} />
            <Route path="/property" element={<PropertyPage/>} />
            <Route path="/support" element={<SupportPage/>} />

      </Routes>
    </div>
  )
}

export default CustomRoutes
