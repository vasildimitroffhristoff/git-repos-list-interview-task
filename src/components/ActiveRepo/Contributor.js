import React from 'react';
import PropTypes from 'prop-types';

const Contributor = ({ name, avatar, url }) => {
	return (
		<a className="contributor" href={url}>
			<img src={avatar} alt={name} />
			{name}
		</a>
	);
};

Contributor.propTypes = {
	name: PropTypes.string,
	avatar: PropTypes.string,
	url: PropTypes.string
};

export default Contributor;
