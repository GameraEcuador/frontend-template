import { createSlice } from "@reduxjs/toolkit";

export interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
}

interface InitialState {
  users: User[];
}

const initialState: InitialState = {
  users: [
    {
      id: "1",
      name: "Juan",
      lastName: "Pérez",
      email: "juan.perez@example.com",
    },
  ],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    onCrateUser: (state: InitialState, action: { payload: User }) => {
      state.users.push(action.payload);
    },
    onSetUsers: (state: InitialState, action: { payload: User[] }) => {
      state.users = action.payload;
    },
    onUpdateUser: (state: InitialState, action: { payload: User }) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user,
      );
    },
    onDeleteUser: (state: InitialState, action: { payload: string }) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { onCrateUser, onSetUsers, onUpdateUser, onDeleteUser } =
  usersSlice.actions;

export default usersSlice.reducer;
