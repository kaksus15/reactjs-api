import React, { Component } from "react";
import { Container } from "reactstrap";
import { BackComponent } from "../Components/BackComponent";

export default class DetailUserContainer extends Component {
  render() {
    return (
      <div>
        <Container>
          <BackComponent />
          <h1>Detail User</h1>
        </Container>
      </div>
    );
  }
}
