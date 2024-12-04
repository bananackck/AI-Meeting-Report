import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineGoogle,
  AiFillDashboard,
  AiFillRead,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  // let date = new Date();
  // let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>빈있빈 부있부</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>서강대학교 산학프로젝트</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/beenandbu/capstone2"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://drive.google.com/drive/folders/1TPx_hGcvzRD1zmV15LKM-50YUvsh3TIs?usp=sharing"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGoogle />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="http://cscp2.sogang.ac.kr/CSE4187/index.php/%EB%B9%88%EC%9E%88%EB%B9%88_%EB%B6%80%EC%9E%88%EB%B6%80"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillRead />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
