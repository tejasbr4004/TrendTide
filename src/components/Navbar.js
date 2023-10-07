import React from "react";
import './style.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
       <>
      <nav Class="navbar navbar-dark bg-dark">
  <div Class="container-fluid">
    <Link Class="navbar-brand" to="/">TrendTide</Link>
    <button Class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span Class="navbar-toggler-icon"></span>
    </button>
    <div Class="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div Class="offcanvas-header">
        <h5 Class="offcanvas-title" id="offcanvasDarkNavbarLabel">TrendTide</h5>
        <button type="button" Class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div Class="offcanvas-body">
        <ul Class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li Class="nav-item">
            <Link Class="nav-link active" aria-current="page" to="/general">General</Link>
          </li>
          <li Class="nav-item">
            <Link Class="nav-link active" aria-current="page" to="/sports">Sports</Link>
          </li>
          <li Class="nav-item">
            <Link Class="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
          </li>
          <li Class="nav-item">
            <Link Class="nav-link active" aria-current="page" to="/politics">Politics</Link>
          </li>
          <li Class="nav-item">
            <Link Class="nav-link active" aria-current="page" to="/science">Science</Link>
          </li>
          <li Class="nav-item">
            <Link Class="nav-link active" aria-current="page" to="/health">Health</Link>
          </li>
          <li Class="nav-item">
            <Link Class="nav-link active" aria-current="page" to="/technology">Technology</Link>
          </li>
          <li Class="nav-item">
            <Link Class="nav-link active" aria-current="page" to="/stocks">Stocks</Link>
          </li>
          <li Class="nav-item">
            <Link Class="nav-link active" aria-current="page" to="/bitcoin">Bitcoin</Link>
          </li>
          <li Class="nav-item">
            <Link Class="nav-link active" aria-current="page" to="/business">Business</Link>
          </li>
        </ul>
        {/* <form Class="d-flex mt-3" role="search">
          <input Class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button Class="btn btn-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </div>
</nav>
       </>
    );
}