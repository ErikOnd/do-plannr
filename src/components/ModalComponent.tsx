import React, { useRef, useEffect } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { BiTimeFive } from "react-icons/bi";

type ModalComponentProps = {
  isOpen: boolean;
  closeModal: () => void;
  modalData: { name: string; date: string; note: string };
  handleModalData: (data: { name: string; date: string; note: string }) => void;
};

const ModalComponent = ({
  isOpen,
  closeModal,
  modalData,
  handleModalData,
}: ModalComponentProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  console.log(modalData);

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      setTimeout(() => {
        textareaRef.current?.focus();
        textareaRef.current?.setSelectionRange(0, 0);
      }, 0);
    }
  }, [isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && textareaRef.current?.value === "") {
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
    handleModalData({ ...modalData, date: e.target.value });
  };

  return (
    <Modal show={isOpen} onHide={closeModal} className="custom-modal">
      <input
        placeholder="task..."
        className="d-flex task-input modal-input"
        onChange={(e) => {
          handleTaskName(e);
        }}
        value={modalData?.name}
      />
      <Form>
        <Row className="text-area-row">
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="add an extra note..."
              className="modal-textarea"
              ref={textareaRef}
              onKeyDown={handleKeyDown}
              onChange={handleTaskNote}
            />
          </Form.Group>
        </Row>
        <Row className="justify-content-center my-3">
          <Col className="d-flex  align-items-center time-picker-col p-0">
            <input
              placeholder="00:00"
              className="time-picker"
              onChange={(e) => {
                handleTaskDate(e);
              }}
            ></input>
            <BiTimeFive size={20}></BiTimeFive>
          </Col>
        </Row>
      </Form>
      <Row className="justify-content-center save-btn-row">
        <button onClick={closeModal} className="save-btn">
          Save Task
        </button>
      </Row>
    </Modal>
  );
};

export default ModalComponent;
