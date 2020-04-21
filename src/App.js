import React, {useReducer} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import {TodoContext} from './contexts';
import reducer from './state/reducer.js'
import {todoState} from './state/reducer';
import {dispatchActions} from "./state/actions";

function App() {
    const [state, dispatch] = useReducer(reducer, todoState)
    return (
        <TodoContext.Provider value={{state: state.todoList, actions: dispatchActions(dispatch)}}>
            <Form/>
            <TodoList/>
        </TodoContext.Provider>
    );
}

export default App;
