import React from "react";
import { Link } from "react-router-dom";

const SideVideo = ({ sideVideos }) => {
  const mapping = sideVideos.map((object, index) => {
    return (
      <Link
        className="sidevideo__bigboi"
        to={`/video/${object.id}`}
        key={index}
      >
        <div key={index} id={object.id} className="sidevideo__main-container">
          <div className="sidevideo__template-container">
            <img className="sidevideo__image" src={object.image} alt="" />
            <div className="sidevideo__text-container">
              <h4 className="sidevideo__title-video">{object.title}</h4>
              <h4 className="sidevideo__channel">{object.channel}</h4>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <div className="sidevideo">
        <h5 className="sidevideo__title">NEXT VIDEO</h5>
        {mapping}
      </div>
    </>
  );
};

export default SideVideo;
