export const initialToDoState ={
   
       todoList: [ {item:'make a todo',
                    completed: false,
                    id: Date.now()},
                    {item:'eat',
                    completed: false,
                    id: Date.now()}
                ]
    
};

export const todoReducer = (state,action) => {
//    console.log('state in reducer', state);
//    console.log('action in reducer', action);
//    console.log(state)
    const todoListCopy = state.todoList;
   
   function createTodo(task){
    return{
        item:task,
        completed: false,
        id: Date.now()
    }
   }

    switch(action.type){

        case 'TOGGLE_DONE':
            console.log('state.todolist in todo reducer',state.todoList)
            //sends info in payload to reverse id spesific completed bool
            // use id to select specific todo to be able to toggle the completed flag
            
            return{
                ...state,
                completed: !state.complete
            };
        case 'ADD_TODO':
            //expecting new task name in payload, should be returning a copy of the state array with a new todo object
            // const todoListCopy = state.todoList;
            todoListCopy.push(createTodo(action.payload))
            return{
                todoList:todoListCopy
            };
        default:
                return state;
    }
}
