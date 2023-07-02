import React from "react";
import { Col, Row } from "react-bootstrap";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addTodo, removeTodo, editTodo } from "../store/todos";

const TaskComponent = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);

  const dispatch = useDispatch();
  return (
    <div className="task-container">
      {todos.map((todo, index) => (
        <Row className="task-row pt-2" key={index}>
          <Col className="d-flex align-items-center p-0 task-col pb-2">
            <input type="checkbox" className="task-status"></input>
            {todo.name}
            <span className="delete-task">
              {/* todo: create modal (do u really wanna delete this task?) */}
              <TiDelete
                size={30}
                color="#dc344a"
                cursor={"pointer"}
                onClick={() => {
                  dispatch(removeTodo(index));
                }}
              />
            </span>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default TaskComponent;
