import React, { useEffect } from "react";
// ---- Style ---- //
import "./index.scss";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import AddNews from "../AdminForms/AddNews";
import AddAds from "../AdminForms/AddAds";
import AddVideo from "../AdminForms/AddVideo";
import AddModuleSchedule from "../AdminForms/AddModuleSchedule";
import AddExamSchedule from "../AdminForms/AddExamSchedule";
import AddLessonsSchedule from "../AdminForms/AddLessonsSchodule";
import AddDocs from "../AdminForms/AddDocs";

// ---- Components ---- //

const Admin = () => {
  const accessTokenKeisAdmin = localStorage.getItem("accessTokenKeisAdmin");
  const navigate = useNavigate();

  const adminNav = [
    {
      name: "Новости",
      to: "/admin/",
    },
    {
      name: "Объявления",
      to: "/admin/ads",
    },
    {
      name: "Видео",
      to: "/admin/videos",
    },
    {
      name: "График модулей",
      to: "/admin/module-schedule",
    },
    {
      name: "Расписание экзаменов",
      to: "/admin/exam-schedule",
    },
    {
      name: "Расписание занятий",
      to: "/admin/lessons-schedule",
    },
    {
      name: "Документы",
      to: "/admin/docs",
    },
  ];

  const exitBtn = () => {
    localStorage.removeItem("accessTokenKeisAdmin");
  };
  useEffect(() => {
    if (!accessTokenKeisAdmin) {
      navigate("/login");
    }
  }, [accessTokenKeisAdmin, navigate]);
  return (
    <div className="admin">
      <div className="container">
        <ul className="admin__nav">
          {adminNav.map((item, index) => (
            <li key={index} className="admin__item">
              <Link className="admin__link" to={item.to}>
                {item.name}
              </Link>
            </li>
          ))}
          <li className="admin__item">
            <Link className="admin__link" onClick={exitBtn} to={""}>
              Выйти
            </Link>
          </li>
        </ul>
        <div className="admin__content">
          <Routes>
            <Route path="/" element={<AddNews />} />
            <Route path="/ads" element={<AddAds />} />
            <Route path="/videos" element={<AddVideo />} />
            <Route path="/module-schedule" element={<AddModuleSchedule />} />
            <Route path="/exam-schedule" element={<AddExamSchedule />} />
            <Route path="/lessons-schedule" element={<AddLessonsSchedule />} />
            <Route path="/docs" element={<AddDocs />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
