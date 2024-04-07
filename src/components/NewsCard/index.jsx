import React from "react";
// ---- Style ---- //
import "./index.scss";
import { Link } from "react-router-dom";
import Arrow from "../../assets/img/right-arrow.svg";

// ---- Components ---- //

const NewsCard = ({ news, indx }) => {
  return (
    <div className="news-card" key={indx}>
      <div className="news-card__img-block">
        {/* {news.img && news.img.path && ( */}
        <img
          className="news-card__img"
          src="https://www.keu.kg/uploads/news/i4nNLPuy7ZeES3D6o7zHup6LHv6qZ76V.jpg"
          alt={news.title}
        />
        {/* )} */}
      </div>
      <div className="news-card__content">
        <p className="news-card__date">{news.date}</p>
        <h3 className="news-card__title small-title">{news.title}</h3>
        <p className="news-card__subtitle">{news.subtitle}</p>
        <p className="news-card__learn-more">
          <img src={Arrow} alt="arrow" />
          Узнать больше
        </p>
      </div>

      <Link className="news-card__link" to={`/news/${news.id}`} />
    </div>
  );
};

export default NewsCard;
