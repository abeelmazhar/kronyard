import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("https://randomuser.me/api/?results=10");
  return response.data.results;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      // })
      // .addCase(fetchUsers.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.data = action.payload;
      // })
      // .addCase(fetchUsers.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message || undefined;
      // });
  },
});

export default userSlice.reducer;
