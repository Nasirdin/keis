import React from "react";
// ---- Style ---- //
import "./index.scss";
import { Structure } from "../../constants";
import { Link } from "react-router-dom";
import StructureImg from "../../assets/img/structure.png";

// ---- Components ---- //

const StructurePage = () => {
  return (
    <div className="structure-page">
      <div className="container">
        <h2 className="structure-page__title title">Администрация КЭиС</h2>
        <ul className="structure-page__items">
          <li>
            Директор КЭиС -{" "}
            <a href="/#" className="structure-page__link">
              Узбекова Гульнара Ашырбаковна
            </a>
          </li>
          <li>
            Заместитель директора по ГЯиУР -{" "}
            <a href="/#" className="structure-page__link">
              Шаменалиева Динара Инварбековна
            </a>
          </li>
          <li>
            Заместитетль директора по ВР -{" "}
            <a href="/#" className="structure-page__link">
              Шейшеналиева Назира Темибековна
            </a>
          </li>
          <li>
            Начальник УМО -{" "}
            <a href="/#" className="structure-page__link">
              Молдоева Төркүнбүбү Токтоналиевна
            </a>
          </li>
          <li>
            Заведующий УЧ -{" "}
            <a href="/#" className="structure-page__link">
              Туляганова Жазгуль Кимсанбековна
            </a>
          </li>
          <li>
            Менеджер по практике -{" "}
            <a href="/#" className="structure-page__link">
              Кыдыралиева Мээрим Эриковна
            </a>
          </li>
          <li>
            Менеджер по направлению "Экономика" -{" "}
            <a href="/#" className="structure-page__link">
              Шаадатова Мээрим Шаадатовна
            </a>
          </li>
          <li>
            Менеджер по направлению "Менеджмент" -{" "}
            <a href="/#" className="structure-page__link">
              Шеке кызы Гулжамал
            </a>
          </li>
        </ul>
        <h2 className="structure-page__title title">Структура</h2>

        <ul className="structure-page__cards">
          {Structure.map((pmk, indx) => (
            <li className="structure-page__card" key={indx}>
              <h3 className="structure-page__card-title">{pmk.name}</h3>
              <Link
                className="structure-page__card-link"
                to={`/structure/` + pmk.to + "?id=" + pmk.id}
              ></Link>
            </li>
          ))}
        </ul>
        <h2 className="structure-page__title title">Структура КЭиС НИУ "КЭУ им.М.Рыскулбекова"</h2>
        <div className="structure-page__img">
          <img src={StructureImg} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default StructurePage;
