import CardList from '../../todo.json'

const INITIAL_STATE = {
    todoList:CardList
}

const todoReducer = (state = INITIAL_STATE, action)=> {
    switch(action.type){
        case "SET_CURRENT_TODOLIST":
            return {
                ...state,
                todoList:action.payload
            }
        default:
            return state;
    }
}

export default todoReducer;