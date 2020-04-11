import React from 'react';

const Todo = (props) =>{
    console.log('todo in todo component',props)
    return(
        <div>
            <p>{props.item}</p>
        </div>
    )
}

export default Todo;