import React from "react";
import logo from './../../images/logo.svg'
import "./styles.css"

const Header = () => {
  return (
    <div className='header-content'>
      <img src={logo} alt="logo" className="img"/>
      <p className='content'>Tickets</p>
      <p className='content'>New Ticket</p>
      <p className='content'>Reports</p>
      <p className='content login'>Login</p>
    </div>
  );
};

export default Header;
