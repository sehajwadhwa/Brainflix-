import React from "react";

function Hero(props) {
  console.log(props);
  const poster = props.data.image;
  return (
    <div className="hero">
      <video className="hero__video" poster={poster} controls>
        {/* <source src={video} type="video/mp4" /> */}
      </video>
    </div>
  );
}

export default Hero;
