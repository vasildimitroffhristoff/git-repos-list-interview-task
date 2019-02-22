import React from 'react';
import PropTypes from 'prop-types';

const Language = ({ languageName, percentage }) => {
	return (
		<span className="language-item">
			<b>{languageName}</b> - {percentage} %
		</span>
	);
};

Language.propTypes = {
	languageName: PropTypes.string,
	percentage: PropTypes.string
};

export default Language;
