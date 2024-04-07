import React, { useEffect, useState } from "react";
// ---- Style ---- //
import "./index.scss";
import axios from "axios";
// ---- Components ---- //
import {
  APILINK,
  KEISDocs,
  KEISProvisions,
  Licenses,
  OtherDocs,
} from "../../constants";

// const ComponentLicenses = ({ array }) => {
//   return (
//     <ul className="docs__licenses docs-table">
//       {array.map((docs, indx) => (
//         <li className="docs-table__item" key={indx.id}>
//           <a rel="noopener noreferrer" target="_blank" href={docs.link}>
//             {docs.name}
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// };

const ComponentDocs = ({ array, type }) => {
  const filteredDocs = array ? array.filter((docs) => docs.type === type) : [];
  console.log(filteredDocs);

  return (
    <ul className="docs__items">
      {filteredDocs.map((docs, indx) => (
        <li className="docs__item" key={indx}>
          <a rel="noopener noreferrer" target="_blank" href={docs.link}>
            {docs.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Docs = () => {
  const [allDocs, setAllDocs] = useState(null);
  const getDocs = async () => {
    try {
      const response = await axios.get(`${APILINK}/docs`);
      setAllDocs(response.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDocs();
  }, []);

  return (
    <div className="docs">
      <div className="container">
        <h2 className="title">Документация</h2>
        <div className="docs__block">
          <ComponentDocs array={allDocs} type={"reports"} />
          <ComponentDocs array={allDocs} type={"strategy"} />
        </div>

        <h2 className="docs__title title">Лицензии</h2>
        <ComponentDocs array={allDocs} type={"licenses"} />
        <h2 className="docs__title title">Положения КЭиС</h2>
        <ComponentDocs array={allDocs} type={"provisions"} />
      </div>
    </div>
  );
};

export default Docs;
