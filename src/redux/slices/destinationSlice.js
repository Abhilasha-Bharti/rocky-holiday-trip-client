import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDestinations } from "@/services/api/destinationApi";

export const getDestinations = createAsyncThunk(
  "destinations/getDestinations",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchDestinations();
      return res;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const destinationSlice = createSlice({
  name: "destinations",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDestinations.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDestinations.fulfilled, (state, action) => {
  state.loading = false;
  state.data = action.payload || []; // ✅ safe
})
      .addCase(getDestinations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default destinationSlice.reducer;