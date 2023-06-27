import React from "react";
import { Col, Row } from "react-bootstrap";
import { BiRightArrowAlt } from "react-icons/bi";

const HintComponent = () => {
  return (
    <div className="hint-box">
      <Row>
        <Col className="d-flex hints-row p-0 mx-3">Hints</Col>
      </Row>
      <Row>
        <Col xs={1}>
          <BiRightArrowAlt color="#88bdbc" size={20} />
        </Col>
        <Col className="d-flex ">
          <span className="hint-text">Hit enter to add new todo</span>
        </Col>
      </Row>
      <Row>
        <Col xs={1}>
          <BiRightArrowAlt color="#88bdbc" size={20} />
        </Col>
        <Col className="d-flex ">
          <span className="hint-text">Double click todo text to edit</span>
        </Col>
      </Row>
    </div>
  );
};

export default HintComponent;
