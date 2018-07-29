import React from 'react';
import ReactModal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50.1%',
        right: '50.1%',
        bottom: 'auto',
        marginRight: '-35.1%',
        transform: 'translate(-50.1%, -50.1%)',
        maxHeight: '100vh', // <-- This sets the height
        overlfow: 'scroll' // <-- This tells the modal to scrol
    },
    overlay: {
        zIndex: 10
    }
};

ReactModal.setAppElement('#root');

const Modal = (props) => {
    return (
        <ReactModal
            style={customStyles}
            ariaHideApp={true}
            isOpen={props.isOpen}
            shouldCloseOnOverlayClick={props.closeOnOverlayClick}
            onRequestClose={props.onRequestClose}
        >
            {props.children}
        </ReactModal>
    );

}

export default Modal;
