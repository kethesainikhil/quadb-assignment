const todos = [
    {   id:1,
        todo:"title",
        isCompleted:false
    },
    {   id:2,
        todo:"book",
        isCompleted:false
    },
    {   id:3,
        todo:"fake",
        isCompleted:false
    }
]

const updateTodo = (id,todo) => {
    const newTodos = todos.map((presentTodo)=>presentTodo.id === id ? todo : presentTodo)

}
const deleteTodo = (id) => {
    const newTodos = todos.filter((presentTodo)=> presentTodo.id !== id )
    console.log(newTodos)

}
const toggleComplete = (id) => {
    const newTodos = todos.map((presentTodo)=>{
        if(presentTodo.id === id){
            presentTodo.isCompleted = !presentTodo.isCompleted;
        }
    })
    console.log(todos)
}
updateTodo(3,{  id:4,
        todo:"naam rako",
        isCompleted:true
});
deleteTodo(2);
toggleComplete(3);
