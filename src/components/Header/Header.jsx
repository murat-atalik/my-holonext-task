import './header.scss';

import React from 'react';

import logo from '../../assets/images/holonext-logo.png';

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-image">
          <img src={logo} alt="logo" />
        </div>
        <button className="header-button" type="button">
          <i className="fas fa-user" />
          <p>Account</p>
        </button>
      </div>
    </header>
  );
}

export default Header;
