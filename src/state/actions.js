import { ADD_NEW } from "./types";

const addNewTodo = (dispatch) => {
    return (formData) => {
        dispatch({
            type: ADD_NEW,
            payload: formData
        })
    }
};

const actions = {
    addNewTodo
};

export const dispatchActions = dispatch => {
    let dispatched_actions = {};

    Object.keys(actions).forEach(key => {
        dispatched_actions[key] = actions[key](dispatch);
    });

    return dispatched_actions;
};
