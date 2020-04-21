import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoContext } from '../contexts';

function TodoList() {
    const context = useContext(TodoContext);
    return (
        <ul>
            {
                context.state.map((item, index) =>
                    <TodoItem key={index} item={item} />
                )
            }
        </ul>
    )
}

export default TodoList
