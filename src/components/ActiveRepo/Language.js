import React from 'react';

const Language = ({ languageName, percentage }) => {
	return (
		<span className="language-item">
			<b>{languageName}</b> - {percentage} %
		</span>
	);
};

export default Language;
