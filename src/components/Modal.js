import React, { Component } from 'react';
import { Modal as MaterialModal } from '@material-ui/core';
import PropTypes from 'prop-types';

class Modal extends Component {
  render() {
    return (
      <MaterialModal
        aria-labelledby={this.props.arialabel}
        aria-describedby={this.props.ariadescribe}
        open={this.props.open}
      >
        {this.props.children}
      </MaterialModal>
    );
  }
}

Modal.propTypes = {
  arialabel: PropTypes.string,
  ariadescribe: PropTypes.string,
  open: PropTypes.bool
};

Modal.defaultProps = {
  arialabel: "",
  ariadescribe: "",
  open: false,
};


export default Modal;