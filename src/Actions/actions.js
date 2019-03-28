export function addTodo(todo){
    return{
        type: "ADD_TODO",
        todocaption: todo
    };
}
export function deleteTodo(id){
    return{
        type: "DEL_TODO",
        id: id
    };
}
export function editTodo(id,todo){
    return{
        type: "EDIT_TODO",
        id : id,
        todocaption:todo
    };
}
export function checkTodo(id){
    return{
        type: "CHECK_TODO",
        id:id
    };
}
export function showAll(){
    return{
        filter:"SHOW_ALL",
        type: ""
    }
}
export function showActive(){
    return{
        filter:"SHOW_ACTIVE",
        type: ""
    }
}
export function showCompleted(){
    return{
        filter:"SHOW_COMPLETED",
        type:""
    }
}
export function showCount(){
    return{
        type:"SHOW_COUNT"
    }
}