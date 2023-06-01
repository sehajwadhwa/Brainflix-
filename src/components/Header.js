import React from "react";
import logo from "../assets/Logo/BrainFlix-logo.svg";
import searchIcon from "../assets/Icons/search.svg";
import uploadIcon from "../assets/Icons/upload.svg";
import { Link } from "react-router-dom";

function header() {
  return (
    <div className="header">
      <header className="header__main-container">
        <div className="header__logo-container">
          <Link to="/" className="header__logo-container--link">
            <img className="header__logo" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="header__search-container">
          <img
            className="header__search-container--icon"
            src={searchIcon}
            alt="searchIcon"
          />
          <h4 className="header__search-container--search">Search</h4>
        </div>

        <div className="header__upload-container">
          <div className="header__upload-container-inner">
            <img
              className="header__upload-container-inner--icon"
              src={uploadIcon}
              alt="uploadIcon"
            />
            <h4 className="header__upload-container-inner--upload">UPLOAD</h4>
          </div>
          <div className="header__upload-container--picture"></div>
        </div>
      </header>
    </div>
  );
}

export default header;
