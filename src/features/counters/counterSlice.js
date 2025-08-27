import { createSlice } from "@reduxjs/toolkit";

//* declare the initialstate
const initialState = [
    {
      name: "apple",
      value: 2,
    },
    {
      name: "banana",
      value: 5,
    },
    {
      name: "orange",
      value: 3,
    },
  ]

const counterSlice = createSlice({
  //* declaring name of the slice
  name: 'fruitCounter',
  //* declaring the inital state of the slice
  initialState,
  //* introducing state changing logic corresponded the actions
  reducers: {
    increment: (state, action) => {
      const matchedIdx = state.findIndex(fruit => fruit.name === action.payload.name);
      console.log(matchedIdx)
      if(matchedIdx != -1) {
        state[matchedIdx].value++
      }
    },
    decrement: (state, action) => {
      const matchedIdx = state.findIndex(fruit => fruit.name === action.payload.name);
      if(matchedIdx != -1) {
        state[matchedIdx].value--
      }
    },
    sum: (state, action) => {
      return state.reduce((a, b) => a.value + b.value)
    }
  }
});

//* exporting the reducer function which was created by the function we provided at createSlice()
export default counterSlice.reducer;

//* destructuring and exporting the actions
export const {increment, decrement, sum} = counterSlice.actions;