import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { APILINK } from "../../constants";

const AddAds = () => {
  const [textareaValue, setTextareaValue] = useState("");
  const [selectedImg, setSelectedImg] = useState(null);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [departament, setDepartament] = useState("");

  const [allAds, setAllAds] = useState(null);

  let currentDate = new Date();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedImg);
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("text", textareaValue);
    formData.append("departament", departament);
    formData.append(
      "date",
      `${currentDate.getDate()}.${
        currentDate.getMonth() + 1
      }.${currentDate.getFullYear()}`
    );

    try {
      const response = await axios.post(`${APILINK}/ads/add`, formData);
      if (response.statusText === "Created") {
        alert("Ваш запись успешно добавлен");
        setTextareaValue("");
        setSelectedImg("");
        setDepartament("");
        setSubtitle("");
        setTitle("");
        getAds();
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  };

  const getAds = async () => {
    try {
      const response = await axios.get(`${APILINK}/ads`);
      setAllAds(response.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (id) => {
    try {
      const response = await axios.delete(`${APILINK}/ads/${id}`);
      if (response.statusText === "OK") {
        alert("Ваш запись успешно удален");
        getAds();
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
      alert("Ошибка при отправке запроса");
    }
  };

  useEffect(() => {
    getAds();
  }, []);

  return (
    <div className="admin-forms">
      <h2 className="title">Объявления</h2>
      <form
        className="admin-forms__form"
        onSubmit={onSubmitHandler}
        encType="multipart/form-data"
      >
        <label htmlFor="file">
          Фото *
          <br />
          <input
            id="file"
            className="admin-forms__input"
            type="file"
            name="file"
            accept="image/*"
            onChange={(e) => setSelectedImg(e.target.files[0])}
          />
        </label>
        <label htmlFor="title">
          Заголовок *
          <br />
          <input
            required
            id="title"
            className="admin-forms__input"
            type="text"
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </label>
        <label htmlFor="summary">
          Краткий текст *
          <br />
          <input
            required
            id="summary"
            className="admin-forms__input"
            type="text"
            name="summary"
            onChange={(e) => {
              setSubtitle(e.target.value);
            }}
            value={subtitle}
          />
        </label>
        <label htmlFor="content">
          Текст объявления *
          <br />
          <textarea
            required
            id="content"
            className="admin-forms__textarea"
            name="content"
            value={textareaValue}
            onChange={(e) => {
              setTextareaValue(e.target.value);
            }}
          ></textarea>
        </label>
        <label htmlFor="department">
          Кафедра *
          <br />
          <input
            required
            id="department"
            className="admin-forms__input"
            type="text"
            name="department"
            onChange={(e) => {
              setDepartament(e.target.value);
            }}
            value={departament}
          />
        </label>
        <button
          // type="submit"
          className="admin-forms__btn"
          // onClick={onSubmitHandler}
        >
          Добавить объявления
        </button>
      </form>

      <ul className="admin-items">
        {!allAds
          ? ""
          : allAds.map((newsItem, indx) => (
              <li className="admin-items__item" key={indx}>
                <ul className="admin-items__items">
                  <li className="admin-items__items-item">{indx + 1}</li>
                  <li className="admin-items__items-item">{newsItem.title}</li>
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

export default AddAds;
