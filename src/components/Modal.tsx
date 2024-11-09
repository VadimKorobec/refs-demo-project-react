import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

interface ModalProps {
  buttonCaption?: string;
  children?: React.ReactNode;
}

export interface ModalHandle {
  open: () => void;
}

const Modal = forwardRef<ModalHandle, ModalProps>(
  ({ children, buttonCaption }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialogRef.current?.showModal();
        },
      };
    });

    const portalElement = document.getElementById("modal-root");

    if (!portalElement) {
      return null;
    }

    return createPortal(
      <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        {children}
        <form method="dialog" className="mt-4 text-right">
          <Button>{buttonCaption}</Button>
        </form>
      </dialog>,
      portalElement
    );
  }
);

export default Modal;
