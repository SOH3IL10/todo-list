import { createSlice } from "@reduxjs/toolkit";

export const statusFilter = {
    All: 'all',
    Active: 'active',
    Completed: 'completed'
}

const initialState = {
    status: statusFilter.All
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeStatusFilter: (state, action) => {
            state.status = action.payload
        }
    }
})

export const { changeStatusFilter } = filterSlice.actions;

export default filterSlice.reducer;