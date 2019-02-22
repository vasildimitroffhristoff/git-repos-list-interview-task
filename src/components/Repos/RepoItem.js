import React from 'react';

export default function RepoItem({ repo, handleRepoItemClick }) {
	return (
		<li onClick={() => handleRepoItemClick(repo)} className={repo.private ? 'private' : null}>
			<span className="name">&#10004; {repo.name}</span>
			<span className="status">
				{repo.private ? (
					<span role="img" aria-label="">
						&#128274; private
					</span>
				) : (
					'public'
				)}
			</span>
			<span className="description">{repo.description}</span>
		</li>
	);
}
