import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navLinks=links.map(link=> <a 
    key={link} href={`#${link}`}>{link}</a>)
 
  return <nav>{ navLinks}</nav>;/* display an <a> tag for each link here */
  
  
}

export default NavBar;
