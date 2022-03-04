import React, { Component } from "react";
import "./App.css";
import "./index.css";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeContainer from "./container/HomeContainer";
import CreateUserContainer from "./container/CreateUserContainer";
import DetailUserContainer from "./container/DetailUserContainer";
import EditUserContainer from "./container/EditUserContainer";

export default class App extends Component {

  render() {
    return (
      <div>
        <NavbarComponent />
        <br></br>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeContainer />}></Route>
            <Route path="/create" element={<CreateUserContainer />}></Route>
            <Route path="/detail/:id" element={<DetailUserContainer />}></Route>
            <Route path="/edit/:id" element={<EditUserContainer />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
