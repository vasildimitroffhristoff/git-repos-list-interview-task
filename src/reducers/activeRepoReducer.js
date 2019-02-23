import { FETCH_ACTIVATED_REPO_INFO, SET_ACTIVE_REPO_INFO } from '../constants';

const initialState = {
	title: null,
	contributors: [],
	languages: [],
	isFetching: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_ACTIVATED_REPO_INFO:
			return {
				...state,
				isFetching: true
			};

		case SET_ACTIVE_REPO_INFO:
			return {
				...state,
				title: action.payload.title,
				contributors: action.payload.contributors,
				languages: action.payload.languages,
				isFetching: false
			};

		default:
			return state;
	}
}
