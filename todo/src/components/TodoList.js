import React, {useReducer} from 'react';
import {initialToDoState, todoReducer} from '../reducers/TodoReducer';
import Todo from './Todo';
import TodoForm from './TodoForm'

const TodoList = () =>{

    const [todoState, dispatch] = useReducer(todoReducer, initialToDoState );
   function clearDone(){
       dispatch({type:'CLEAR_DONE'});
   }
    console.log('initialtodostate in todolist',initialToDoState)
    console.log('todostate.todolist in todolist', todoState.todoList)
 
    return(
        <div>
            <TodoForm dispatch = {dispatch}/>
            <div>
                {todoState.todoList.map(todo =>{
                    return(
                    <Todo
                    // key={todo.id}
                    item={todo}
                    dispatch={dispatch}
                    />
                    )
                })}
            </div>
            <button onClick={clearDone}>Clear Done</button>
        </div>
    )
}
export default TodoList;