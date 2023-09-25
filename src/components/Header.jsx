import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <div className="headerContent">
      <div className="logo">B-BLOG</div>
      <div className="navigations">
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/list">blog List</Link>{" "}
          </li>
        </ul>
        <div className="searcher">
          <form action="">
            <input type="text" />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
