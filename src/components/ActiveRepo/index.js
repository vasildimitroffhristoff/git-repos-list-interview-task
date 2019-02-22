import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contributor from './Contributor';
import Language from './Language';
import LoaderHOC from '../HOC/LoaderHOC';

class ActiveRepo extends Component {
	render() {
		const { title, contributors, languages } = this.props;
		return (
			<React.Fragment>
				<h3 className="active-repo-title">{title}</h3>
				<div className="contributors-list">
					<h4>Contributors:</h4>
					{contributors.map((contributor) => (
						<Contributor
							key={contributor.id}
							name={contributor.username}
							avatar={contributor.avatar}
							url={contributor.url}
						/>
					))}
				</div>
				<div className="languages-list">
					<h4>Used languages: </h4>
					{languages.map((lang) => (
						<Language key={lang.name} languageName={lang.name} percentage={lang.percentage} />
					))}
				</div>
			</React.Fragment>
		);
	}
}

ActiveRepo.propTypes = {
	title: PropTypes.string,
	contributors: PropTypes.array,
	languages: PropTypes.array
};

export default LoaderHOC('contributors')(ActiveRepo);
