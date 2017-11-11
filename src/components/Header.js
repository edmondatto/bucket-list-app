import React from 'react';

const Header = () =>
  <nav className="navbar navbar-default" id="nav-bar">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
        </button>
        <a className="navbar-brand" id="app-logo" href="#">VORTEX BUCKETLIST</a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <button type="button" className="btn btn-default navbar-btn" id="create-bucket-button">CREATE BUCKET LIST</button>
          <button type="button" className="btn btn-default navbar-btn" id="sign-out-button">SIGN OUT</button>
        </ul>
      </div>
    </div>
  </nav>;

export default Header;