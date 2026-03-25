import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth: (state = { user: null }, action) => state, // dummy reducer
  },
});

export default store;