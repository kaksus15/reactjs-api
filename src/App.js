import React, { Component } from "react";
import NavbarComponent from "./Components/NavbarComponent";
import JumbotronComponent from "./Components/JumbotronComponent";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
      </div>
    );
  }
}
