import React, { useRef, useEffect } from "react";
import { Col, Modal, Row, Form } from "react-bootstrap";
import { BiTimeFive } from "react-icons/bi";
import ModalComponentProps from "../../interfaces/ModalComponentProps";
import styles from "./ModalComponent..module.css";

const ModalComponent = ({
  isOpen,
  closeModal,
  modalData,
  handleModalData,
  editTask,
}: ModalComponentProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      setTimeout(() => {
        textareaRef.current?.focus();
        textareaRef.current?.setSelectionRange(0, 0);
      }, 0);
    }
  }, [isOpen]);

  const handleKeyDownTextArea = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && textareaRef.current?.value === "") {
      event.preventDefault();
      closeModal();
    }
  };

  const handleKeyDownDate = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      closeModal();
    }
  };

  const handleTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleModalData({ ...modalData, name: e.target.value });
  };

  const handleTaskNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleModalData({ ...modalData, note: e.target.value });
  };

  const handleTaskDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleModalData({ ...modalData, time: e.target.value });
  };

  return (
    <Modal
      show={isOpen}
      onHide={closeModal}
      className={`${styles["custom-modal"]}`}
    >
      <input
        placeholder="task..."
        className={` d-flex task-input ${styles["modal-input"]}`}
        onChange={(e) => {
          handleTaskName(e);
        }}
        value={modalData?.name}
      />
      <Form>
        <Row className={`${styles["text-area-row"]}`}>
          <Form.Group className="">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="add an extra note..."
              className={`${styles["modal-textarea"]}`}
              ref={textareaRef}
              onKeyDown={handleKeyDownTextArea}
              onChange={handleTaskNote}
              value={modalData?.note}
            />
          </Form.Group>
        </Row>
        <Row className="justify-content-center my-3">
          <Col
            className={`d-flex align-items-center p-0 ${styles["time-picker-col"]}`}
          >
            <input
              placeholder="00:00"
              className={`${styles["time-picker"]}`}
              onKeyDown={handleKeyDownDate}
              onChange={(e) => {
                handleTaskDate(e);
              }}
              value={modalData?.time}
            ></input>
            <BiTimeFive size={20}></BiTimeFive>
          </Col>
        </Row>
      </Form>
      <Row className={`justify-content-center ${styles["save-btn-row"]}`}>
        <button onClick={closeModal} className={`${styles["save-btn"]}`}>
          Save Task
        </button>
      </Row>
    </Modal>
  );
};

export default ModalComponent;
