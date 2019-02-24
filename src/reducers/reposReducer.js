import { SET_FETCHED_REPOS } from '../constants';

const initialState = {
	repos: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_FETCHED_REPOS:
			return {
				...state,
				repos: action.payload
			};

		default:
			return state;
	}
}
