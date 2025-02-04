import React from 'react';
import { Link } from 'react-router-dom';
import "./Styles/Header.css"

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white ">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Biryani By Kilo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/outlets">Outlets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bulk-order">Bulk Order</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book-table">Book Table</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
