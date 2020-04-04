import { SET_ALERT, REMOVE_ALERT } from "./types";
import { v4 as uuidv4 } from 'uuid';


export const setAlert = (msg, type) => dispatch => {
    console.log('Alert Action Called!')
    const id = uuidv4();
    dispatch({ type: SET_ALERT, payload: {msg, type, id} });

    setTimeout(() => dispatch({type: REMOVE_ALERT, payload: id}), 5000);
};
