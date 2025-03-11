import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lineChartDate: new Date(),
};

const datePickerSlice = createSlice({
  name: "datePicker",
  initialState,
  reducers: {
    setLineChartDate: (state, action) => {
      state.lineChartDate = action.payload;
    },
  },
});

// Actions və Reducer export
export const { setLineChartDate } = datePickerSlice.actions;
export default datePickerSlice.reducer;
