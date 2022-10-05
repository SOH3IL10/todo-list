import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: { mode: 'light' },
    reducers: {
        changeTheme(state, action) {
            state.mode = action.payload
            localStorage.setItem('theme', action.payload)
        }
    }
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer;