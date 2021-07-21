import React, { useState } from 'react';

function TodoApp () {
    const [state, setState] = useState({items: [], text: ''});

    const handleChange = (e) => {
        setState({text: e.target.value});
    }


    return(
        <div>
            <h3>TODO</h3>
            <p>Hey, let's make a todo list!</p>
            <form >
                <label htmlFor='new-todo'>What needs to be done?</label>
                <input id='new-todo' onChange={handleChange} value={state.text} />
            </form>
            <button>Add Number</button>
        </div>
    )
}

export default TodoApp;