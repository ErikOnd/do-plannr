import Task from "./Task";

export default interface ModalComponentProps {
  isOpen: boolean;
  closeModal: () => void;
  modalData: Task;
  handleModalData: (data: Task) => void;
  editTask?: boolean;
}
