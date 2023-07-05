import React from "react";
import { Col, Row } from "react-bootstrap";
import { BiRightArrowAlt } from "react-icons/bi";
import styles from "./HintComponent.module.css";

const HintComponent = () => {
  return (
    <div className={`${styles["hint-box"]}`}>
      <Row>
        <Col className={`d-flex p-0 mx-3 ${styles["hints-row"]}`}>Hints</Col>
      </Row>
      <Row>
        <Col xs={1}>
          <BiRightArrowAlt color="#88bdbc" size={20} />
        </Col>
        <Col className="d-flex ">
          <span>Hit enter twice for quick add</span>
        </Col>
      </Row>
      <Row>
        <Col xs={1}>
          <BiRightArrowAlt color="#88bdbc" size={20} />
        </Col>
        <Col className="d-flex ">
          <span>Click on todo text to edit</span>
        </Col>
      </Row>
    </div>
  );
};

export default HintComponent;
