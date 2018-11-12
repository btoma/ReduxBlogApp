import axios from 'axios';

const API_KEY = '?key=biven123';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';

export function fetchPosts() {

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(values, callBack) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() =>{
            callBack();
        });
    return {
        type: CREATE_POSTS,
        payload: request
    }
}