import { GET_POSTS, ADD_POSTS, DELETE_POSTS, ITEMS_LOADING } from '../actions/types';



const initialState = {
    posts: [],
    loading: false
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function(state= initialState, action){
    switch(action.type){
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            };
        case DELETE_POSTS:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload)
            };
        case ADD_POSTS:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}