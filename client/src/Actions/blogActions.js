import axios from 'axios';
import { GET_BLOGS, BLOG_ERROR, ADD_BLOG } from './types';

export const getBlogs = () => async dispatch => {
   
    try {
        const res = await axios.get('api/blogs');

        dispatch({type: GET_BLOGS, payload: res.data});
    } 
    catch (err) {
        dispatch({ type: BLOG_ERROR, payload: err });
    }
}

export const addBlog = formData => async dispatch => {
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('api/blogs', formData, config);

        dispatch({ type: ADD_BLOG, payload: res.data });
    } 
    catch (err) {
        dispatch({ type: BLOG_ERROR, payload: err });
    }
}

