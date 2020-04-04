import { GET_BLOGS, BLOG_ERROR, ADD_BLOG, UPDATE_BLOG, SET_CURRENT, DELETE_BLOG, REMOVE_CURRENT, GET_ALL_BLOGS, GET_USER_BLOGS, REMOVE_USER_BLOG, CLEAR_BLOG_ERRORS, SET_LOADING } from "../Actions/types";

const initialState = {
    blog: null,
    blogs: null,
    allblogs: null,
    userblogs: null,
    error: null,
    loading: false,
    current: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_BLOGS:
            return {
                ...state,
                blogs: action.payload,
                loading: false
            }
        case ADD_BLOG:
            return {
                ...state,
                blogs: [action.payload ,...state.blogs],
                loading: false
            }
        case UPDATE_BLOG:
            return {
                ...state,
                blogs: state.blogs.map(blog => blog._id !== action.payload._id ? blog : action.payload ),
                loading: false
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case REMOVE_CURRENT:
            return {
                ...state,
                current: null
            }
        case DELETE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog._id !== action.payload ),
                loading: false
            }
        case GET_ALL_BLOGS:
            return {
                ...state,
                allblogs: action.payload,
                loading: false
            }
        case GET_USER_BLOGS:
            return {
                ...state,
                userblogs: action.payload,
                loading: false
            }
        case REMOVE_USER_BLOG:
            return {
                ...state,
                userblogs: null,
                loading: false
            }
        case BLOG_ERROR:
            console.log(action.payload);
            return {
                ...state,
                error: action.payload
            }
        case CLEAR_BLOG_ERRORS:
            return {
                ...state,
                error: null
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}