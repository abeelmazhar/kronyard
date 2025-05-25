import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const submitForm = createAsyncThunk(
  "form/submitForm",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://reqres.in/api/users",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const formSlice = createSlice({
  name: "form",
  initialState: {
    loading: false,
    response: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.response = null;
      })
      .addCase(submitForm.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default formSlice.reducer;
