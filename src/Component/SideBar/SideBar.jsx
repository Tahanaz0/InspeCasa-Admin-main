import React from 'react'
import "./SideBar.css"

const SideBar = () => {
  return (
    <div className='SideBar-container'>
        <div className='sideBar-inner-container'>
            <div className='logo'>
                <img src="/images/logo.svg" alt="" />
            </div>

            <div className='sideBar-section'>
                <div className='sideBar'>
                     <img src="/images/usericon.svg" alt="" />
                     <p>User</p>
                </div>

                <div className='sideBar'>
                     <img src="/images/property.svg" alt="" />
                     <p>Property</p>
                </div>

                <div className='sideBar'>
                     <img src="/images/reports.svg" alt="" />
                     <p>Reports</p>
                </div>

                <div className='sideBar'>
                     <img src="/images/support.svg" alt="" />
                     <p>Support</p>
                </div>
                 <div className='sideBar'>
                 <img src="/images/logout.svg" alt="" />
                   <p>logout</p>
                   </div>
                
            </div>
           
        </div>
      
    </div>
  )
}

export default SideBar
