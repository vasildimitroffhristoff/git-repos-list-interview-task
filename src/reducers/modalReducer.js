import { SET_MODAL_STATE } from '../constants';

const initialState = {
	opened: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_MODAL_STATE:
			return {
				...state,
				opened: action.payload
			};

		default:
			return state;
	}
}
