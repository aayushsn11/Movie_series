import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="ui violet">
      <div className="ui sizer vertical segment ">
        <div className="ui Large header">
          <span> Demo Streaming</span>
          <Link style={{ marginLeft: "30px" }} to="/series">
            Series
          </Link>
          <Link style={{ marginLeft: "30px" }} to="/movies">
            Movies
          </Link>
          <div style={{ float: "right" }}>
            <span style={{ marginRight: "50px" }}>Login</span>
            <span>Start your free trial</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
