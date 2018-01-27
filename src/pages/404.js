import React from 'react';

import logo from '../img/logo.png';

const NotFound = () => (
  <div className="container">
    <div className="row" style={{textAlign: "center"}}>
        <img className="logo" src={logo} alt="logo" style={{width: "20%", marginTop: "16%"}} />
        <h1>404</h1>
    </div>
    <br />
    <div className="row" style={{textAlign: "center"}}>
      <div className="col-2"></div>
      <div className="col-8">
        <p>We're sorry, the page you were looking for could not be found.</p>
        <br />
        <p>"If this was unexpected, please send an email describing what happened to us.".</p>
      </div>
      <div className="col-2"></div>
    </div>
  </div>
)

export default NotFound;
