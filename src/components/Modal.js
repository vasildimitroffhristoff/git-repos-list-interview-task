import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
	render() {
		const { onClose, children } = this.props;
		return (
			<React.Fragment>
				<div className="modal-overlay" onClick={onClose} />
				<div className="modal-body">{children}</div>
			</React.Fragment>
		);
	}
}

Modal.propTypes = {
	onClose: PropTypes.func,
	children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Modal;
