import { createSlice } from "@reduxjs/toolkit";
const userStore = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducer: {
    getUsers: () => {},
    addUsers: () => {},
    deleteUsers: () => {},

    setUsers: (state, action) => {
      return {
        ...state,
        users: action.payload,
      };
    },
  },
});

export const { getUsers, setUsers, addUsers, deleteUsers } = userStore.actions;

export default userStore.reducer;
