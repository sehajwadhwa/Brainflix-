import React, { Component } from "react";
import axios from "axios";
import Flip from "../assets/Images/Mohan-muruge.jpg";

class Upload extends Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    axios.get("api/videos").then((res) => {
      this.setState({
        videos: res.data,
      });
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post("api/videos", {
        title: event.target.title.value,
        description: event.target.description.value,
        image: Flip,
        channel: event.target.channel.value,
      })
      .then((res) => {
        // this.setState({});
        this.props.history.push(`/video/${res.data}`);
      });
  };

  render() {
    return (
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form
          onSubmit={this.handleFormSubmit}
          className="upload__input-container"
        >
          <div className="upload__big-container">
            <div className="upload__video-container">
              <h2 className="upload__subtitle">VIDEO THUMBNAIL</h2>
              <div className="upload__video">
                <img src="" alt="" />
              </div>
            </div>
            <div className="upload__textarea-container">
              <h5 className="upload__input-container--text">
                TITLE YOUR VIDEO
              </h5>
              <textarea
                className="upload__text-container upload__text-container--one"
                name="title"
                rows="10"
                cols="50"
                placeholder="Add a title to your video"
              ></textarea>
              <h5 className="upload__input-container--text">
                ADD A VIDEO DESCRIPTION
              </h5>
              <textarea
                className="upload__text-container upload__text-container--two"
                name="description"
                rows="10"
                cols="50"
                placeholder="Add a description of your video"
              ></textarea>
            </div>
            <input type="hidden" name="channel" value="Philip Bertogg" />
          </div>
          <div className="upload__button-container">
            <button className="upload__button-container--publish">
              PUBLISH
            </button>
            <button className="upload__button-container--cancel">CANCEL</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Upload;
