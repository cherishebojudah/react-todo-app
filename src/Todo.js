import React, { useState } from 'react';
import TodoList from './TodoList';

function TodoApp (props) {
    const [state, setState] = useState({items: [], text: ''});

    const handleChange = (e) => {
        setState({text: e.target.value});
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (state.text.length === 0) {
            return;
        }
        const newItem = {
            text: state.text,
            id: Date.now()
        };

        setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }


    return(
    
        <div>
            <h3>TODO</h3>
            <p>Hey, make a todo list!</p>
            <TodoList props={props.state.items}/>
            <form onSubmit={handleClick}>
                <label htmlFor='new-todo'>What needs to be done?</label>
                <input id='new-todo' onChange={handleChange} value={state.text} />
            </form>
            <button>Add Number {props.state.items.length + 1}</button>
        </div>
    )
}

export default TodoApp;