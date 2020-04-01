import { GET_BLOGS, BLOG_ERROR } from "../Actions/types";

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