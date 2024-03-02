import React, { useEffect, useState } from "react";
// ---- Style ---- //
import "./index.scss";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNewsById } from "../../store/Slices/newsSlice";
import SmallNewsCard from "../SmallNewsCard";
import { FaArrowRight, FaRegCalendarAlt } from "react-icons/fa";

// ---- Components ---- //

const NewsPage = () => {
  const currentNews = useSelector((state) => state.newsSlice.newsById);
  const allNewslist = useSelector((state) => state.newsSlice.newsList);
  const copyNewsList = [...allNewslist];

  const currentURL = useLocation();
  const newsId = currentURL.pathname.split("/news/")[1] * 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsById({ id: newsId }));
  }, [currentURL]);

  return !currentNews ? (
    "Loading"
  ) : (
    <div className="news-page">
      <div className="container">
        <div className="news-page__content">
          <div className="news-page__img-block">
            <img src={currentNews[0].img} alt={currentNews[0].title} />
          </div>
          <p className="news-page__date">
            <FaRegCalendarAlt />
            {currentNews[0].date}
          </p>
          <h1 className="news-page__title title">{currentNews[0].title}</h1>

          <div>
            {currentNews[0].text[0]
              .split([
                `
    `,
              ])
              .map((text, indx) => (
                <p className="news-page__text" key={indx}>
                  {"   " + text}
                </p>
              ))}
          </div>
        </div>
        <div className="news-page__latest__news">
          <h2 className="news-page__latest-news-title title">
            Последние новости
          </h2>
          <div>
            {copyNewsList
              .reverse()
              .slice(copyNewsList.length - 8)
              .map((news, indx) => (
                <SmallNewsCard news={news} indx={indx} />
              ))}
          </div>
          <Link className="news-page__link" to="/news">
            Все новости <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
