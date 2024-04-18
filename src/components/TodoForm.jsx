import { useState } from "react";
import { useTodoContext } from "../contexts";

function TodoForm() {
    
const [todo,setTodo] = useState("");
const {addTodo} = useTodoContext();
const handleSubmit = (e) => {
    e.preventDefault;
    addTodo({todo,isCompleted:false});
    setTodo("");
}

    return (
        <form onSubmit={handleSubmit}  className="flex flex-col">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full flex mx-auto rounded-lg mb-2 border border-black/10 sm:rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                required={true}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-6 hover:bg-green-600 mx-auto py-1 hover:transition-all hover:duration-300 hover:ease-in hover:scale-105 bg-blue-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;