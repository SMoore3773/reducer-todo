import React, {useState} from 'react';

function TodoForm({dispatch}) {

    const [newTodo, setNewTodo] = useState('');

    function handleChange(e){
        setNewTodo(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch({type:'ADD_TODO', payload: newTodo });
        setNewTodo('');
    }

    
    return(
        <div>
           <form onSubmit={handleSubmit}>
            <input
                    type='text'
                    value={newTodo}
                    onChange={handleChange}
                />
                <button type= 'submit'>Add ToDo</button>
            </form>
        </div>
    )
}

export default TodoForm;