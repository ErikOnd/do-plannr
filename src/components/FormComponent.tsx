import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TaskComponent from "./TaskComponent";
import ModalComponent from "./ModalComponent";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../store/todos";
import Task from "./interfaces/Task";

const FormComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskIndex, setTaskIndex] = useState<number>(-1);
  const [task, setTask] = useState<Task>({
    name: "",
    note: "",
    date: "",
    completed: false,
  });

  const dispatch = useDispatch();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

    const isValidTime = timeRegex.test(task.date);

    if (!task.name) {
      toast.error("Your task needs a name", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      if ((isValidTime || task.date === "") && taskIndex !== -1) {
        dispatch(editTodo({ index: taskIndex, todo: task }));
        setTask({ name: "", note: "", date: "", completed: false });
        setTaskIndex(-1);
        setIsOpen(false);
      } else if (isValidTime || task.date === "") {
        dispatch(addTodo(task));
        setTask({ name: "", note: "", date: "", completed: false });
        setIsOpen(false);
      } else {
        toast.error("Enter a valide Time format or remove it", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  const handleTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, name: e.target.value });
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      openModal();
    }
  };

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
                className="d-flex task-input todo-input"
                onChange={(e) => {
                  handleTaskName(e);
                }}
                onKeyDown={handleEnter}
                value={task.name}
              />
            </Col>
          </Row>
          <TaskComponent
            handleModalData={setTask}
            handleIsOpen={setIsOpen}
            handleTaskIndex={setTaskIndex}
          />
          <ModalComponent
            isOpen={isOpen}
            closeModal={closeModal}
            modalData={task}
            handleModalData={setTask}
          />
        </div>
      </Row>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default FormComponent;
