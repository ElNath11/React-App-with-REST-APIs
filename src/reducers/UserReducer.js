import _ from 'lodash';
import { FETCH_USER, FETCH_USERS } from '../actions/types';

// export const initialStates = { users: [] };			

export default (state = {}, action) => {
	switch (action.type){
		case FETCH_USERS:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case FETCH_USER:
			return { ...state, [action.payload.id]: action.payload };
		default:
			return state;
	}
};