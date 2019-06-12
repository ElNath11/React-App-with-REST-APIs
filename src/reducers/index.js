import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import PostReducer from './PostReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	form: formReducer,
	users: UserReducer,
	posts: PostReducer
});
