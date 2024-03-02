import React from "react";
// ---- Style ---- //
import "./index.scss";

// ---- Components ---- //

const Card = ({ course, indx }) => {
  return (
    <div className="card" key={indx}>
      <h3 className="card__title">{course.title}</h3>

      <div className="card__content">
        <ul className="card__items">
          <li>
            <p className="card__text"> Квалификация: {course.qualification}</p>
          </li>
          <li>
            <p className="card__text">
              На базе среднего общего образования:
              <span>
                {course.secondary.year} год {course.secondary.month}
              </span>
            </p>
          </li>
          <li>
            <p className="card__text">
              На базе основного общего образования:
              <span>
                {course.basic.year} год {course.basic.month}
              </span>
            </p>
          </li>
          <li>
            <p className="card__text">
              {course.form.map((form, inx) => (
                <span key={inx}>{form}</span>
              ))}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
