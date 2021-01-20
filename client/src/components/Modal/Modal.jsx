import React from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.module.css';

function Modal(props) {
  const { modalOpen, children } = props;
  // TODO modal open/close classes will need to be set on keypress to avoid animation issues
  const modalStyle = modalOpen ? 'modalopen' : 'modalclose';

  return (
    <div className={`${classes.modal} ${classes[modalStyle]}`}>
      {children}
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  modalOpen: PropTypes.bool.isRequired,
};
