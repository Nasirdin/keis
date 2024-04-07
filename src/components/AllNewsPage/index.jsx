import React, { useEffect, useState } from "react";
// ---- Style ---- //
import "./index.scss";
import NewsCard from "../NewsCard";
import { APILINK } from "../../constants";
import axios from "axios";

// ---- Components ---- //

const AllNewsPage = () => {
  const [allNews, setAllNews] = useState(null);

  const getNews = async () => {
    try {
      const response = await axios.get(`${APILINK}/news`);
      setAllNews(response.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="all-news-page">
      <div className="container">
        <h2 className="all-news-page__title title">Новости</h2>
        <div className="all-news-page__cards">
          {!allNews ? (
            <p>Loading...</p>
          ) : (
            allNews
              .reverse()
              .map((news, indx) => <NewsCard news={news} indx={indx} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default AllNewsPage;
