import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/usersSlice";
import courseReducer from "../features/courses/coursesSlice";
import purchaseReducer from "../features/purchases/purchasesSlice";
import datePickerReducer from "../features/datePicker/datePickerSlice";
import searchBarReducer from "../features/searchBar/searchBarSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    courses: courseReducer,
    purchases: purchaseReducer,
    datePicker: datePickerReducer,
    search: searchBarReducer,
  },
});

export default store;
