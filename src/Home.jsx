import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createTodo, deleteTodo } from "./todoReducer"

function Home() {
    const todos = useSelector((state) => state.todos)
    const [todoInput, setTodo] = useState('')
    const [error, setError] = useState('')

    const dispatch = useDispatch()

    const handleInput = (e) => {
        setTodo(e.target.value)
    }

    const handleAddTodo = () => {
        if (todoInput !== '') {
            dispatch(createTodo({
                id: todos.length < 1 ? 1 : todos[todos.length - 1].id + 1,
                todoItem: todoInput
            }))
            setError('')
        } else {
            setError('No todo entered')
        }
    }

    const handleDelete = (todoId) => {
        dispatch(deleteTodo({
            id: todoId
        }))
    }

  return (
    <div className="flex flex-col py-20 gap-10 items-center">
        <h2 className="text-3xl">Todo App with Redux</h2>
        <div className="w-full flex gap-2">
            <input
                type="text"
                placeholder="Enter todo..."
                className="input input-bordered input-md w-full" onChange={handleInput}/>
            <button className="btn btn-primary" onClick={handleAddTodo}>Add</button>
        </div>
        <p className={error !== '' ? "bg-red-100 text-red-500 text-sm w-full text-center p-3 rounded-lg" : "hidden"}>{error}</p>
        {todos.length > 0 ? <div className="w-full flex flex-col gap-2">
            {todos.map((todo, index)=> (
                
            <div key={index} className="flex justify-between items-center gap-2 py-2 border-b-[1px] border-black/10">
                <input type="checkbox" className="checkbox"/>
                <span>{todo.todoItem}</span>
                <button className="btn btn-error" onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
            ))}
        </div> : <p className="mt-20 text-black/50">No todos yet</p>}
    </div>
  )
}

export default Home
