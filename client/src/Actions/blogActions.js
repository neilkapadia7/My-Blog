import axios from 'axios';
import { GET_BLOGS, BLOG_ERROR, ADD_BLOG, UPDATE_BLOG, SET_CURRENT, DELETE_BLOG, REMOVE_CURRENT } from './types';

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
        headers: {
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

export const setCurrent = blog => dispatch => {
    dispatch({ type: SET_CURRENT, payload: blog });
}

export const removeCurrent = () => dispatch => {
    dispatch({ type: REMOVE_CURRENT });
}

export const updateBlog = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.put(`/api/blogs/${formData._id}`, formData, config);
        
        dispatch({ type: UPDATE_BLOG, payload: res.data });
    } 
    catch (err) {
        dispatch({ type: BLOG_ERROR, payload: err });
    }
}

export const deleteBlog = id => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.delete(`/api/blogs/${id}`, config);

        dispatch({ type: DELETE_BLOG, payload: id });
    } 
    catch (err) {
        dispatch({ type: BLOG_ERROR, payload: err });   
    }
}