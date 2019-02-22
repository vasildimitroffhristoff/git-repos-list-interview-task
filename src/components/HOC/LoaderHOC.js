import React, { Component } from 'react';
import { isEmpty } from '../../utils';

const LoaderHOC = (propName) => (WrappedComponent) => {
	return class LoaderHOC extends Component {
		render() {
			let arePropsEmpty;
			if (Array.isArray(propName)) {
				const arrayOfPropsIsEmpty = propName.filter((prop) => {
					return isEmpty(this.props[prop]);
				});

				arePropsEmpty = arrayOfPropsIsEmpty.length > 0;
			} else {
				arePropsEmpty = isEmpty(this.props[propName]);
			}

			return arePropsEmpty ? (
				<div className="loading-container">
					<small>Loading data. Please wait...</small>
					<div id="loading" />
				</div>
			) : (
				<WrappedComponent {...this.props} />
			);
		}
	};
};

export default LoaderHOC;
