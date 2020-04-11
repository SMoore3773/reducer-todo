export const initialToDoState ={
   
       todoList: [ {item:'make a todo',
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
            console.log('todolist copy in todoreducer', todoListCopy)
            //sends info in payload to reverse id spesific completed bool
            // use id to select specific todo to be able to toggle the completed flag
            todoListCopy.forEach(e => {
                if(e.id === action.payload){
                    e.completed = !e.completed;
                }
                return { todoList: todoListCopy}
            });
            
        case 'ADD_TODO':
            //expecting new task name in payload, should be returning a copy of the state array with a new todo object
            // return { todolist:[...initialToDoState, action.payload]}
            todoListCopy.push(createTodo(action.payload))
            return{
                todoList:todoListCopy
            };
        default:
                return state;
    }
}
