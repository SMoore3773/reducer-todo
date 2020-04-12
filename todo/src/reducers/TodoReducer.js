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
    const sprdlist = {...state}
    console.log('sprdlist in todoreducer',sprdlist)
//    console.log('in reducer state', state)
//    console.log('in reducer action', action)
   function createTodo(task){
    return{
        item:task,
        completed: false,
        id: Date.now()
    }
   }

    switch(action.type){

        case 'ADD_TODO':

            //expecting new task name in payload, should be returning a copy of the state array with a new todo object
            return{
                ...state,
                todoList:[
                    ...state.todoList,
                    {item: action.payload,
                    completed: false}
                ]
            }
            // todoListCopy.push(createTodo(action.payload))
            // return{todoList: todoListCopy};

        case 'TOGGLE_DONE':
            console.log('state.todolist in todo reducer',state.todoList)
            console.log('todolist copy in todoreducer', todoListCopy)
            //sends info in payload to reverse id spesific completed bool
            // use id to select specific todo to be able to toggle the completed flag
            
            // todoListCopy.forEach(item => {
            //     console.log(item)
            //     if(item.id === action.payload){
            //         item.completed = !item.completed;
            //     } 
            // });
            // return{todoList: todoListCopy};

            return {
                ...state,
                todoList: state.todoList.map(item =>{
                    if(item.id === action.payload) {
                        item.completed = true;
                    }
                    return item;
                })
            }
            case 'TOGGLE_REDO':
            return{
                ...state,
                todoList: state.todoList.map(item => {
                    if(item.id === action.payload){
                    item.completed = false;
                    }
                    return item;
                })
            }
      
        default:
                return state;
    }
}
