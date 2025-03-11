import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Actions və Reducer export
export const { setSearchValue } = searchBarSlice.actions;
export default searchBarSlice.reducer;
