import React, { Component } from "react";
// import "./styles/global.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Upload from "./components/Upload";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/video/:id" element={<Home></Home>} />
          <Route path="/upload" element={Upload} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
