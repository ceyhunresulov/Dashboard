import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiRoot } from "../../apiRoot";

export const fetchCourses = createAsyncThunk("getCourses", async () => {
  try {
    const response = await axios.get(`${apiRoot}/courses`);

    return response.data;
  } catch (error) {
    console.error("error");
  }
});

const initialState = {
  courses: [],
  isLoading: false,
  error: null,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default coursesSlice.reducer;
