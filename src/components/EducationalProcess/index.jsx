import React, { useEffect, useState } from "react";
// ---- Style ---- //
import "./index.scss";
import { APILINK, EducationalPlans } from "../../constants";
import axios from "axios";

// ---- Components ---- //

const EducationalProcess = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [plans, setPlans] = useState([]);

  const [allModuleSchedule, setAllModuleSchedule] = useState(null);
  const [allExamSchedule, setAllExamSchedule] = useState(null);
  const [allLessSchedule, setAllLessSchedule] = useState(null);

  const planHandler = (e, plans) => {
    setPlans(plans);
    setActiveModal(true);
    setModalTitle(e.target.innerText);
  };

  const getModuleSchedule = async () => {
    try {
      const response = await axios.get(`${APILINK}/module-schedule`);
      setAllModuleSchedule(response.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };
  const getExamSchedule = async () => {
    try {
      const response = await axios.get(`${APILINK}/exam-schedule`);
      setAllExamSchedule(response.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };
  const getLessSchedule = async () => {
    try {
      const response = await axios.get(`${APILINK}/less-schedule`);
      setAllLessSchedule(response.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getModuleSchedule();
    getExamSchedule();
    getLessSchedule();
  }, []);

  const ModalWindow = ({ array, title }) => {
    return (
      <div className="modalWindow">
        <div className="modalWindow__content">
          <span
            className="modalWindow__close"
            onClick={() => {
              setPlans([]);
              setActiveModal(false);
            }}
          ></span>
          <h3 className="modalWindow__title">{title}</h3>
          <ul className="modalWindow__items">
            {array.reverse().map((item, indx) => (
              <li className="modalWindow__item" key={indx}>
                <a
                  className="modalWindow__link"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="educational-process">
      <div className="container">
        <h2 className="educational-process__title title">Учебный процесс</h2>
        <ul className="educational-process__items">
          <li
            className="educational-process__item"
            onClick={(e) => planHandler(e, allLessSchedule)}
          >
            Расписание занятий
          </li>
          <li
            className="educational-process__item"
            onClick={(e) => planHandler(e, allExamSchedule)}
          >
            Расписание экзаменов
          </li>
          <li
            className="educational-process__item"
            onClick={(e) => planHandler(e, allModuleSchedule)}
          >
            График модулей
          </li>
        </ul>

        <h2 className="educational-process__title title">Учебные планы</h2>
        <ul className="educational-process__items">
          {EducationalPlans.map((plan, indx) => (
            <li
              key={indx}
              className="educational-process__item"
              onClick={(e) => planHandler(e, plan.plans)}
            >
              Учебные планы {plan.year} учебного года
            </li>
          ))}
        </ul>
      </div>
      {!activeModal ? "" : <ModalWindow array={plans} title={modalTitle} />}
    </div>
  );
};

export default EducationalProcess;
