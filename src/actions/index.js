import jsonPlaceholder from '../apis/blog';
import history from '../history';
import {	FETCH_USER,
			FETCH_USERS,
			FETCH_ALBUMS,
			FETCH_COMMENTS,
			FETCH_PHOTOS,
			FETCH_PHOTO,
			FETCH_POST,
			FETCH_POSTS,
			CREATE_POST,
			DELETE_POST,
			EDIT_POST,
			CREATE_COMMENT,
			DELETE_COMMENT,
			EDIT_COMMENT } from './types';

// list user
export const fetchUsers = () => async dispatch => {
	const response = await jsonPlaceholder.get('/users');

	dispatch({ type: FETCH_USERS, payload: response.data });
};

// GET CURRENT USER
export const fetchUser = (id) => async dispatch => {
	const response = await jsonPlaceholder.get(`/users?id=${id}`);

	dispatch({ type: FETCH_USER, payload: response.data });
};

//LIST POST
export const fetchPosts = (id) => async dispatch => {
	const response = await jsonPlaceholder.get(`/posts?userId=${id}`);

	dispatch({ type: FETCH_POSTS, payload: response.data });
};

//SINGLE POST
export const fetchPost = (id) => async dispatch => {
	const response = await jsonPlaceholder.get(`/posts/${id}`);

	dispatch({ type: FETCH_POST, payload: response.data });
};

// CREATE POST
// export const createPost = formValues => async (dispatch, getState) => {
// 	const { userId } = getState().auth;
// 	const response = await jsonPlaceholder.post('/posts', { ...formValues, userId});

// 	dispatch({ type: CREATE_POST, payload: response.data });
// };
export const createPost = formValues => async (dispatch) => {
	const response = await jsonPlaceholder.post('/posts', formValues );

	dispatch({ type: CREATE_POST, payload: response.data });
	history.push('/');
};

// EDIT POST
export const editPost = (id, formValues) => async dispatch => {
	const response = await jsonPlaceholder.patch(`/posts/${id}`, formValues);

	dispatch({ type: EDIT_POST, payload: response.data });
	history.push('/');
};

// DELETE POST
export const deletePost = (id) => async dispatch => {
	const response = await jsonPlaceholder.delete(`/posts/${id}`);

	dispatch({ type: DELETE_POST, payload: id });
	history.push('/');
};
