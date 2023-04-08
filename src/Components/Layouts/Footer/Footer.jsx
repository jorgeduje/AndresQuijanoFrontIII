import React from "react";
import { Outlet, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/favs">Favs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
