import { SET_LOADING } from "./types"


export const getUser = () => async dispatch =>{
    dispatch({type: SET_LOADING});
}