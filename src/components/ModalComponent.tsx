import React, { useRef, useEffect } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { BiTimeFive } from "react-icons/bi";

type ModalComponentProps = {
  isOpen: boolean;
  closeModal: () => void;
  modalData: string;
  handleModalData: (data: string) => void;
};

const ModalComponent = ({
  isOpen,
  closeModal,
  modalData,
  handleModalData,
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && textareaRef.current?.value === "") {
      event.preventDefault();
      closeModal();
    }
  };

  return (
    <Modal show={isOpen} onHide={closeModal} className="custom-modal">
      <input placeholder="task..." className="d-flex task-input modal-input" />
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
            />
          </Form.Group>
        </Row>
        <Row className="justify-content-center my-3">
          <Col className="d-flex  align-items-center time-picker-col p-0">
            <input placeholder="00:00" className="time-picker"></input>
            <BiTimeFive></BiTimeFive>
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
