import React, { useState } from "react";
// ---- Style ---- //
import "./index.scss";
import { AllCourses } from "../../constants";
import { PiPlusBold, PiMinusBold } from "react-icons/pi";

// ---- Components ---- //

const StudyTable = () => {
  const [isActive, setIsAvtive] = useState(null);
  const openSecondCol = (indx) => {
    if (isActive === null) {
      setIsAvtive(indx);
    } else if (isActive === indx) {
      setIsAvtive(null);
    } else {
      setIsAvtive(indx);
    }
    console.log(indx);
  };

  return (
    <div className="study-table">
      <ul className="study-table__col study-table__head">
        <li className="study-table__header">Шифр</li>
        <li className="study-table__header">Специальность</li>
        <li className="study-table__header form">Форма обучения</li>
      </ul>
      {AllCourses.map((course, indx) => (
        <div className="tabeel" key={indx}>
          <ul className="study-table__col study-table__content">
            <li className="study-table__body">{course.direction}</li>
            <li className="study-table__body">{course.specialty}</li>
            <li className="study-table__body form">{course.formOfEducation}</li>
            <li className="study-table__body">
              <p
                className="study-table__icon"
                onClick={(e) => openSecondCol(indx)}
              >
                {indx === isActive ? <PiMinusBold /> : <PiPlusBold />}
              </p>
            </li>
          </ul>
          <ul
            className={`study-table__secondCol ${
              indx === isActive ? "active" : ""
            }`}
          >
            <li>
              На базе среднего общего образования:{" "}
              {course.durationFromBasicEducation}
            </li>
            <li>
              На базе основного общего образования:{" "}
              {course.durationFromSecondaryEducation}
            </li>
            <li>
              Виды профессиональной деятельности выпускников:
              {course.typesOfProfessionalActivities.map((item) => (
                <span>{item},</span>
              ))}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StudyTable;
