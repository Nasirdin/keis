import React from "react";
// ---- Style ---- //
import "./index.scss";

// ---- Components ---- //

const Footer = () => {
  return (
    <div className="footer">
      <footer className="footer">
        <div className="container">
          <ul className="footer__contacts">
            <li className="footer__item">Контакты/Адрес</li>
            <li className="footer__item">
              Адрес: г. Бишкек, пр-т Манаса, 113 720033
            </li>
            <li className="footer__item">
              <a href="tel:996312323152">+996(312)32-31-52</a>
            </li>
            <li>
              <a href="tel:996772527256">+996(772)52-72-56</a>
            </li>
            <li className="footer__item">
              <a href="mailto:college@keu.ru">college@keu.ru</a>
            </li>
          </ul>

          <p className="footer__text">
            © КОЛЛЕДЖ ЭКОНОМИКИ И СЕРВИСА НИУ Кыргызский экономический
            университет имени М.Рыскулбекова
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
