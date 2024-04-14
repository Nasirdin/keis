import React from "react";
// ---- Style ---- //
import "./index.scss";
import { OurBenefits } from "../../constants";
import StudyTable from "../StudyTable";

// ---- Components ---- //

const Applicant = () => {
  return (
    <div className="applicant">
      <div className="container">
        <h1 className="applicant__title">Дорогой абитуриент!</h1>
        <p className="applicant__text">
          От всей души, приветствуем вас на сайте{" "}
          <b>Колледжа экономики и сервиса</b>
          Научно-исследовательском университете «Кыргызский экономический
          университет имени Мусы Рыскулбекова» (далее НИУ КЭУ).
        </p>
        <p className="applicant__text">
          <b>Колледж экономики и сервиса</b> является структурным подразделением
          НИУ КЭУ.
        </p>
        <p className="applicant__text">
          Колледж реализует базовые программы среднего профессионального
          образования. Образовательная деятельность в Колледже ведется согласно
          действующим лицензиям КР.
        </p>
        <p className="applicant__text">
          Колледж экономики и сервиса НИУ КЭУ обеспечивает интеллектуальную
          площадку, где будущий специалист может раскрыть свой потенциал и
          приобрести новые знания. На наше учебное заведение возложена задача
          развития среднего профессионального образования по следующим
          специальностям:
        </p>

        <StudyTable />

        <h2 className="applicant__title title title-2">Сроки обучения:</h2>
        <p className="applicant__date">
          <span>на базе 9 кл.– 2 года 10 мес.</span>
          <br />
          <span>на базе 11 кл. – 1 год 10 мес.</span>
        </p>
        <p className="applicant__text">
          По специальности «Технология продукции общественного питания»:
        </p>
        <p className="applicant__date">
          <span>на базе 9 кл.– 3 года 6 мес.</span>
          <br />
          <span>на базе 11 кл. – 2 год 6 мес.</span>
        </p>
      </div>

      <div className="benefits">
        <div className="container">
          <h2 className="benefits__title title">Наши преимущества</h2>
          <ul className="benefits__items">
            {OurBenefits.map((benefits, indx) => (
              <li className="benefits__item">
                <h3 className="benefits__item-title ">{benefits.title}</h3>
                <p className="benefits__text">{benefits.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="contacts">
        <div className="container">
          <h2 className="contacts__title title">Контакты</h2>
          <p className="contacts__text">
            Сайт для регистрации:{" "}
            <a
              rel="noopener noreferrer"
              className="contacts__link"
              href="https://2020.edu.gov.kg/spuz/"
              target="_blank"
            >
              https://2020.edu.gov.kg/spuz/
            </a>{" "}
            (КЭиС №67)
          </p>
          <p className="contacts__text">
            По всем вопросам можно обращаться в Приемную комиссию колледжа по
            следующим контактным данным:
          </p>
          <p className="contacts__text">
            WhatsApp:{" "}
            <a
              className="contacts__link"
              href="https://wa.me/996709891489"
              target="_blank"
              rel="noopener noreferrer"
            >
              0(709) 89-14-89
            </a>
            ;{" "}
            <a
              className="contacts__link"
              href="https://wa.me/996505370035"
              target="_blank"
              rel="noopener noreferrer"
            >
              0(505) 37-00-35.
            </a>
          </p>
          <p className="contacts__text">
            Телефоны:
            <a className="contacts__link" href="tel:+996709891489">0(709) 89-14-89</a>
            <a className="contacts__link" href="tel:+996505370035">0(505) 37-00-35</a>
          </p>
          <p className="contacts__text">
            Эл.почта:{" "}
            <a href="mailto:aishaernsovna@gmail.com" className="contacts__link">aishaernsovna@gmail.com</a>{" "}
            .
          </p>
          <p className="contacts__text">Уважаемый абитуриент!</p>
          <p className="contacts__text">
            <b>
              Добиться успеха в жизни так же просто, как хорошо учиться. Все,
              что вам нужно сделать, это уделить внимание, много работать и
              сделать все возможное.
            </b>
          </p>
          <p className="contacts__text">До встречи в КОЛЛЕДЖЕ!</p>
        </div>
      </div>
    </div>
  );
};

export default Applicant;
