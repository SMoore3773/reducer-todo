import React, {useState, useReducer} from 'react';
import {initialToDoState, todoReducer, todoState} from '../reducers/TodoReducer';
import Todo from './Todo';

const TodoList = () =>{

    const [todoState, dispatch] = useReducer( initialToDoState, todoReducer );
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = e => {
        setNewTodo(e.target.value);
    }
    console.log('initialtodostate in todolist',initialToDoState)
    console.log('todostate in todolist', todoState)
    console.log(todoState.todoList)
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
                    dispatch({type: 'ADD_TODO'})
                }}
                >Add ToDo</button>
            </form>
            <div>
                {/* {todoState.todoList.map(todo =>{
                    <Todo
                    key={todo.id}
                    item={todo.item}
                    />
                })} */}
            </div>
        </div>
    )
}
export default TodoList;