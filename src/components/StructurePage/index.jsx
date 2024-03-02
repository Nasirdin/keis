import React from "react";
// ---- Style ---- //
import "./index.scss";
import { Structure } from "../../constants";
import { useSelector } from "react-redux";

// ---- Components ---- //

const StructurePage = () => {
  const structureList = useSelector(
    (state) => state.structureSlice.structureList
  );
  return (
    <div className="structure-page">
      <div className="container">
        <h2 className="structure-page__title title">Структура</h2>
        <ul className="structure-page__cards">
          {structureList.map((item, indx) => (
            <li className="structure-page__card" key={indx}>
              <h3 className="structure-page__card-title">{item.name}</h3>
              {/* <Link to=></Link> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StructurePage;
