// create a slice
import { createSlice } from '@reduxjs/toolkit';

export const countSlice= createSlice({
  name:"count",
  initialState:{
    count: 1
  },
  reducers:{
    increaseCount:state=>{
      state.count++;
    },
    deceaseCount:state=>{
      state.count--;
    },
  }
})

export const countActions = countSlice.actions
