import React, {useState, useReducer} from 'react';
import {initialToDoState, todoReducer} from '../reducers/TodoReducer';
import Todo from './Todo';
import TodoForm from './TodoForm'

const TodoList = () =>{

    const [todoState, dispatch] = useReducer(todoReducer, initialToDoState );
    // const [newTodo, setNewTodo] = useState('');

    // function handleChange(e){
    //     setNewTodo(e.target.value);
    // }
    // function handleSubm(e){
    //     e.preventDefault();
    //     dispatch({type:'ADD_TODO', payload:'' })

    // }
    console.log('initialtodostate in todolist',initialToDoState)
    console.log('todostate.todolist in todolist', todoState.todoList)
    // console.log(todoState.todoList)
    return(
        <div>
            <TodoForm dispatch = {dispatch}/>
            <div>
                {todoState.todoList.map(todo =>{
                    return(
                    <Todo
                    key={todo.id}
                    item={todo.item}
                    onClick={ id=> dispatch({type: 'TOGGLE_DONE', payload: id})}
                    />
                    )
                })}
            </div>
        </div>
    )
}
export default TodoList;