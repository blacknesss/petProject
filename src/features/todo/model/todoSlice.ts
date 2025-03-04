import { createSlice } from "@reduxjs/toolkit";
import { fetchAction } from "../api/todoApi";
import { IState } from "@/shared/config/types";



const initialState:IState = {
    todos: [],
    status: null,
    error: null,
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAction.fulfilled, (state, action) => {
            state.todos = action.payload
        })
    },
});

export default todoSlice.reducer