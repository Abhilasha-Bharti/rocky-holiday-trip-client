import { configureStore } from "@reduxjs/toolkit";
import destinationReducer from "@/redux/slices/destinationSlice"

const store = configureStore({
  reducer: {
    destinations: destinationReducer,
  },
});

export default store;