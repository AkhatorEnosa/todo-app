import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { updateTodo } from "./TodoReducer"


const Update = () => {

const dispatch = useDispatch()
const navigate = useNavigate();
const {id} = useParams()
const todos = useSelector((state) => state.todos)

    const existingUser = todos.filter(todo => todo.id == id)
    const {todoItem} = existingUser[0];

const [todoUpdate, setTodoUpdate] = useState(todoItem)

const handleEditTodo = () => {
    dispatch(updateTodo({
        id: id,
        todoItem: todoUpdate,
    }))

    navigate('/')
}

  return (
    <div className="absolute w-screen h-screen flex justify-center items-center top-0 left-0 bg-black/50 backdrop-blur-lg ">
        <div className="w-80 flex flex-col gap-5">
            <textarea
                type="text"
                value={todoUpdate}
                placeholder="Enter todo..."
                className="textarea  w-full" onChange={e => setTodoUpdate(e.target.value)}/>
            <div className="w-full flex justify-center gap-5">
                <Link to='/' className="btn btn-error text-white">Cancel</Link>
                <button className="btn btn-success text-white" onClick={handleEditTodo}>Update</button>
            </div>
        </div>
    </div>
  )
}

export default Update