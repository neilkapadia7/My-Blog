import axios from 'axios';
import { GET_GUEST_BLOGS, GET_GUEST_BLOG ,BLOG_ERROR, SET_LOADING, CLEAR_GUEST_ERRORS, REMOVE_GUEST_BLOG } from './types';

export const getBlogs = () => async dispatch => {
    
    dispatch({ type: SET_LOADING });
    
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

export const getGuestBlog = (id) => async dispatch => {
    dispatch({ type: SET_LOADING });
    
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.get(`/api/blogs/blog/${id}`, config);
        
        dispatch({ type: GET_GUEST_BLOG, payload: res.data });
    } 
    catch (err) {
        dispatch({ type: BLOG_ERROR, payload: err });
    }
}

export const removeGuestBlog = () => dispatch =>{
    dispatch({ type: REMOVE_GUEST_BLOG })
}

const setLoading = () => dispatch => {
    dispatch({ type: SET_LOADING });
}

export const clearError = () => dispatch => {
    dispatch({type: CLEAR_GUEST_ERRORS});
}