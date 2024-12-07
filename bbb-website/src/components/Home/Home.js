import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UploadFile from "./UploadFile";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome to{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                리타 스키터의 마법 깃펜
                {/* <strong className="main-name"> SOUMYAJIT BEHERA</strong> */}
              </h1>
              <h1 className="slogan">
                "손 쉬운 회의록 작성 서비스"
                {/* <strong className="main-name"> SOUMYAJIT BEHERA</strong> */}
              </h1>
              {/* <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div> */}
              <h1 md={7} className="heading" style={{ paddingBottom: 20 }}>
                <UploadFile />
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
