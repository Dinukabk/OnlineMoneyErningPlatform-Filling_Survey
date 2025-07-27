import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const ErrorToast = ({ show, message, onClose }) => (
  <ToastContainer position='top-end' className='p-3'>
    <Toast show={show} onClose={onClose} bg='danger' delay={3000} autohide>
      <Toast.Header closeButton={false}>
        <strong className='me-auto'>Error</strong>
      </Toast.Header>
      <Toast.Body className='text-white'>{message}</Toast.Body>
    </Toast>
  </ToastContainer>
);

export default ErrorToast;
