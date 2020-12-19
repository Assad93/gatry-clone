import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  background-color: #FFF;
  border-radius: 4px;
  max-width: 800px;
  padding: 15px;
  margin: 80px auto 0 auto;
`;

export const CloseButton = styled.button`
    float: right;
    background: unset;
    border: unset;
`;
