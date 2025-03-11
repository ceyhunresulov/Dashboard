import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiRoot } from "../../apiRoot";

export const fetchPurchases = createAsyncThunk("getPurchases", async () => {
  try {
    const response = await axios.get(`${apiRoot}/purchases`);

    return response.data;
  } catch (error) {
    console.error("error");
  }
});

const initialState = {
  purchases: [],
  isLoading: false,
  error: null,
};

const purchasesSlice = createSlice({
  name: "purchases",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPurchases.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPurchases.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.purchases = action.payload;
      })
      .addCase(fetchPurchases.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default purchasesSlice.reducer;
