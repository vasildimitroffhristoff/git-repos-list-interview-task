import React, { Component } from 'react';
import axios from 'axios';
import { API_URL, REPOS_URL } from './constants';
import ActiveRepo from './components/ActiveRepo/';
import Repos from './components/Repos/';
import Modal from './components/Modal';
import { extractLanguagesWithPercentageValue } from './utils';

class App extends Component {
	state = {
		repos: [],
		activeRepoInfo: {
			title: null,
			contributors: [],
			languages: []
		},
		showModal: false
	};

	componentDidMount() {
		axios
			.get(`${API_URL}${REPOS_URL}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`)
			.then((repos) => {
				let reposData;
				if (repos) {
					reposData = repos.data;
				} else {
					reposData = [];
				}
				this.setState({ repos: reposData });
			})
			.catch((error) => console.log(error));
	}

	showModal = () => this.setState({ showModal: true });

	closeModal = () =>
		this.setState({
			...this.state,
			activeRepoInfo: {
				...this.state.activeRepoInfo,
				title: null,
				contributors: [],
				languages: []
			},
			showModal: false
		});

	handleRepoItemClick = (repo) => {
		const repo_title = repo.name;
		const { contributors_url, languages_url } = repo;
		this.showModal();

		const promises = [
			axios.get(`${contributors_url}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`),
			axios.get(`${languages_url}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`)
		].map((p) => p.then((res) => res.data));

		Promise.all(promises)
			.then(([ contributors, languages ]) => {
				let contributorsData;
				if (contributors) {
					contributorsData = contributors.map((contributor) => ({
						id: contributor.id,
						username: contributor.login,
						avatar: contributor.avatar_url,
						url: contributor.html_url
					}));
				} else {
					contributorsData = [];
				}

				const languagesWithPercentageValue = extractLanguagesWithPercentageValue(languages);

				this.setState((prevState) => ({
					...prevState,
					activeRepoInfo: {
						...prevState.activeRepoInfo,
						title: repo_title,
						contributors: [ ...prevState.activeRepoInfo.contributors, ...contributorsData ],
						languages: [ ...prevState.activeRepoInfo.languages, ...languagesWithPercentageValue ]
					}
				}));
			})
			.catch((err) => console.log(err));
	};

	render() {
		const { repos } = this.state;
		const { title, contributors, languages } = this.state.activeRepoInfo;

		return (
			<div className="app">
				<h1>
					<b>Github</b> Profile Repos:
				</h1>
				<Repos repos={repos} handleRepoItemClick={this.handleRepoItemClick} />
				{this.state.showModal ? (
					<Modal onClose={this.closeModal}>
						<ActiveRepo title={title} contributors={contributors} languages={languages} />
					</Modal>
				) : null}
			</div>
		);
	}
}
export default App;
