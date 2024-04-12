import React from "react";
import logo from "assets/logo.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to='/'>
      <img title="TratoTech Logo" src={logo} alt="" />
    </Link>
  );
}
