import React from 'react'

function TodoItem({ item }) {
    return (
        <li >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span>{item.date}</span>
        </li>
    )
}

export default TodoItem
