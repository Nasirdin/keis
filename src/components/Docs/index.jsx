import React from "react";
// ---- Style ---- //
import "./index.scss";
// ---- Components ---- //
import { KEISDocs, KEISProvisions, Licenses, OtherDocs } from "../../constants";

const ComponentLicenses = ({ array }) => {
  return (
    <ul className="docs__licenses docs-table">
      {array.map((docs, indx) => (
        <li className="docs-table__item" key={indx.id}>
          <a rel="noopener noreferrer" target="_blank" href={docs.link}>
            {docs.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
const ComponentDocs = ({ array }) => {
  return (
    <ul className="docs__items">
      {array.map((docs, indx) => (
        <li className="docs__item" key={indx.id}>
          <a rel="noopener noreferrer" target="_blank" href={docs.link}>
            {docs.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Docs = () => {
  return (
    <div className="docs">
      <div className="container">
        <h2 className="title">Документация</h2>
        <div className="docs__block">
          <ComponentDocs array={OtherDocs} />
          <ComponentDocs array={KEISDocs} />
        </div>

        <h2 className="docs__title title">Лицензии</h2>
        <ComponentLicenses array={Licenses} />
        <h2 className="docs__title title">Положения КЭиС</h2>
        <ComponentLicenses array={KEISProvisions} />
      </div>
    </div>
  );
};

export default Docs;
