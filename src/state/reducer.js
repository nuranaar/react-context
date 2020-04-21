import { ADD_NEW } from "./types";


export const todoState = {
    todoList: [
        {
            title: 'Task 1',
            desc: 'blah blah',
            date: '20.04.2020'
        }
    ]
};


export default (state, { type, payload }) => {
    switch (type) {
        case ADD_NEW:
            return {
                todoList: [
                    ...state.todoList,
                    payload
                ]
            };
        default:
            return state;
    }
}
