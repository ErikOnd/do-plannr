import React, { Dispatch, SetStateAction } from "react";
import { Col, Row } from "react-bootstrap";
import { TiDelete } from "react-icons/ti";
import { BiTimeFive } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { removeTodo } from "../../store/reducers/todos";
import Task from "../../interfaces/Task";
import styles from "./TaskComponent.module.css";

interface TaskProps {
  handleModalData: (data: Task) => void;
  handleIsOpen: Dispatch<SetStateAction<boolean>>;
  handleTaskIndex: Dispatch<SetStateAction<number>>;
}

const TaskComponent = ({
  handleModalData,
  handleIsOpen,
  handleTaskIndex,
}: TaskProps) => {
  const todos = useSelector((state: RootState) => state.todo.todos);

  const dispatch = useDispatch();
  return (
    <div className={`${styles["task-container"]}`}>
      {todos.map((todo, index) => (
        <Row
          className={`pt-2 ${styles["task-row"]} ${styles["task-col"]}`}
          key={index}
        >
          <Row>
            {" "}
            <Col
              className={
                todo?.note || todo?.time
                  ? "d-flex align-items-center p-0 "
                  : "d-flex align-items-center p-0 pb-2"
              }
            >
              <input
                type="checkbox"
                className={`${styles["task-status"]}`}
              ></input>

              <span
                className={`${styles["todo-name"]}`}
                onClick={() => {
                  handleModalData(todo);
                  handleTaskIndex(index);
                  handleIsOpen(true);
                }}
              >
                {todo.name}
              </span>
              <span className={`${styles["delete-task"]}`}>
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
          {todo.note && (
            <Row className={todo?.time ? "" : "pb-2"}>
              <Col className="d-flex justify-content-start">
                <span className={`${styles["task-note"]}`}>{todo.note}</span>
              </Col>
            </Row>
          )}
          {todo?.time && (
            <Row className="pb-2">
              <Col className="d-flex justify-content-start">
                <span className={`${styles["task-note"]}`}>
                  <BiTimeFive className={`${styles["time-icon"]}`}></BiTimeFive>
                  {todo.time}
                </span>
              </Col>
            </Row>
          )}
        </Row>
      ))}
    </div>
  );
};

export default TaskComponent;
