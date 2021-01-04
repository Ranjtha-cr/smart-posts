import { actionCreator } from '../utils/utils';
import * as ACTION_TYPES from './actionTypes';

export function addPost(payload) {
    return (dispatch) => {
        dispatch(actionCreator(ACTION_TYPES.ADD_POST, payload))
    }
}

export function searchPost(payload) {
    return (dispatch) => {
        dispatch(actionCreator(ACTION_TYPES.SEARCH_ITEMS, payload))
    }
}

export function setPostCards(payload) {
    return (dispatch) => {
        dispatch(actionCreator(ACTION_TYPES.SHOW_POSTS, payload))
    }
}