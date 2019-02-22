import React, { Component } from 'react';
import RepoItem from './RepoItem';
import LoaderHOC from '../HOC/LoaderHOC';

class Repos extends Component {
	render() {
		const { repos, handleRepoItemClick } = this.props;
		return (
			<ul>
				{repos.map((repo) => <RepoItem key={repo.id} repo={repo} handleRepoItemClick={handleRepoItemClick} />)}
			</ul>
		);
	}
}

export default LoaderHOC('repos')(Repos);
