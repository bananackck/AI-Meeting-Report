import React from "react";
import { Container } from "react-bootstrap";
import Text from "./Text";
import DownloadFile from "./DownloadFile";

function Convert() {
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 className="text-heading">회의 텍스트</h1>
        <Text />
        {/* <DownloadFile /> */}
      </Container>
    </Container>
  );
}

export default Convert;
