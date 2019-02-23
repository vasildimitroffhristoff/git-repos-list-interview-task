import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './containers/AppContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('list')
);

serviceWorker.unregister();
