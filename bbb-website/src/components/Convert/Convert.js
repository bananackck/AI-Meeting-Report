import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Text from "./Text";
import DownloadFile from "./DownloadFile";

function Convert() {
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 className="project-heading"></h1>
        <Text />
        <DownloadFile />
      </Container>
    </Container>
  );
}

export default Convert;
