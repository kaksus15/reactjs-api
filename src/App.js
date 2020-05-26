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
      {
        id: 2,
        name: "Fakhri Hardianto",
        alamat: "Wanasari Brebes",
        nohp: "081806663355",
      },
      {
        id: 3,
        name: "Husaen",
        alamat: "Wanasari Brebes",
        nohp: "081806663355",
      },
      {
        id: 4,
        name: "Sus Hardianto",
        alamat: "Wanasari Brebes",
        nohp: "081806663355",
      },
      {
        id: 5,
        name: "Miftah",
        alamat: "Wanasari Brebes",
        nohp: "081806663355",
      },
      {
        id: 6,
        name: "Joni",
        alamat: "Wanasari Brebes",
        nohp: "081806663355",
      },
      {
        id: 7,
        name: "Iskandar",
        alamat: "Wanasari Brebes",
        nohp: "081806663355",
      },
      {
        id: 8,
        name: "Sus Hardianto",
        alamat: "Wanasari Brebes",
        nohp: "081806663355",
      },
      {
        id: 9,
        name: "Sus Hardianto",
        alamat: "Wanasari Brebes",
        nohp: "081806663355",
      },
      {
        id: 10,
        name: "Darkum",
        alamat: "Wanasari Brebes",
        nohp: "081806663355",
      },
      {
        id: 11,
        name: "Fitro",
        alamat: "Wanasari Brebes",
        nohp: "081806663355",
      },
      {
        id: 12,
        name: "Rina R",
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
