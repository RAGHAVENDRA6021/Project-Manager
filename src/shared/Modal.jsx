import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ children }, ref) => {
  const dialogRef = useRef();
  useImperativeHandle(
    ref,
    () => {
      return {
        open: () => dialogRef.current.showModal(),
      };
    },
    []
  );
  return createPortal(
    <dialog ref={dialogRef}>{children}</dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
