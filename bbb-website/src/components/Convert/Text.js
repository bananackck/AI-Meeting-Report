import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function Text() {
  return (
    <Card className="text-card">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>생성된 회의록</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Text;
