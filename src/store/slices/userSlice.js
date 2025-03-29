import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsersApi, deleteUserApi, updateUserApi } from "../../services/api";

// Async thunk to fetch users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async (page) => {
  const response = await fetchUsersApi(page);
  return response;
});

// Async thunk to delete a user by ID
export const deleteUserById = createAsyncThunk("users/deleteUser", async (id) => {
  await deleteUserApi(id);
  return id;
});

// Async thunk to update a user
export const updateUser = createAsyncThunk("users/updateUser", async (updatedUser) => {
  const response = await updateUserApi(updatedUser.id, updatedUser);
  return response;
});

// Create the user slice
const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [], // User list
    page: 1, // Current page
    totalPages: 1, // Total pages
    loading: false, // Loading state
    error: null, // Error message
  },
  reducers: {
    // Reducer to set the current page
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data; // Update user data
        state.totalPages = action.payload.totalPages; // Update total pages
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Set error message
      })
      // Delete user
      .addCase(deleteUserById.fulfilled, (state, action) => {
        state.data = state.data.filter((user) => user.id !== action.payload); // Remove deleted user
      })
      // Update user
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.data.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload; // Update user data
        }
      });
  },
});

// Export actions and reducer
export const { setPage } = userSlice.actions;
export default userSlice.reducer;
