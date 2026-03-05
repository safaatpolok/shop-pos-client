import { createSlice } from "@reduxjs/toolkit";
import { endShift, getCurrentshiftProgress, getShiftByBranch, getShiftByCashier, getShiftById, getShiftReportByDate, startShift } from "./ShiftRepoerThunk";


const initialState = {
  shift: [],
  currentShift: null,
  selectedShift: null,
  shiftByCashier: [],
  shiftByBranch: [],
  loading: false,
  error: null,
}

const shiftReportSlice = createSlice({
  name: "shiftReport",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(startShift.pending, (state) => {
        state.loading = true
      })
      .addCase(startShift.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedShift = action.payload;
        state.shift.push(action.payload)
      })
      .addCase(startShift.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(endShift.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(endShift.fulfilled, (state, action) => {
        state.loading = false;

        // Update current shift
        if (state.currentShift && state.currentShift.id === action.payload.id) {
          state.currentShift = action.payload;
        }

        // Update shifts array
        const index = state.shifts.findIndex(
          shift => shift.id === action.payload.id
        );

        if (index !== -1) {
          state.shifts[index] = action.payload;
        }
      })
      .addCase(endShift.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(getCurrentshiftProgress.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getCurrentshiftProgress.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedShift = action.payload;
        state.shift.push(action.payload)
      })
      .addCase(getCurrentshiftProgress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })



      .addCase(getShiftReportByDate.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getShiftReportByDate.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedShift = action.payload;
        state.shift.push(action.payload)
      })
      .addCase(getShiftReportByDate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })



      .addCase(getShiftByCashier.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getShiftByCashier.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedShift = action.payload;
        state.shift.push(action.payload)
      })
      .addCase(getShiftByCashier.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(getShiftByBranch.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getShiftByBranch.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedShift = action.payload;
        state.shift.push(action.payload)
      })
      .addCase(getShiftByBranch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getShiftById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getShiftById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedShift = action.payload;
        state.shift.push(action.payload)
      })
      .addCase(getShiftById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

  }
})
export default shiftReportSlice.reducer;
