import axios from 'axios';
import { GET_GUEST_BLOGS, BLOG_ERROR, SET_LOADING } from './types';

export const getBlogs = () => async dispatch => {
    
    setLoading();
    
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.get('/api/blogs/all', config);
        dispatch({ type: GET_GUEST_BLOGS, payload: res.data });
    } 
    catch (err) {
        dispatch({ type: BLOG_ERROR, payload: err });
    }
}

const setLoading = () => dispatch => {
    dispatch({ type: SET_LOADING });
}