import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark py-1">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            MovieRental
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/movies"
                >
                  Movies
                </Link>
              </li>
              <span>|</span>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white hover:text-gray-200 cursor-pointer"
                  aria-current="page"
                  to="/rental"
                >
                  Rentals
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white "
                  aria-current="page"
                  to="/customers"
                >
                  Customers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white "
                  aria-current="page"
                  to="/genres"
                >
                  Genres
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white "
                  aria-current="page"
                  to="/register"
                >
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white "
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
