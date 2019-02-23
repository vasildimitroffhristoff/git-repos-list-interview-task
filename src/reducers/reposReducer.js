import { FETCH_ALL_REPOS, SET_FETCHED_REPOS } from '../constants';

const initialState = {
	repos: [],
	isFetching: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_ALL_REPOS:
			return {
				...state,
				isFetching: true
			};
		case SET_FETCHED_REPOS:
			return {
				...state,
				repos: action.payload,
				isFetching: false
			};

		default:
			return state;
	}
}
