import { GET_BLOGS, BLOG_ERROR, ADD_BLOG, UPDATE_BLOG, SET_CURRENT, DELETE_BLOG } from "../Actions/types";

const initialState = {
    blog: null,
    blogs: null,
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
        case DELETE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog._id !== action.payload )
            }
        case BLOG_ERROR:
            console.log(action.payload);
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}