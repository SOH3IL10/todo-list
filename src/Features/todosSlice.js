import { createEntityAdapter, createSelector, createSlice, nanoid } from "@reduxjs/toolkit";
import { statusFilter } from "./filterSlice";

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
        },
        clearTodosCompleted: (state, action) => {
            Object.values(state.entities).forEach(todo => {
                if (todo.completed)
                    todosAdapter.removeOne(state, todo.id)
            })
        }
    }
})

export const {
    addTodo,
    deleteTodo,
    deleteAllTodos,
    updateTodo,
    clearTodosCompleted
} = todosSlice.actions;

export default todosSlice.reducer;


const selectFiltredTodos = createSelector(
    selectAllTodos,
    state => state.filters,
    (todos, filters) => {
        const { status } = filters;

        const showAll = status === statusFilter.All
        if (showAll)
            return todos

        const showCompleted = status === statusFilter.Completed
        return todos.filter(todo => {
            return showAll || todo.completed === showCompleted
        })
    }
)

export const selectTodosFiltredIds = createSelector(
    selectFiltredTodos,
    (filtredTodos) => filtredTodos.map(todo => todo.id)
)