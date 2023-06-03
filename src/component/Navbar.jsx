import React from "react";
import "../styles/Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white h-100">
      <div className="container-fluid">
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item hometext ">
              <a className="nav-link text-white" href="/">
                Home
              </a>
            </li>
            <li className="nav-item hometext">
              <a className="nav-link text-white" href="/">
                About Us
              </a>
            </li>
            <li className="nav-item hometext">
              <a className="nav-link text-white" href="/">
                Service
              </a>
            </li>
            <li className="nav-item hometext">
              <a className="nav-link text-white" href="/">
                Project
              </a>
            </li>
          </ul>
        </div>
        <button
          className="btn"
          type="submit"
          style={{ backgroundColor: "#ff7321" }}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
}
