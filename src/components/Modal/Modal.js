import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
	closeModal = () => {
		this.props.setModalOpen(false);
	};
	render() {
		const { children } = this.props;
		return (
			<React.Fragment>
				<div className="modal-overlay" onClick={this.closeModal} />
				<div className="modal-body">{children}</div>
			</React.Fragment>
		);
	}
}

Modal.propTypes = {
	onClose: PropTypes.func,
	children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ])
};

export default Modal;
