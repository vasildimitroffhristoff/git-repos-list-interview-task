import { SET_ACTIVE_REPO_DATA } from '../constants';

const initialState = {
	title: null,
	contributors: [],
	languages: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_ACTIVE_REPO_DATA:
			return {
				...state,
				title: action.payload.title,
				contributors: action.payload.contributors,
				languages: action.payload.languages
			};

		default:
			return state;
	}
}
