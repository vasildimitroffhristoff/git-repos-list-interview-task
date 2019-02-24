import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';
import LoaderHOC from '../HOC';

class Repos extends Component {
	handleRepoItemClick = ({ name, contributors_url, languages_url }) => {
		this.props.setActiveRepo(name, contributors_url, languages_url);
	};
	render() {
		const { repos } = this.props;
		return (
			<ul>
				{repos.map((repo) => (
					<RepoItem key={repo.id} repo={repo} handleRepoItemClick={this.handleRepoItemClick} />
				))}
			</ul>
		);
	}
}

Repos.propTypes = {
	repos: PropTypes.array,
	handleRepoItemClick: PropTypes.func
};

export default LoaderHOC('repos')(Repos);
