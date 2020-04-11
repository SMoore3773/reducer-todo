import React, {useState, useReducer} from 'react';
import {initialToDoState, todoReducer} from '../reducers/TodoReducer';
import Todo from './Todo';

const TodoList = () =>{

    const [todoState, dispatch] = useReducer(todoReducer, initialToDoState );
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = e => {
        setNewTodo(e.target.value);
    }
    console.log('initialtodostate in todolist',initialToDoState)
    console.log('todostate.todolist in todolist', todoState.todoList)
    // console.log(todoState.todoList)
    return(
        <div>
            <form>
            <input
                    type='text'
                    name='todo'
                    value={newTodo}
                    onChange={handleAddTodo}
                />
                <button
                onClick={() => {
                    dispatch({type: 'ADD_TODO', payload:'' })
                }}
                >Add ToDo</button>
            </form>
            <div>
                {todoState.todoList.map(todo =>{
                    return(<Todo
                    item={todo.item}
                    onClick={ id=> dispatch({type: 'TOGGLE_DONE', payload: id})}
                    />)
                })}
            </div>
        </div>
    )
}
export default TodoList;