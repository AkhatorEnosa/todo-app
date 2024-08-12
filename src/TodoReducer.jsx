import { createSlice } from "@reduxjs/toolkit";
// import { listItems } from "./Data";

const initialState = []

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo: (state, action) => {
            state.push(action.payload)
        },
        checkTodo: (state, action) => {
            const {id} = action.payload
            const done = state.map(todo => todo.id === id ? {...todo, done: !todo.done } : {...todo, done: todo.done })
            return done
        },
        updateTodo: (state, action) => {
            const {id, todoItem} = action.payload
            const findTodo = state.find(todo => todo.id == id)

            if(findTodo) {
                findTodo.todoItem = todoItem
            }
        },
        deleteTodo: (state, action) => {
            const {id} = action.payload
            const findTodo = state.find(todo => todo.id == id)

            if(findTodo) {
                const remainingTodos = state.filter((todo) => todo.id !== id)
                console.log(remainingTodos)
                return remainingTodos
            }
        }
    }
})

export const { createTodo, deleteTodo, checkTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer