import React from "react";
// ---- Style ---- //
import "./index.scss";
import { AllCourses } from "../../constants";
import { IoIosArrowDown } from "react-icons/io";

// ---- Components ---- //

const StudyTable = () => {
  return (
    <div className="study-table">
      <ul className="study-table__col study-table__head">
        <li className="study-table__header">Шифр</li>
        <li className="study-table__header">Специальность</li>
        <li className="study-table__header">Форма обучения</li>
      </ul>
      {AllCourses.map((course, indx) => (
        <ul className="study-table__col study-table__content">
          <li className="study-table__body">{course.direction}</li>
          <li className="study-table__body">{course.specialty}</li>
          <li className="study-table__body">{course.formOfEducation}</li>
          <li className="study-table__body">
            <p className="study-table__icon">
              <IoIosArrowDown />
            </p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default StudyTable;
