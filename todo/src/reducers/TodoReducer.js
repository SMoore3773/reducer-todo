export const initialToDoState ={
   
       todoList: [ ]
    
};

export const todoReducer = (state,action) => {
   console.log('state in reducer', state);
   console.log('action in reducer', action);
   
   function createTodo(task){
    return{
        item:task,
        completed: false,
        id: Date.now()
    }
   }

    switch(action.type){
        case 'TOGGLE_DONE':
            //sends info in payload to reverse id spesific completed bool
            return{
                ...state,
                completed: !state.complete
            };
        case 'ADD_TODO':
            //expecting new task name in payload, should be returning a copy of the state array with a new todo object
            const todoListCopy = state.todoList;
            todoListCopy.push(createTodo(action.payload))
            return{
                todoList:todoListCopy
            };
        default:
                return state;
    }
}
