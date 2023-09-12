import React from "react";
import axios from "axios";
import CommentForm from "../../../components/CommentForm/CommentForm";
import Comments from "../../../components/Comments/Comments";
import HeroVideo from "../../../components/HeroVideo/HeroVideo";
import VideoDetails from "../../../components/VideoDetails/VideoDetails";
import VideoList from "../../../components/VideoList/VideoList";

class Home extends React.Component {
  state = {
    currentVideoId: null,
    currentVideo: {},
    nextVideos: [],
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:8080/videos")
      .then((res) => {
        this.setState({
          nextVideos: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  componentDidUpdate = () => {
    const id = this.props.match.params.id
      ? this.props.match.params.id
      : this.state.nextVideos[0].id;
    if (id !== this.state.currentVideoId) {
      axios
        .get(`http://localhost:8080/videos/${id}`)
        .then((res) => {
          this.setState({
            currentVideoId: res.data.id,
            currentVideo: res.data,
          });
          window.scrollTo(0, 0);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let addComment = {
      name: "Sehaj Wadhwa ",
      comment: e.target.commentInput.value,
    };
    axios
      .post(
        `http://localhost:8080/videos/${this.state.currentVideoId}/comments`,
        addComment
      )
      .then((res) => {
        console.log(res);
        this.setState({
          currentVideoId: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
    e.target.reset();
  };

  render() {
    return (
      <>
        <HeroVideo currentVideo={this.state.currentVideo} />
        <div className="flex">
          <main>
            <VideoDetails currentVideo={this.state.currentVideo} />
            <section className="comments">
              <CommentForm
                commentInput={this.state.currentVideo.comments}
                handleSubmit={this.handleSubmit}
              />
              <Comments comments={this.state.currentVideo.comments} />
            </section>
          </main>
          <aside className="videoList">
            <h5 className="videoList__label">NEXT VIDEO</h5>
            <VideoList
              currentVideoId={this.state.currentVideoId}
              nextVideos={this.state.nextVideos}
            />
          </aside>
        </div>
      </>
    );
  }
}
export default Home;
