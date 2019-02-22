import React, { Component } from 'react';

export default class Modal extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="modal-overlay" onClick={this.props.onClose} />
				<div className="modal-body">{this.props.children}</div>
			</React.Fragment>
		);
	}
}
