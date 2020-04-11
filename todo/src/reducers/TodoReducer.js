export const initialToDoState ={
    todo: 'Add a new ToDo',
    complete: false
};

export const todoReducer = (state,action) => {
    if (action.type === 'TOGGLE_DONE') {
        return {
            ...state,
            complete: !state.complete
        };
    }
    return state;
}