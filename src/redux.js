import { configureStore, createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [
    { id: 1, text: 'shopping', done: false },
    { id: 2, text: 'housework', done: true }
  ],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        done: false,
        text: action.payload
      }
      state.push(newTask);
    },
    toggleTask: (state, action) => {
      const task = state.find(t => t.id === action.payload);
      task.done = !task.done;
    },
    deleteTask: (state, action) => {
      state = state.filter(t => t.id !== action.payload);
      return (state);
    }
  }
});

// i create the store with my reducers on the 'todo' slice

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  }
});

// i can create an action creator

// export function createToggle(id) {
//   return ({
//     type: 'todo/toggleTask',
//     payload: id
//   });
// };

// but i dont need it i can export all function with redux

export const { addTask, deleteTask, toggleTask } = todoSlice.actions;

