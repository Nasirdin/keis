import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { APILINK } from "../../constants";

const AddDocs = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState("");
  const [allDocs, setAllDocs] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const newData = {
      name,
      link,
      type,
    };
    console.log(APILINK);
    try {
      const response = await axios.post(`${APILINK}/docs/add`, newData);
      if (response.statusText === "Created") {
        alert("Ваш запись успешно добавлен");
        setName("");
        setLink("");
        setType("");
        getDocs();
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  };

  const getDocs = async () => {
    try {
      const response = await axios.get(`${APILINK}/docs`);
      setAllDocs(response.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (id) => {
    try {
      const response = await axios.delete(`${APILINK}/docs/${id}`);
      if (response.statusText === "OK") {
        alert("Ваш запись успешно удален");
        getDocs();
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
      alert("Ошибка при отправке запроса");
    }
  };

  useEffect(() => {
    getDocs();
  }, []);

  return (
    <div className="admin-forms">
      <h2 className="title">Расписание экзаменов</h2>
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
            placeholder="Расписание экзаменов 2023-2024 уч. год (1 полугодие)"
            value={name}
          />
        </label>
        <label htmlFor="link">
          {"Ссылка на расписание экзаменов (Google Disk) *"}
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
        <label htmlFor="academicYear">
          Тип документа *
          <br />
          <select
            required
            id="academicYear"
            className="admin-forms__input"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option value="">-- Выберите тип документа --</option>
            <option value="licenses">Лицензии</option>
            <option value="provisions">Положения КЭиС</option>
            <option value="reports">Отчеты, Планы</option>
            <option value="strategy">Устав, Стратегия</option>
          </select>
        </label>
        <button className="admin-forms__btn">
          Добавить расписание экзаменов
        </button>
      </form>

      <ul className="admin-items">
        {!allDocs
          ? ""
          : allDocs.map((newsItem, indx) => (
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

export default AddDocs;
