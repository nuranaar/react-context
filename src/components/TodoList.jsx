import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoContext } from '../contexts';

function TodoList() {
    const context = useContext(TodoContext);
    const list = context.list;
    return (
        <ul>
            {
                list.map((item, index) =>
                    <TodoItem key={index} item={item} />
                )
            }
        </ul>
    )
}

export default TodoList
