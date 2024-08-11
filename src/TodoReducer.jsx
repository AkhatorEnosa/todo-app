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
        deleteTodo: (state, action) => {
            const {id} = action.payload
            const findTodo = state.find(todo => todo.id == id)

            if(findTodo) {
                const remainingTodos = state.filter(todo => todo.id !== id)
                console.log(remainingTodos)
                return remainingTodos
            }
        }
    }
})

export const { createTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer