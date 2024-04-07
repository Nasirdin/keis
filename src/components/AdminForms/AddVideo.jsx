import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { APILINK } from "../../constants";

const AddVideo = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const [allVideo, setAllVideo] = useState(null);

  let currentDate = new Date();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const newData = {
      name,
      link,
      date: `${currentDate.getDate()}.${
        currentDate.getMonth() + 1
      }.${currentDate.getFullYear()}`,
    };

    try {
      const response = await axios.post(`${APILINK}/video/add`, newData);
      if (response.statusText === "Created") {
        alert("Ваш запись успешно добавлен");
        setName("");
        setLink("");
        getVideo();
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  };

  const getVideo = async () => {
    try {
      const response = await axios.get(`${APILINK}/video`);
      setAllVideo(response.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (id) => {
    try {
      const response = await axios.delete(`${APILINK}/video/${id}`);
      if (response.statusText === "OK") {
        alert("Ваш запись успешно удален");
        getVideo();
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
      alert("Ошибка при отправке запроса");
    }
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="admin-forms">
      <h2 className="title">Видео</h2>
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
            value={name}
          />
        </label>
        <label htmlFor="link">
          {"Ссылка на видео (Youtube) *"}
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
        <button className="admin-forms__btn">Добавить видео</button>
      </form>

      <ul className="admin-items">
        {!allVideo
          ? ""
          : allVideo.map((newsItem, indx) => (
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

export default AddVideo;
