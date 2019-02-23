import { combineReducers } from 'redux';
import reposReducer from './reposReducer';
import modalReducer from './modalReducer';
import activeRepoReducer from './activeRepoReducer';

export default combineReducers({
	repos: reposReducer,
	modal: modalReducer,
	activeRepo: activeRepoReducer
});
