import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRepos, activateModal, setActiveRepo } from '../actions';
import Repos from '../components/Repos/';
import Modal from '../components/Modal';
import ActiveRepo from '../components/ActiveRepo';

class AppContainer extends Component {
	componentDidMount() {
		this.props.getRepos();
	}
	render() {
		const { repos, isMoalOpen, activateModal, setActiveRepo } = this.props;
		const { title, contributors, languages } = this.props.activeRepoData;

		return (
			<div className="app">
				<h1>
					<b>Github</b> Profile Repos:
				</h1>
				<Repos repos={repos} setModalOpen={activateModal} setActiveRepo={setActiveRepo} />
				{isMoalOpen ? (
					<Modal setModalOpen={activateModal}>
						<ActiveRepo title={title} contributors={contributors} languages={languages} />
					</Modal>
				) : null}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		repos: state.repos.repos,
		isMoalOpen: state.modal.opened,
		activeRepoData: state.activeRepo
	};
};

export default connect(mapStateToProps, { getRepos, activateModal, setActiveRepo })(AppContainer);
