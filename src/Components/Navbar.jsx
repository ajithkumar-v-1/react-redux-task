import React from "react";

const Navbar = ({totalQuantity}) => {
  return (
    <div>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg py-2 ">
        <div className="container">
          <h1 className="navbar-brand fw-bold">PRODUCTS</h1>
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ms-0 ms-md-3">
                <a className="nav-link" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item ms-0 ms-md-3">
                <a className="nav-link" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item ms-0 ms-md-3">
                <a className="nav-link" href="#">
                  CONTACT US
                </a>
              </li>
              <li className="nav-item ms-0 ms-md-3">
                <a className="nav-link fw-bold" href="3">
                  CART({totalQuantity})
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
