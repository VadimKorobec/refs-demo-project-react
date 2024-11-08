import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
}
const Modal = ({ children }: ModalProps) => {
  const portalElement = document.getElementById("modal-root");

  if (!portalElement) {
    return null;
  }

  return createPortal(<dialog>{children}</dialog>, portalElement);
};

export default Modal;
