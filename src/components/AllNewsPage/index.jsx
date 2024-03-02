import React from "react";
// ---- Style ---- //
import "./index.scss";
import NewsCard from "../NewsCard";
import { useSelector } from "react-redux";

// ---- Components ---- //

const AllNewsPage = () => {
  const newsList = useSelector((state) => state.newsSlice.newsList);

  const copyAllNewsList = [...newsList];
  return (
    <div className="all-news-page">
      <div className="container">
        <h2 className="all-news-page__title title">Новости</h2>
        <div className="all-news-page__cards">
          {copyAllNewsList.reverse().map((news, indx) => (
            <NewsCard news={news} indx={indx}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllNewsPage;
