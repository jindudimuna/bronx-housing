import React from "react";



function NavBar(){
    return(          
    <header className="header">
      <a className="logo" href=".page-top">BronxManhattan</a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
      <ul className="menu">
        <li><a href="#one" className="link link-theme link-arrow">About</a></li>
        <li><a href="#two" className="link link-theme link-arrow">Contact</a></li>
        <li><a href="#three" className="link link-theme link-arrow">Sign up</a></li>
    
      </ul>
    </header>
  
    )
}

export default NavBar;