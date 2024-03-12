import React, { useEffect } from "react";
// ---- Style ---- //
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPMKById } from "../../store/Slices/structureSlice";
import "./index.scss";

// ---- Components ---- //

const StructureSubpage = () => {
  const currentPMK = useSelector((state) => state.structureSlice.currentPMK);
  const currentURL = useLocation();
  const pmkId = currentURL.search.split("?id=")[1] * 1;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPMKById({ id: pmkId }));
  }, [currentURL]);

  const filterComposition = (role) => {
    return currentPMK[0].composition.map((composition) => {
      if (composition.position === role) {
        return (
          <li className="structure-subpage__item">
            <a
              className="structure-subpage__link"
              target="_blank"
              href={composition.resume}
            >
              {composition.fullName}
            </a>
          </li>
        );
      }
    });
  };

  return !currentPMK ? (
    "Loading...`"
  ) : (
    <div className="structure-subpage">
      <div className="container">
        <h2 className="structure-subpage__title title">{currentPMK[0].name}</h2>
        <p className="structure-subpage__text">{currentPMK[0].text}</p>
        <h3 className="structure-subpage__title small-title">Состав ПМК:</h3>
        <ul className="structure-subpage__list">
          {filterComposition("chairman")}
        </ul>
        <h3 className="structure-subpage__title small-title">Преподаватели:</h3>
        <ul className="structure-subpage__list">
          {filterComposition("teacher")}
        </ul>
      </div>
    </div>
  );
};

export default StructureSubpage;
