import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
	render() {
		const { onClose, children } = this.props;
		return (
			<div>
				<div className="modal-overlay" onClick={onClose} />
				<div className="modal-body">{children}</div>
			</div>
		);
	}
}

Modal.propTypes = {
	onClose: PropTypes.func,
	children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ])
};

export default Modal;
