
import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
const [todos,setTodos] = useState([]);
const addTodo = (todo) => {
    const newTodos = [{id:Date.now(),...todo},...todos];
    setTodos(newTodos);
}
const updateTodo = (id,todo) => {
    const newTodos = todos.map((presentTodo)=>presentTodo.id === id ? todo : presentTodo)
    setTodos(newTodos);
}
const deleteTodo = (id) => {
    const newTodos = todos.filter((presentTodo)=> presentTodo.id !== id )
    setTodos(newTodos)

}
const toggleComplete = (id) => {
    console.log("id",id)
    setTodos((prev) => prev.map((presentTodo) => (
        presentTodo.id === id ? {...presentTodo,isCompleted :!presentTodo.isCompleted}
        : presentTodo
    )))

}
useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0){
        setTodos(todos);
    }
},[])
useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
},[todos])
console.log(todos)

  return (
<TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}} >
<div className="bg-[#172842] min-w-full min-h-screen w-[1000px] py-8">
                <div className="w-[100%] shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Personal Todo List Website</h1>
                    <div className="mb-4">
                       <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {
                            todos.map((todo)=>(
                                <div key={todo?.id} className='w-full'>
                                    <TodoItem todo={todo} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
</TodoProvider>
  )
}

export default App
