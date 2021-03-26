import React, { Children,useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import bemCssModule from 'bem-css-modules';

import {default as Modal} from './Modal.module.scss';

const style = bemCssModule(ModalStyles);

const Modal = ({children, handleOnClose, isOpen, shouldBeCloseOnOutsideClic}) => {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect (()=>{
    if (!modalRef.current){
      return;
    }

    const {current: modal} = modalRef;

    if(isOpen){
      previousActiveElement.current = document.activeElement;
      modal.showModal();
    }else if (previousActiveElement.current){
      modal.close();
      previousActiveElement.current.focus();
    }

  },[isOpen]);

  useEffect(()=>{
    const {current: modal} = modalRef;

    const handleCancel = event =>{
      event.preventDefault();
      handleOnClose();
    };

    modal.addEventListener('cancel', handleCancel);
    return ()=>{
      modal.removeEventListener('cancel', handleCancel);
    }
  },[handleOnClose]);

  const handleOutsideClick = ({target}) =>{
    const {current} = modalRef;

    if (shouldBeCloseOnOutsideClic && target === current) {
      handleOnClose();
    }
  }


  return ReactDOM.createPortal((
    <dialog className={style()} ref={modalRef} onClick={handleOutsideClick}>
      {children}
    </dialog>
  ), document.body);
}

export default Modal;
