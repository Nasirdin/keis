import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import YouTube from "react-youtube";
import "./index.scss";
import NewsCard from "../NewsCard";
import AnimateLine from "../AnimateLine";
import Study from "../Study";
import { APILINK } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Slide1 from "../../assets/img/slide-1.jpeg";
import Slide2 from "../../assets/img/slide-2.jpeg";
import Slide3 from "../../assets/img/slide-3.jpeg";

const Home = () => {
  const newsList = useSelector((state) => state.newsSlice.newsList);
  const copyNewsList = [...newsList];
  const [videoLinks, setVideoLinks] = useState([]);

  const getVideo = async () => {
    try {
      const response = await axios.get(`${APILINK}/video`);
      const links = response.data.map((video) => {
        const videoId = extractVideoId(video.link);
        return videoId;
      });
      setVideoLinks(links);
    } catch (error) {
      console.log(error);
    }
  };

  const extractVideoId = (videoLink) => {
    const url = new URL(videoLink);
    const searchParams = new URLSearchParams(url.search);
    return searchParams.get("v");
  };

  const opts = {
    height: "180",
    width: "300",
    playerVars: {
      autoplay: 0,
    },
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="homePage">
      <div className="home">
        <div className="container">
          <div className="home__images">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <img className="slide-img" src={Slide1} alt="#" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slide-img" src={Slide2} alt="#" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slide-img" src={Slide3} alt="#" />
              </SwiperSlide>
            </Swiper>
          </div>

          <h2 className="home__title">
            Колледж экономики и сервиса НИУ "Кыргызский экономический
            университет им. М.Рыскулбекова"
          </h2>
          {/* <p className="home__text">
            Колледж экономики и сервиса является структурным подразделением НИУ
            Кыргызского экономического университета имени Мусы Рыскулбекова.
            Миссия КЭиС ‒ подготовка квалифицированных, компетентных
            специалистов, повышение их профессионализма, переход к высокому
            уровню личностного развития.
          </p> */}
        </div>
      </div>
      <div className="greetings">
        <div className="container">
          <h2 className="greetings__title">Дорогой абитуриент!</h2>
          <p className="greetings__text">
            От всей души, приветствуем вас на сайте Колледжа экономики и сервиса
            Научно-исследовательского университета «Кыргызский экономический
            университет им. Мусы Рыскулбекова» (далее НИУ КЭУ). Колледж
            экономики и сервиса является структурным подразделением НИУ КЭУ.
            Колледж реализует базовые программы среднего профессионального
            образования. Образовательная деятельность в Колледже ведется
            согласно действующим лицензиям КР. Колледж экономики и сервиса НИУ
            КЭУ обеспечивает интеллектуальную площадку, где будущий специалист
            может раскрыть свой потенциал и приобрести новые знания. В нашем
            колледже студенты получают фундаментальные теоретические знания и
            практические умения, необходимые для успешной карьеры. Свои знания и
            опыт студентам передают высококвалифицированные преподаватели, и
            опытные специалисты с производства.
          </p>
        </div>
      </div>

      <AnimateLine />

      <div className="news">
        <div className="container">
          <h2 className="news__title title">Новости</h2>
          <div className="news__cards">
            {copyNewsList
              .reverse()
              .slice(copyNewsList.length - 4)
              .map((news, indx) => (
                <NewsCard news={news} indx={indx} />
              ))}
          </div>
          <Link className="news__link" to="/news">
            Все новости
            <FaArrowRight />
          </Link>
        </div>
      </div>

      <div className="news">
        <div className="container">
          <h2 className="news__title title">Объявления</h2>
          <div className="news__cards">
            {copyNewsList
              .reverse()
              .slice(copyNewsList.length - 4)
              .map((news, indx) => (
                <NewsCard news={news} indx={indx} />
              ))}
          </div>
          <Link className="news__link" to="/news">
            Все объявления
            <FaArrowRight />
          </Link>
        </div>
      </div>

      <Study />

      <div className="video">
        <div className="container">
          <h2 className="video__title title">Видео</h2>
          <div className="video__content">
            {videoLinks.slice(videoLinks.length - 4).map((link, index) => (
              <div key={index} className="video__block">
                <YouTube videoId={link} opts={opts} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
