import React, { Component } from "react";
import DatatableComponent from "../Components/DatatableComponent";

export default class HomeContainer extends Component {
  render() {
    return (
      <div>
        <DatatableComponent users={this.props.users} />
      </div>
    );
  }
}
