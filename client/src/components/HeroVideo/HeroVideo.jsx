import React from 'react'
import './HeroVideo.scss';

function HeroVideo({currentVideo}) {
    return (
      <section className="hero">
        <video className="hero__video" poster={currentVideo.image} controls ></video>
      </section>
    )
}
export default HeroVideo