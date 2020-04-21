import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts';

function Form() {
    const { actions } = useContext(TodoContext);
    const [formState, setstate] = useState({ title: '', desc: '' });
    const onChangeInput = (event) => {
        setstate({ ...formState, [event.target.name]: event.target.value })
    }
    const onSubmitForm = (event) => {
        event.preventDefault();
        actions.addNewTodo(formState);
        setstate({ title: '', desc: '' })
    }
    return (
        <form onSubmit={onSubmitForm}>
            <div>
                <label htmlFor="title">Task title :</label>
                <input name='title' id="title" onChange={onChangeInput} value={formState['title']} />
            </div>
            <div>
                <label htmlFor="desc">Task description :</label>
                <input name='desc' id="desc" onChange={onChangeInput} value={formState['desc']} />
            </div>
            <button type='submit'>Add new</button>
        </form>
    )
}

export default Form
