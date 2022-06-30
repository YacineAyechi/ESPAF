import React, { useState } from "react";
import "./Navbar.css";
import { FiChevronDown } from "react-icons/fi";
import { FaTimesCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  // const [isMobile, setIsMobile] = useState(false);

  return (
    <header>
      <div className="title-container">
        <h1 className="b-title">
          <a href="#">ESPAF</a>
        </h1>
        <h2 className="s-title">
          Ecole supérieure privée d'assurance et de finance
        </h2>
      </div>
      <div className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="">
              ESPAF
              <span className="down-fav">
                <FiChevronDown />
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              Licences
              <span className="down-fav">
                <FiChevronDown />
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              Master
              <span className="down-fav">
                <FiChevronDown />
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              Inscription
              <span className="down-fav">
                <FiChevronDown />
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              ETUDIANTS INTERNATIONAUX
              <span className="down-fav">
                <FiChevronDown />
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="">STAGE & EMPLOI</a>
          </li>
          <li className="nav-item">
            <a href="">Contact</a>
          </li>
        </ul>
        {/* <button
          className="mobile-hamburger"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <FaTimesCircle /> : <GiHamburgerMenu />}
        </button> */}
      </div>
    </header>
  );
}

export default Navbar;
