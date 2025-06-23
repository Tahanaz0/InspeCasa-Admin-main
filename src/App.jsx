import React from 'react'
import LoginSec from './Component/LoginSec/LoginSec'
import Header from './Component/HeaderSec/Header'
import SideBarSec from './Component/SideBarSec/SideBar'
import { useLocation } from 'react-router'
import CustomRoutes from './CustomRoutes/CustomRoutes'
import './App.css'

const App = () => {

  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  return (
    <div>
      {!isLoginPage && <Header/>}
       {!isLoginPage && <SideBarSec />}
      {/* <LoginSec/> */}
      <div className={isLoginPage ? '' : 'custom'}>
       <CustomRoutes/>
      </div>
    </div>
  )
}

export default App
