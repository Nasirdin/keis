import React from "react";
// ---- Style ---- //
import "./index.scss";
import { Courses } from "../../constants";
import Card from "../Card";
import NewsCard from "../NewsCard";
import AnimateLine from "../AnimateLine";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// ---- Components ---- //

const Home = () => {
  const newsList = useSelector((state) => state.newsSlice.newsList);
  const copyNewsList = [...newsList];

  return (
    <div className="homePage">
      <div className="home">
        <div className="container">
          <h2 className="home__title">О Колледже</h2>
          <p className="home__text">
            Колледж экономики и сервиса является структурным подразделением НИУ
            Кыргызского экономического университета имени Мусы Рыскулбекова.
            Миссия КЭиС ‒ подготовка квалифицированных, компетентных
            специалистов, повышение их профессионализма, переход к высокому
            уровню личностного развития.
          </p>
        </div>
      </div>
      <div className="greetings">
        <div className="container">
          <h2 className="greetings__title">Дорогой абитуриент!</h2>
          <p className="greetings__text">
            От всей души, приветствуем вас на сайте Колледжа экономики и сервиса
            при Научно-исследовательском университете «Кыргызский экономический
            университет имени Мусы Рыскулбекова» (далее НИУ КЭУ). Колледж
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

      <div className="study">
        <div className="container">
          <h2 className="study__title title">
            КЭиС осушествляет подготовку по следующим напралениям:
          </h2>
          <div className="study__courses">
            {Courses.map((course, indx) => (
              <Card course={course} indx={indx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
