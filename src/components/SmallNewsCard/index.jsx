import React from "react";
// ---- Style ---- //
import "./index.scss";
import { Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";

// ---- Components ---- //

const SmallNewsCard = ({ news, indx }) => {
  return (
    <div className="small-news-card" key={indx}>
      <div className="small-news-card__img">
        <img src={news.img} alt={news.title} />
      </div>
      <div className="small-news-card__content">
        <Link
          to={`/news/` + news.id}
          className="small-news-card__title small-title"
        >
          {news.title}
        </Link>
        <p className="small-news-card__date">
          <FaRegCalendarAlt />
          {news.date}
        </p>
      </div>
    </div>
  );
};

export default SmallNewsCard;
