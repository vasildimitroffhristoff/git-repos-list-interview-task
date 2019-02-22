import React from 'react';

const Contributor = ({ name, avatar, url }) => {
	return (
		<a className="contributor" href={url}>
			<img src={avatar} alt={name} />
			{name}
		</a>
	);
};

export default Contributor;
