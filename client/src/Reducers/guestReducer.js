import { GET_GUEST_BLOGS, SET_LOADING, BLOG_ERROR } from "../Actions/types";

const initialState = {
    blogs: null,
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
        case SET_LOADING:
            return {
                ...state,
                loading: true
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