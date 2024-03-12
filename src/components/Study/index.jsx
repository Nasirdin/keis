import React from "react";
// ---- Style ---- //
import "./index.scss";
import StudyTable from "../StudyTable";

// ---- Components ---- //

const Study = () => {
  return (
    <div className="study">
      <div className="container">
        <h2 className="study__title title">
          КЭиС осушествляет подготовку по следующим напралениям:
        </h2>
        <h3 className="study__second-title">Среднее профессиональное образование</h3>
        <StudyTable />
      </div>
    </div>
  );
};

export default Study;
