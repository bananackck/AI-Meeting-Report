import React from "react";
import { Container } from "react-bootstrap";
import Text from "./Text";

function Summary() {
  return (
    <Container fluid className="about-section">
      <Container>
        {/* <h1 className="text-heading">회의 요약</h1> */}
        <Text />
      </Container>
    </Container>
  );
}

export default Summary;
