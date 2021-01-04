import * as ACTION_TYPES from '../actions/actionTypes';

const defaultState = {
    posts: [],
    searchPost: '',
    showPosts: false
}

export default function postReducer(state = defaultState, action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
                showPosts: true
            }
        case ACTION_TYPES.SEARCH_ITEMS:
            return {
                ...state,
                searchPost: action.payload,
            }
        case ACTION_TYPES.SHOW_POSTS:
            return {
                ...state,
                showPosts: action.payload,
            }
        default:
            return state;
    }
}