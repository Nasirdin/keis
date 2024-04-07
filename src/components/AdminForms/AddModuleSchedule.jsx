import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { APILINK } from "../../constants";

const AddModuleSchedule = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const [allModuleSchedule, setAllModuleSchedule] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const newData = {
      name,
      link,
    };

    try {
      const response = await axios.post(
        `${APILINK}/module-schedule/add`,
        newData
      );
      if (response.statusText === "Created") {
        alert("Ваш запись успешно добавлен");
        setName("");
        setLink("");
        getModuleSchedule();
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  };

  const getModuleSchedule = async () => {
    try {
      const response = await axios.get(`${APILINK}/module-schedule`);
      setAllModuleSchedule(response.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (id) => {
    try {
      const response = await axios.delete(`${APILINK}/module-schedule/${id}`);
      if (response.statusText === "OK") {
        alert("Ваш запись успешно удален");
        getModuleSchedule();
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
      alert("Ошибка при отправке запроса");
    }
  };

  useEffect(() => {
    getModuleSchedule();
  }, []);

  return (
    <div className="admin-forms">
      <h2 className="title">График модулей</h2>
      <form className="admin-forms__form" onSubmit={onSubmitHandler}>
        <label htmlFor="name">
          Название *
          <br />
          <input
            required
            id="name"
            className="admin-forms__input"
            type="text"
            name="title"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="1-е полугодие 2020-2021 учебного года"
            value={name}
          />
        </label>
        <label htmlFor="link">
          {"Ссылка на график (Google Disk) *"}
          <br />
          <input
            required
            id="link"
            className="admin-forms__input"
            type="text"
            name="link"
            onChange={(e) => {
              setLink(e.target.value);
            }}
            value={link}
          />
        </label>
        <button className="admin-forms__btn">Добавить график</button>
      </form>

      <ul className="admin-items">
        {!allModuleSchedule
          ? ""
          : allModuleSchedule.map((newsItem, indx) => (
              <li className="admin-items__item" key={indx}>
                <ul className="admin-items__items">
                  <li className="admin-items__items-item">{indx + 1}</li>
                  <li className="admin-items__items-item">{newsItem.name}</li>
                  <li className="admin-items__items-item">{newsItem.date}</li>
                  <li className="admin-items__items-item">
                    <button onClick={() => removeItem(newsItem._id)}>
                      Удалить
                    </button>
                  </li>
                </ul>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default AddModuleSchedule;
