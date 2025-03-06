import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAction } from "../api/todoApi";
import { IState } from "@/shared/config/types";



const initialState:IState = {
    todos: [],
    local: {
        inp: '',
    },
    status: null,
    error: null,
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setInput: (state, action:PayloadAction<string>) =>{
            state.local.inp = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAction.fulfilled, (state, action) => {
            state.todos = action.payload
        })
    },
});
export const {setInput} = todoSlice.actions;
export default todoSlice.reducer;