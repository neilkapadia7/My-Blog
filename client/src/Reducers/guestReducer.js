import { GET_GUEST_BLOGS, SET_LOADING, BLOG_ERROR, CLEAR_GUEST_ERRORS, REMOVE_GUEST_BLOG, GET_GUEST_BLOG } from "../Actions/types";

const initialState = {
    blogs: null,
    blog: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_GUEST_BLOGS:
            return {
                ...state,
                blogs: action.payload,
                loading: false
            }
        case GET_GUEST_BLOG:
            return {
                ...state,
                blog: action.payload,
                loading: false
            }
        case REMOVE_GUEST_BLOG:
            return {
                ...state,
                blog: null,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case CLEAR_GUEST_ERRORS:
            return {
                ...state,
                error: null
            }
        case BLOG_ERROR:
            console.log(action.payload);
            return{
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}