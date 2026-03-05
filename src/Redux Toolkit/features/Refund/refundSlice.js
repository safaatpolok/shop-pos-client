import { createSlice } from "@reduxjs/toolkit";
import { createdRefunds, getAllRefunds, getRefundsByBranch, getRefundsByCashier, getRefundsByCashierAndDateRange, getRefundsById, getRefundsByShift } from "./refundThunk";


const initialState = {
  refunds: [],
  refundsByCashier: [],
  refundsByBranch: [],
  refundsByShift: [],
  refundsByDateRange: [],
  selectedRefund: null,
  loading: false,
  error: null,
};

const refundSlice = createSlice({

  name: "refund",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(createdRefunds.pending, (state) => {
        state.loading = true;
      })
      .addCase(createdRefunds.fulfilled, (state, action) => {
        state.loading = false;
        state.refunds.push(action.payload);
      })
      .addCase(createdRefunds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //GetAllRefund

      .addCase(getAllRefunds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllRefunds.fulfilled, (state, action) => {
        state.loading = false;
        state.refunds = action.payload;
      })
      .addCase(getAllRefunds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //Get Refunds by cashier

      .addCase(getRefundsByCashier.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRefundsByCashier.fulfilled, (state, action) => {
        state.loading = false;
        state.refunds = action.payload;
      })
      .addCase(getRefundsByCashier.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //Get Refunds by Branch

      .addCase(getRefundsByBranch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRefundsByBranch.fulfilled, (state, action) => {
        state.loading = false;
        state.refunds = action.payload;
      })
      .addCase(getRefundsByBranch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //Get Refunds by shift

      .addCase(getRefundsByShift.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRefundsByShift.fulfilled, (state, action) => {
        state.loading = false;
        state.refunds = action.payload;
      })
      .addCase(getRefundsByShift.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //Get Refunds by Cashier and date range

      .addCase(getRefundsByCashierAndDateRange.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRefundsByCashierAndDateRange.fulfilled, (state, action) => {
        state.loading = false;
        state.refunds = action.payload;
      })
      .addCase(getRefundsByCashierAndDateRange.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //Get Refunds by by ID

      .addCase(getRefundsById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRefundsById.fulfilled, (state, action) => {
        state.loading = false;
        state.refunds = action.payload;
      })
      .addCase(getRefundsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }

});

export default refundSlice.reducer;