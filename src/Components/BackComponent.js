import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

export const BackComponent = () => {
  return (
    <Row className="mb-2">
      <Col>
        <Link to={"/"}>
          <Button color="primary">Back</Button>
        </Link>
      </Col>
    </Row>
  );
};
