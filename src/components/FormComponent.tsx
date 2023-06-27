import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TaskComponent from "./TaskComponent";

const FormComponent = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <div className="todo-form p-0">
          <Row className="task-header-title">
            <Col className="d-flex p-0">Thu 27.06.2023</Col>
          </Row>
          <Row className="folder-row">
            <Col className="d-flex">5 tasks</Col>
            <Col className="d-flex justify-content-end">
              <span className="task-filter is-active">All</span>
              <span className="task-filter">Active</span>
              <span className="task-filter">Completed</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                placeholder="Add new task..."
                className="d-flex task-input"
              ></input>
            </Col>
          </Row>
          <TaskComponent />
        </div>
      </Row>
    </Container>
  );
};

export default FormComponent;
