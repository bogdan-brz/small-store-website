import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const Modal = (props) => {
    return createPortal(
        <Backdrop onClose={props.onClose}>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className={styles.modal}>
                {props.children}
            </div>
        </Backdrop>,
        document.getElementById("modal-root")
    );
};

const Backdrop = (props) => {
    return (
        <div onClick={props.onClose} className={styles.backdrop}>
            {props.children}
        </div>
    );
};

export default Modal;
