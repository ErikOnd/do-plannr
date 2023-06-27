import React from "react";
import { Modal, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";

type ModalComponentProps = {
  isOpen: boolean;
  closeModal: () => void;
  modalData: string; // Example type for the modal data
  handleModalData: (data: string) => void;
};

const ModalComponent = ({
  isOpen,
  closeModal,
  modalData,
  handleModalData,
}: ModalComponentProps) => {
  console.log(isOpen);

  return (
    <Modal show={isOpen} onHide={closeModal} className="custom-modal">
      <input
        placeholder="task..."
        className="d-flex task-input modal-input"
        value="Testing stuff with Peter"
      />
      <Form>
        <Row className="text-area-row">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="add an extra note..."
              className="modal-textarea"
            />
          </Form.Group>
        </Row>
        <Row>
          <input placeholder="12:34"></input>
        </Row>
      </Form>
      <button onClick={closeModal}>Save Task</button>
    </Modal>
  );
};

export default ModalComponent;
