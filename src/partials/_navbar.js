import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        
      
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
  <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
    <a className="navbar-brand brand-logo me-5" to="../index.html"><img src="../assets/images/logo.svg" className="me-2" alt="logo" /></a>
    <a className="navbar-brand brand-logo-mini" to="../index.html"><img src="../assets/images/logo-mini.svg" alt="logo" /></a>
  </div>
  <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
      <span className="icon-menu"></span>
    </button>
    <ul className="navbar-nav mr-lg-2">
      <li className="nav-item nav-search d-none d-lg-block">
        <div className="input-group">
          <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
            <span className="input-group-text" id="search">
              <i className="icon-search"></i>
            </span>
          </div>
          <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" />
        </div>
      </li>
    </ul>
    <ul className="navbar-nav navbar-nav-right">
      <li className="nav-item dropdown">
        <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" to="#" data-bs-toggle="dropdown">
          <i className="icon-bell mx-0"></i>
          <span className="count"></span>
        </a>
        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
          <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <div className="preview-icon bg-success">
                <i className="ti-info-alt mx-0"></i>
              </div>
            </div>
            <div className="preview-item-content">
              <h6 className="preview-subject font-weight-normal">Application Error</h6>
              <p className="font-weight-light small-text mb-0 text-muted"> Just now </p>
            </div>
          </a>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <div className="preview-icon bg-warning">
                <i className="ti-settings mx-0"></i>
              </div>
            </div>
            <div className="preview-item-content">
              <h6 className="preview-subject font-weight-normal">Settings</h6>
              <p className="font-weight-light small-text mb-0 text-muted"> Private message </p>
            </div>
          </a>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <div className="preview-icon bg-info">
                <i className="ti-user mx-0"></i>
              </div>
            </div>
            <div className="preview-item-content">
              <h6 className="preview-subject font-weight-normal">New user registration</h6>
              <p className="font-weight-light small-text mb-0 text-muted"> 2 days ago </p>
            </div>
          </a>
        </div>
      </li>
      <li className="nav-item nav-profile dropdown">
        <a className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown" id="profileDropdown">
          <img src="../assets/images/faces/face28.jpg" alt="profile" />
        </a>
        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
          <a className="dropdown-item">
            <i className="ti-settings text-primary"></i> Settings </a>
          <Link className="dropdown-item" to="../pages/authentication/login">
            <i className="ti-power-off text-primary"></i> Logout </Link>
        </div>
      </li>
      <li className="nav-item nav-settings d-none d-lg-flex">
        <a className="nav-link" to="#">
          <i className="icon-ellipsis"></i>
        </a>
      </li>
    </ul>
    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
      <span className="icon-menu"></span>
    </button>
  </div>
</nav>
        </>
    )
}

export default Navbar;