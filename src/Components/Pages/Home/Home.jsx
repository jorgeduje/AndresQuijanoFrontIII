import React, { useContext } from "react";
import Button from "@mui/material/Button";
import stylesHome from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={stylesHome.container }>
      <h1>Home</h1>
      <Link to="/dashboard">
      <Button variant="contained">Dentists</Button>
      </Link>
    </div>
  );
};

export default Home;
