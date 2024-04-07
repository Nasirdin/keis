import React, { useState } from "react";
// ---- Style ---- //
import "./index.scss";
// ---- Components ---- //
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/img/logo.jpg";
import { HeaderNavigatinLinks } from "../../constants";

const Header = () => {
  const currentUrl = useLocation();
  const [burgerActive, setBurgerActive] = useState(false);

  const accessTokenKeisAdmin = localStorage.getItem("accessTokenKeisAdmin");

  const burgerHandler = () => {
    setBurgerActive(!burgerActive);
  };

  return (
    <header className={`header ${currentUrl.pathname === "/" ? "" : "active"}`}>
      <div className="container">
        <div className="header__logo-box">
          <Link>
            <img className="header__logo" src={Logo} alt="Logotype" />
          </Link>
          <h1 className="header__logo-text">
            КОЛЛЕДЖ ЭКОНОМИКИ И СЕРВИСА
            <br />
            <span>
              НИУ Кыргызский экономический университет имени М.Рыскулбекова
            </span>
          </h1>
        </div>

        <nav className="header__nav nav">
          <ul className={`nav__links ${!burgerActive ? "" : "active"}`}>
            {HeaderNavigatinLinks.map((navLink) => (
              <li className="nav__item" key={navLink.id}>
                <Link
                  className="nav__link"
                  to={navLink.to}
                  onClick={burgerHandler}
                >
                  {navLink.name}
                </Link>
              </li>
            ))}
            {!accessTokenKeisAdmin ? (
              <li className="nav__item">
                <Link
                  className="nav__link"
                  to={"/login"}
                  onClick={burgerHandler}
                >
                  Войти
                </Link>
              </li>
            ) : (
              <li className="nav__item">
                <Link
                  className="nav__link"
                  to={"/admin"}
                  onClick={burgerHandler}
                >
                  Личный кабинет
                </Link>
              </li>
            )}
          </ul>
          <div
            className={`nav__burger burger ${!burgerActive ? "" : "active"}`}
            onClick={burgerHandler}
          >
            <div className="burger__item"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
