import React from "react";
import { Col, Row } from "react-bootstrap";
import { TiDelete } from "react-icons/ti";

const TaskComponent = () => {
  return (
    <>
      <Row className="task-row pt-2">
        <Col className="d-flex align-items-center p-0 task-col pb-2">
          <input type="checkbox" className="task-status"></input>Morning Walk
          <span className="delete-task">
            <TiDelete size={30} color="#dc344a" cursor={"pointer"} />
          </span>
        </Col>
      </Row>
      <Row className="task-row pt-2">
        <Col className="d-flex align-items-center p-0 task-col pb-2">
          <input type="checkbox" className="task-status"></input>Call Peter for
          interview
          <span className="delete-task">
            <TiDelete size={30} color="#e74c3c" cursor={"pointer"} />
          </span>
        </Col>
      </Row>
    </>
  );
};

export default TaskComponent;
