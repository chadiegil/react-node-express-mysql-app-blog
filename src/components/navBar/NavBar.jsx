import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import Modal from "../Modal/Modal";

const NavBar = () => {
  return (
    <div style={{ paddingLeft: "20px" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <ul
            className="navbar-nav mr-auto"
            style={{
              display: "flex",
              alignItems: "start",
              width: "50%",
            }}
          >
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Modal />
      </nav>
    </div>
  );
};

export default NavBar;
