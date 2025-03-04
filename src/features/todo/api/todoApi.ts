import { INote } from "@/shared/config/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAction = createAsyncThunk(
    'todos/fetchTodos',
    async function (_, {rejectWithValue}) {
        try{
            const res = await fetch('http://localhost:3005/todo')
            
            if(!res.ok){
                throw new Error(`server error`)
            }

            const data = await res.json()
            return data

        } catch(error:any){
            return rejectWithValue(error.message);
        }
    }
)

export const postAction = createAsyncThunk(
    'todos/postTodos',
    async function (inp:string, {rejectWithValue}) {
        try{
            const newTask:INote = {
                task: inp,
                complete: false,
            }
            const res = await fetch('http://localhost:3005/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask)
            })
            
            if (!res.ok) {
                throw new Error(`Server error!`);
            }

            const data = await res.json()
            return data
        }catch (e:any){
            return rejectWithValue(e.message)
        }
    }
)