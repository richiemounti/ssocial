import axios from 'axios';
import { GET_POSTS, ADD_POSTS, DELETE_POSTS, ITEMS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorsAction';

export const getPosts = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/api/posts')
        .then(res => 
            dispatch({
                type: GET_POSTS,
                payload: res.data
            }))
            .catch(err => dispatch(returnErrors(err.response.data, err.response.data)));
};  
 

export const addPosts = (post) => (dispatch, getState) => {
    axios
        .post('/api/posts', post, tokenConfig(getState))
        .then(res => 
            dispatch({
               type: ADD_POSTS,
               payload: res.data 
            }))
            .catch(err => dispatch(returnErrors(err.response.data, err.response.data)));
}; 

export const deletePosts = (id) => (dispatch, getState) => {
    axios.delete(`api/posts/${id}`, tokenConfig(getState)).then(res => dispatch({
        type: DELETE_POSTS,
        payload: id
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.data)));
};


export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};