import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkTodo, createTodo, deleteTodo } from "./TodoReducer"
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from "react-icons/ri"

function Home() {
    const todos = useSelector((state) => state.todos)
    const [todoInput, setTodoinput] = useState('')
    // const [checked, setChecked] = useState(false)
    const [error, setError] = useState('')

    const dispatch = useDispatch()

    const handleInput = (e) => {
        setTodoinput(e.target.value)
    }

    const handleDone = (id) => {
        dispatch(checkTodo({
            id
        }))
    }

    const handleAddTodo = () => {
        if (todoInput !== '') {
            dispatch(createTodo({
                id: todos.length < 1 ? 1 : todos[todos.length - 1].id + 1,
                todoItem: todoInput,
                done: false
            }))
            setError('')
        } else {
            setError('No todo entered')
        }
        setTodoinput("")
    }

    const handleDelete = (todoId) => {
        dispatch(deleteTodo({
            id: todoId
        }))
    }

  return (
    <div className="flex flex-col py-20 gap-10 items-center">
        <h2 className="text-3xl">Todo App with Redux</h2>
        <div className="w-96 flex flex-col gap-3 py-4 px-4 justify-center items-center shadow-md rounded-lg">
            <div className="w-full flex gap-2 pb-10 border-b-[1px] border-black/5">
                <input
                    type="text"
                    placeholder="Enter todo..."
                    value={todoInput}
                    className="input input-bordered input-md w-full" onChange={handleInput}/>
                <button className="btn btn-primary" onClick={handleAddTodo}>Add</button>
            </div>
            <p className={error !== '' ? "bg-red-100 text-red-500 text-sm w-full text-center p-3 rounded-lg" : "hidden"}>{error}</p>
            {todos.length > 0 ? <div className="w-full flex flex-col gap-2">
                {todos.map((todo, index)=> (
                    
                <div key={index} className="flex justify-between items-center gap-2 py-2 cursor-pointer" title={!todo.done ? "Click todo item to mark as done" : "Click todo item to mark as undone"} onClick={() => handleDone(todo.id)}>
                    <div className="flex gap-5 capitalize">
                        {!todo.done ? <RiCheckboxBlankCircleLine className="text-2xl"/> : <RiCheckboxCircleFill  className="text-2xl opacity-50"/>} 
                        <span className={todo.done ? "line-through opacity-50" : "opacity-100"}>{todo.todoItem}</span>
                    </div>
                    <button className="btn btn-error text-white" onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
                ))}
            </div> : <p className="mt-20 text-black/50 pb-20">No todos yet</p>}
        </div>
    </div>
  )
}

export default Home
