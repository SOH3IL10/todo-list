import { createEntityAdapter, createSlice, nanoid } from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter()

const initialState = todosAdapter.getInitialState()

export const {
    selectIds: selectTodoIds,
    selectById: selectTodoById,
    selectAll: selectAllTodos
} = todosAdapter.getSelectors(state => state.todos)

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            todosAdapter.addOne(state, {
                id: nanoid(),
                body: action.payload,
                completed: false
            })
        },
        deleteTodo: (state, action) => {
            todosAdapter.removeOne(state, action.payload)
        },
        deleteAllTodos: (state) => {
            todosAdapter.removeAll(state)
        },
        updateTodo: (state, action) => {
            todosAdapter.updateOne(state, action.payload)
        }
    }
})

export const {
    addTodo,
    deleteTodo,
    deleteAllTodos,
    updateTodo
} = todosSlice.actions;

export default todosSlice.reducer;