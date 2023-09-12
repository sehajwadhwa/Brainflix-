import React from "react";
import Hero from "./Hero";
import Main from "./Main";
import Comments from "./Comments";
import SideVideo from "./SideVideo";
import axios from "axios";

// API KEY "api_key": "ffb22bc6-6976-404c-9cd6-c366bb70ee9b"

class Home extends React.Component {
  state = {
    sideVideos: [],
    main: [],
    comments: [],
    allVideos: [],
  };

  componentDidMount() {
    // Getting sidevideo info
    axios
      .get("https://project-2-api.herokuapp.com/videos?api_key=test")
      .then((response) => {
        const allVideos = response.data;
        console.log(response.data);
        this.setState({
          sideVideos: response.data,
        });
        // Making sure that my uploaded video will be the video displayed in the main page
        // if (this.props.match.params.id) {
        //   axios
        //     .get(`/api/videos/${this.props.match.params.id}`)
        //     .then((response) => {
        //       let sideVideos = allVideos.filter(
        //         (video) => video.id !== this.props.match.params.id
        //       );
        //       const main = response.data;
        //       const comments = main[0].comments;
        //       this.setState({ sideVideos, main, comments, allVideos });
        //     });
        // } else {
        //   // Getting main content info with hard coded id value (only to see info displayed)
        //   axios
        //     .get("/api/videos/1af0jruup5gu")
        //     //Comparing  hard coded main video id with side video id and then changing the state
        //     .then((response) => {
        //       let sideVideos = allVideos.filter(
        //         (video) => video.id !== "1af0jruup5gu"
        //       );
        //       const main = response.data;
        //       const comments = main[0].comments;
        //       this.setState({ sideVideos, main, comments, allVideos });
        //     });
        // }
      });
  }

  componentDidUpdate(prevProps) {
    // Updating current state
    if (prevProps.match !== this.props.match) {
      axios
        .get(`/api/videos/${this.props.match.params.id}`)
        .then((response) => {
          const main = response.data;
          const comments = main[0].comments;
          let sideVideos = this.state.allVideos.filter(
            (video) => video.id !== this.props.match.params.id
          );
          this.setState({ sideVideos, main: [main], comments });
        });
    }
  }

  render() {
    //   if (this.state.main.length === 0) {
    //     return (
    //       <div className="loading__container">
    //         <h1 className="loading"></h1>
    //       </div>
    //     );
    //   }
    // Return the updated state after comparing id's as well as populating the main content with the new image
    return (
      <div>
        <Hero hero={this.state.main[0].image} />
        <div className="all-components__main">
          <div className="all-components__one">
            <Main main={this.state.main} />
            <Comments comments={this.state.comments} />
          </div>
          <div className="all-components__two">
            <SideVideo sideVideos={this.state.sideVideos} />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
