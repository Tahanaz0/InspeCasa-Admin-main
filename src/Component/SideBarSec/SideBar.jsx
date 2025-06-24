import React from "react";
import "./SideBar.css";

import { NavLink } from "react-router-dom";

const SideBarSec = () => {
  return (
    <>
      <div className="side-container">
        <div className="side-inner-container">
          <img src="/images/logo.svg" alt="" />
        </div>
        <div className="sideBarAll">
        <div className="side-bar-section">
          <NavLink
            to="/user"
            className={({ isActive }) =>
              isActive ? "side-bar active" : "side-bar"
            }
          >
            <img src="/images/user.svg" alt="" />
            <p>Users</p>
          </NavLink>

          <NavLink
            to="/property"
            className={({ isActive }) =>
              isActive ? "side-bar active" : "side-bar"
            }
          >
            <img src="/images/property.svg" alt="" />
            <p>Property</p>
          </NavLink>

          <NavLink
            to="/report"
            className={({ isActive }) =>
              isActive ? "side-bar active" : "side-bar"
            }
          >
            <img src="/images/report.svg" alt="" />
            <p>Reports</p>
          </NavLink>

          <NavLink
            to="/support"
            className={({ isActive }) =>
              isActive ? "side-bar active" : "side-bar"
            }
          >
            <img src="/images/support.svg" alt="" />
            <p>Support</p>
          </NavLink>
        </div>{" "}
        
        <div className="logout">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "side-bar active" : "side-bar "
            }
          >
            <img className="log-img" src="/images/logout.svg" alt="" />
            <p>Logout</p>
          </NavLink>
        </div>
        </div>
      </div>
    </>
  );
};

export default SideBarSec;
