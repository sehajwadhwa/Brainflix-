import React from "react";
import eye from "../assets/Icons/views.svg";
import heart from "../assets/Icons/likes.svg";
import moment from "moment";

const Main = ({ main }) => {
  //Function start

  const Mainconst = (
    <div className="main">
      <div className="main__main-container">
        <h1 className="main__title">{main.title}</h1>
        <div className="main__subtitle-views-likes-container">
          <div className="main__subtitle-container">
            <h2 className="main__subtitle-container--author">
              By {main.channel}
            </h2>
            <h2 className="main__subtitle-container--date">
              {moment(main.timestamp).format("MM/DD/YYYY")}
            </h2>
          </div>
          <div className="main__views-likes-container">
            <div className="main__views-container">
              <img className="main__views-container--icon" src={eye} alt="" />
              <h2 className="main__views-container--number">{main.views}</h2>
            </div>
            <div className="main__likes-container">
              <img className="main__likes-container--icon" src={heart} alt="" />
              <h2 className="main__likes-container--number">{main.likes}</h2>
            </div>
          </div>
        </div>
        <div className="main__description-container">
          <p className="main__description-container--text">
            {main.description}
          </p>
        </div>
      </div>
    </div>
  );
  return <div>{Mainconst}</div>;
};
export default Main;
