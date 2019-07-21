import React, { Component } from 'react';
import { Modal } from '@material-ui/core';
import PropTypes from 'prop-types';

class TranferModal extends Component {
  render() {
    return (
      <Modal
        aria-labelledby={this.props.arialabel}
        aria-describedby={this.props.ariadescribe}
        open={this.props.open}
        onClose={handleClose}
      >
        {this.props.children}
      </Modal>
    );
  }
}

TranferModal.propTypes = {
  arialabel: PropTypes.string,
  ariadescribe: PropTypes.string,
  open: PropTypes.bool
};

TranferModal.defaultProps = {
  arialabel: "",
  ariadescribe: "",
  open: false,
};


export default TranferModal;