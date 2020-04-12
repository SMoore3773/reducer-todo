import React from 'react';

const Todo = ({item, dispatch}) =>{
    console.log('item in todo component',item)
    console.log(item.completed)
   const classes = (item.completed) ? 'done' : 'active';
   function handleClick(){
       console.log('item in todo', item)
       if(item.completed){
           dispatch({type: 'TOGGLE_REDO', payload: item.id});
       }else {
           dispatch({type: 'TOGGLE_DONE', payload: item.id})
       }
   };

    return(
        <div className={'todo '+ classes} onClick={handleClick}  >
            <p>{item.item}</p>
        </div>
    )
}

export default Todo;