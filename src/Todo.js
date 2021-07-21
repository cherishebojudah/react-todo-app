import React from 'react';

function TodoApp () {
    return(
        <div>
            <h3>TODO</h3>
            <p>Hey, let's make a todo list!</p>
            <form >
                <label htmlFor='new-todo'>What needs to be done?</label>
                <input id='new-todo'/>
            </form>
            <button>Add Number</button>
        </div>
    )
}

export default TodoApp;