

export const initialToDoState ={
   
       todoList: [ 
            {item: 'Add a new ToDo', completed: false, id:Date.now()}
        ]
    
};

export const todoReducer = (state,action) => {
   
    switch(action.type){
        case 'TOGGLE_DONE':
            return{
                ...state,
                completed: !state.complete
            };
        case 'ADD_TODO':
            return{
                ...state.todoList,
                item: action.payload,
                completed: false
            };
            default:
                return state;
    }
}
