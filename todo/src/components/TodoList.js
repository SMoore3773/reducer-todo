import React, {useReducer} from 'react';
import {initialToDoState, todoReducer} from '../reducers/TodoReducer';
import Todo from './Todo';
import TodoForm from './TodoForm'

const TodoList = () =>{

    const [todoState, dispatch] = useReducer(todoReducer, initialToDoState );
   
    console.log('initialtodostate in todolist',initialToDoState)
    console.log('todostate.todolist in todolist', todoState.todoList)
 
    return(
        <div>
            <TodoForm dispatch = {dispatch}/>
            <div>
                {todoState.todoList.map(todo =>{
                    return(
                    <Todo
                    key={todo.id}
                    item={todo}
                    dispatch={dispatch}
                    />
                    )
                })}
            </div>
        </div>
    )
}
export default TodoList;