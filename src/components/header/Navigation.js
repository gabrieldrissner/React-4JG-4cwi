import "./Navigation.css";
import React, { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <input
        id="menu__toggle"
        type="checkbox"
        className="menu__toggle"
        checked={isOpen}
        onChange={toggleMenu}
      />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className={`menu__box ${isOpen ? 'open' : ''}`}>
        <li>
          <a className="menu__item" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="menu__item" href="/table">
            Tabelle
          </a>
        </li>
        <li>
          <a className="menu__item" href="/matchday">
            Spieltag
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;