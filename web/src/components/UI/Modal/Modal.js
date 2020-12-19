import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay, Modal, CloseButton } from './styles';

const portalRoot = document.getElementById('portal-root');

function UIModal({ children, isOpen, onCLickClose }) {
  if(!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
      <Overlay>
        <Modal>
          <CloseButton type="button" onClick={onCLickClose}>X</CloseButton>
          {children}
        </Modal>
      </Overlay>,
      portalRoot
  );
}

export default UIModal;