import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import logo from '../../img/logo.png';

import { config } from '../../../site-config'

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      collapse: true
    }
  }

  render () {
    let active = "";
    if (typeof window !== `undefined`) {
      active = "/" + window.location.pathname.split("/")[1];
    }
    return (
      <header className="header">
        <nav className="row navbar sticky-top navbar-expand-lg navbar-light" style={{borderBottom: "1px solid #eee", backgroundColor: "white"}}>
          <div className="col-md-3 col-0"></div>
          <div className="col-md-1 col-4 navbar-brand">
            <img className="navbar-brand" height={35} style={{marginBottom: "5%"}} src={logo}  alt="Product logo" />
            <Link className="navbar-brand" style={{marginLeft: "2%"}} to="/">Product</Link>
          </div>
          <button className="navbar-toggler" onClick={() => {this.setState({collapse: this.state.collapse ? false : true})}} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{marginRight: "3%"}}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={"col-8 navbar-collapse " + (this.state.collapse ? "collapse" : "")} id="navbarSupportedContent">
            <div className="navbar-nav mr-auto">
              {config.menuItems.map((item) => {
                return <Link onClick={() => {this.setState({collapse: true})}} key={item.name} className={"nav-item nav-link " + (active === item.path ? "active": "")} to={item.path}>{item.name}</Link>
              })}
            </div>
          </div>
        </nav>
      </header>
    );
  }
}