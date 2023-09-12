import React from 'react'
import './VideoList.scss';
import {Link} from "react-router-dom";

function VideoList ({nextVideos, currentVideoId}) {

    return (
      <>
        {nextVideos.filter(video => video.id !== currentVideoId)
          .map(video => {
          return (
            <Link to={`/video/${video.id}`} key={video.id}>
              <div className="videoList__block">
                <img className="videoList__img" src={video.image} alt="bike trick"/>
                <div className="videoList__textBox">
                  <h5 className="videoList__textBox-title">{video.title}</h5>
                  <p className="videoList__textBox-channel">{video.channel}</p>
                </div>
              </div>  
            </Link>               
          )
          })
        }
     </>
    )
}
export default VideoList

