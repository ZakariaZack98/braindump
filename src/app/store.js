import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counters/counterSlice'
import postReducer from '../features/posts/postSlice'
import notesReducer from '../features/notes/notesSlice'

const store = configureStore({
  reducer: {
    fruitCounter: counterReducer,
    posts: postReducer,
    notes: notesReducer,
  }
})

export default store;

//? store only needs the reducer function