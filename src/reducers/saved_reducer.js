import _ from 'lodash';
import { FETCH_SAVED } from '../actions';
// Receive previous accounts state and modify on request
// Default state is empty object
export default function(state = {}, action) {
	switch(action.type) {

	case FETCH_SAVED:
		return action.payload
	// Catch default and return state
	default:
		return state;
	}
}