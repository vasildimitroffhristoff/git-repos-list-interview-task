import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepos, activateModal, setActiveRepo } from '../actions';
import Repos from '../components/Repos';
import Modal from '../components/Modal';
import ActiveRepo from '../components/ActiveRepo';

class AppContainer extends Component {
	componentDidMount() {
		this.props.getRepos();
	}
	render() {
		const { repos, isModalOpen, activateModal, setActiveRepo } = this.props;
		const { title, contributors, languages } = this.props.activeRepoData;

		return (
			<div className="app">
				<h1>
					<b>Github</b> Profile Repos:
				</h1>
				<Repos repos={repos} setActiveRepo={setActiveRepo} />
				{isModalOpen ? (
					<Modal setModalOpen={activateModal}>
						<ActiveRepo title={title} contributors={contributors} languages={languages} />
					</Modal>
				) : null}
			</div>
		);
	}
}

AppContainer.propTypes = {
	getRepos: PropTypes.func,
	activateModal: PropTypes.func,
	setActiveRepo: PropTypes.func,
	repos: PropTypes.array,
	isModalOpen: PropTypes.bool,
	activeRepoData: PropTypes.object
};

const mapStateToProps = (state) => {
	return {
		repos: state.repos.repos,
		isModalOpen: state.modal.opened,
		activeRepoData: state.activeRepo
	};
};

export default connect(mapStateToProps, { getRepos, activateModal, setActiveRepo })(AppContainer);
