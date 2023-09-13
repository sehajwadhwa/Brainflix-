import React from "react";
import "./styles/global.scss";
import { Switch, Route } from "react-router-dom";
import MainNav from "./components/MainNav/MainNav";
import Home from "./pages/pages/HomePage/Home";
import Upload from "./pages/pages/VideoUploadPage/Upload";

class App extends React.Component {
  render() {
    return (
      <>
        <MainNav />
        {/* <Switch> */}
          <Route path="/" exact component={Home} />
          <Route
            path="/upload"
            render={(routerProps) => <Upload {...routerProps} />}
          />
          <Route
            path="/video/:id"
            render={(routerProps) => <Home {...routerProps} />}
          />
        {/* </Switch> */}
      </>
    );
  }
}
export default App;
