export const setTodoList = todo =>({
    type:'SET_CURRENT_TODOLIST',
    payload:todo
});

export const addTodoList = (todoList,item) =>({
    type:'ADD_CURRENT_TODOLIST',
    payload:[
        ...todoList,
        item
    ]
})
        