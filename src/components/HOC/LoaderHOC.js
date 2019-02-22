import React, { Component } from 'react';
import { isEmpty } from '../../utils';

const LoaderHOC = (propName) => (WrappedComponent) => {
	return class LoaderHOC extends Component {
		render() {
			return isEmpty(this.props[propName]) ? (
                <div className="loading-container">
                    <small>Loading data. Please wait...</small>    
                    <div id="loading"></div>
                </div>
            ) : (
				<WrappedComponent {...this.props} />
			);
		}
	};
};

export default LoaderHOC;
