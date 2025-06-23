import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router'
import SideBarMenu from './SideBarMenu'



const Header = () => {

  const location = useLocation();

  const getHeading = (path) => {
    switch (path) {
      case "/":
        return "Home";
      case "/user":
        return "Users";
        case "/property":
        return "Property Management";
         case "/support":
        return "Support";
     
      default:
        return "Page";
    }
  };


  const heading = getHeading(location.pathname);
  return (
    <>


      <div className='header-container'>
        <div className='header-inner-container'>
          <div className='icon'>
            <SideBarMenu />
            {/* <span className="menu">
            <FontAwesomeIcon icon={faBars} className="menu-icon" />
          </span> */}
            <h2>{heading}</h2>
          </div>
          <div className='text'>
            <div className="search-wrapper">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input type="text" placeholder="Search for something....." />
            </div>

            <img className='avator' src="/images/avator.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
