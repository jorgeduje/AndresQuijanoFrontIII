import React from "react";
import { Outlet, Link } from "react-router-dom";
import stylesFooter from "./Footer.module.css";
const Footer = () => {
  return (
    <div>
      <Outlet />
      <ul className={stylesFooter.container }>
        <li>
          <Link to="/" className={stylesFooter.links }>Home</Link>
        </li>
        <li>
          <Link to="/dashboard" className={stylesFooter.links }>Dentists</Link>
        </li>
        <li>
          <Link to="/favs" className={stylesFooter.links }>Favs</Link>
        </li>
        <li>
          <Link to="/contact" className={stylesFooter.links }>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
