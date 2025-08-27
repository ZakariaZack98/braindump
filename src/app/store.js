import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counters/counterSlice'

const store = configureStore({
  reducer: {
    fruitCounter: counterReducer
  }
})

export default store;

//? store only needs the reducer function