import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Todo from "../components/interfaces/Task";

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1);
    },
    editTodo: (state, action: PayloadAction<{ index: number; todo: Todo }>) => {
      const { index, todo } = action.payload;
      state.todos[index] = todo;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
