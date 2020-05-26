import React, { Component } from "react";
import NavbarComponent from "./Components/NavbarComponent";
import JumbotronComponent from "./Components/JumbotronComponent";
import DatatableComponent from "./Components/DatatableComponent";

export default class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Sus Hardianto",
        alamat: "Wanasari Brebes",
        nohp: "081806663355",
      },
    ],
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <DatatableComponent users={this.state.users} />
      </div>
    );
  }
}
