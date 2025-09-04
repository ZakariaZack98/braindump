import { createSlice } from "@reduxjs/toolkit"
import stat from "daisyui/components/stat"

const initialState = {
  notes: []
}

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload.note)
    },
    removeNote: (state, action) => {
      state.notes = state.notes.filter(note => note.id !== action.payload.id)
    },
    updateNote: (state, action) => {
      const targetIdx = state.notes.findIndex(note => note.id === action.payload.note.id);
      state.notes[targetIdx] = action.payload.note
    }
  }
})

export default noteSlice.reducer;
export const {addNote, removeNote, updateNote} = noteSlice.actions;