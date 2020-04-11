import React from 'react';

const TodoForm = props => {
    return(
        <div>
            <form>
                <input
                    type='text'
                    name='todo'
                    value={props}
                />
                <button>Add ToDo</button>
            </form>
        </div>
    )
}

export default TodoForm;