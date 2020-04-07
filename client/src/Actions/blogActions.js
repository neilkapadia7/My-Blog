import axios from 'axios';
import { GET_BLOGS, BLOG_ERROR, ADD_BLOG, UPDATE_BLOG, SET_CURRENT, DELETE_BLOG, REMOVE_CURRENT, GET_ALL_BLOGS, GET_USER_BLOGS, REMOVE_USER_BLOG, CLEAR_BLOG_ERRORS, SET_LOADING } from './types';

export const getBlogs = () => async dispatch => {
    setLoading();

    try {
        const res = await axios.get('api/blogs');

        dispatch({type: GET_BLOGS, payload: res.data});
    } 
    catch (err) {
        dispatch({ type: BLOG_ERROR, payload: err.message });
    }
}

export const addBlog = formData => async dispatch => {
    setLoading();
    
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
        dispatch({ type: BLOG_ERROR, payload: err.message });
    }
}

export const setCurrent = blog => dispatch => {
    dispatch({ type: SET_CURRENT, payload: blog });
}

export const removeCurrent = () => dispatch => {
    dispatch({ type: REMOVE_CURRENT });
}

export const updateBlog = formData => async dispatch => {
    setLoading();

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
        dispatch({ type: BLOG_ERROR, payload: err.message });
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
        dispatch({ type: BLOG_ERROR, payload: err.message });   
    }
}

export const getAllBlogs = () => async dispatch => {
    setLoading();

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.get('/api/blogs/all', config);

        dispatch({ type: GET_ALL_BLOGS, payload: res.data});    
    } 
    catch (err) {
        dispatch({ type: BLOG_ERROR, payload: err.message });   
    }
}

export const getUserBlogs = id => async dispatch => {
    try {
        setLoading();

        const res = await axios.get(`/api/blogs/user/${id}`);
        
        dispatch({type: GET_USER_BLOGS, payload: res.data});
    } 
    catch (err) {
        dispatch({ type: BLOG_ERROR, payload: err.message });   
    }
}

const setLoading = () => dispatch => {
    dispatch({ type: SET_LOADING });
}

export const removeUserBlog = () => dispatch => {
    dispatch({ type: REMOVE_USER_BLOG })
}

export const clearErrors = () => dispatch => {
    dispatch({ type: CLEAR_BLOG_ERRORS })
}