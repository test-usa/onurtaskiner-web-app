// src/redux/features/venue/venueSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { Venue } from "@/redux/types/venue.type";

interface VenueState {
  currentVenue: Venue | null;
  filterStatus: string | null;
}

const initialState: VenueState = {
  currentVenue: null,
  filterStatus: null,
};

const venueSlice = createSlice({
  name: "venue",
  initialState,
  reducers: {
    setCurrentVenue: (state, action) => {
      state.currentVenue = action.payload;
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { setCurrentVenue, setFilterStatus } = venueSlice.actions;
export default venueSlice.reducer;
