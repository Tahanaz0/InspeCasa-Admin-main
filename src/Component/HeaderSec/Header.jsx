import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router";
import SideBarMenu from "./SideBarMenu";
import { colors } from "@mui/material";

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
        return "Report";
    }
  };

  const heading = getHeading(location.pathname);
  return (
    <>
      <div className="header-container">
        <div className="header-inner-container">
          <div className="icon">
            <SideBarMenu />
            {/* <span className="menu">
            <FontAwesomeIcon icon={faBars} className="menu-icon" />
          </span> */}
            <h2>{heading}</h2>
          </div>
          <div className="text">
            <div className="search-wrapper">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />

              <style>
                {`
                  .custom-input::placeholder {
                   color: #008080;
                   }
                `}
              </style>

              <input
                type="text"
                placeholder="Search for something....."
                className="custom-input"
                style={{
                  backgroundColor: "#f2f2f2",
                  color: "black",
                  // border: "1px solid \",
                  outline: "none",
                  borderRadius: "5px",
                }}
              />
            </div>

            <img className="avator" src="/images/avator.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
