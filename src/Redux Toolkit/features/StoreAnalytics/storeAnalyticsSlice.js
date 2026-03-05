import { createSlice } from "@reduxjs/toolkit";
import { getStoreOverview, getSalesTreds, getMonthlySales, getDailySales, getSalesByCategory, getSalesByPaymentMethod, getSalesByBranch, getPaymentBreakdown, getBranchPerformance, getStoreAlerts } from "./storeAnalyticsthunk";

const initialState = {

  storeOverview: null,

  salesTrends: null,
  monthlySales: [],
  dailySales: [],

  salesByCategory: [],
  salesByPaymentMethod: [],
  paymentBreakdown: [],


  salesByBranch: [],
  branchPerformace: null,

  storeAlerts: null,

  loading: false,
  error: null,

};

const storeAnalyticesSlice = createSlice({
  name: "storeAnalytics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStoreOverview.pending, (state) => {
        state.loading = true
      })
      .addCase(getStoreOverview.fulfilled, (state, action) => {
        state.loading = false;
        state.storeOverview = action.payload
      })
      .addCase(getStoreOverview.rejected, (state, action) => {

        state.loading = false,
          state.error = action.payload

      })


      .addCase(getSalesTreds.pending, (state) => {
        state.loading = true
      })
      .addCase(getSalesTreds.fulfilled, (state, action) => {
        state.loading = false;
        state.storeOverview = action.payload
      })
      .addCase(getSalesTreds.rejected, (state, action) => {

        state.loading = false,
          state.error = action.payload

      })
      .addCase(getMonthlySales.pending, (state) => {
        state.loading = true
      })
      .addCase(getMonthlySales.fulfilled, (state, action) => {
        state.loading = false;
        state.storeOverview = action.payload
      })
      .addCase(getMonthlySales.rejected, (state, action) => {

        state.loading = false,
          state.error = action.payload

      })



      .addCase(getDailySales.pending, (state) => {
        state.loading = true
      })
      .addCase(getDailySales.fulfilled, (state, action) => {
        state.loading = false;
        state.storeOverview = action.payload
      })
      .addCase(getDailySales.rejected, (state, action) => {

        state.loading = false,
          state.error = action.payload

      })


      .addCase(getSalesByCategory.pending, (state) => {
        state.loading = true
      })
      .addCase(getSalesByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.storeOverview = action.payload
      })
      .addCase(getSalesByCategory.rejected, (state, action) => {

        state.loading = false,
          state.error = action.payload

      })


      .addCase(getSalesByPaymentMethod.pending, (state) => {
        state.loading = true
      })
      .addCase(getSalesByPaymentMethod.fulfilled, (state, action) => {
        state.loading = false;
        state.storeOverview = action.payload
      })
      .addCase(getSalesByPaymentMethod.rejected, (state, action) => {

        state.loading = false,
          state.error = action.payload

      })


      .addCase(getSalesByBranch.pending, (state) => {
        state.loading = true
      })
      .addCase(getSalesByBranch.fulfilled, (state, action) => {
        state.loading = false;
        state.storeOverview = action.payload
      })
      .addCase(getSalesByBranch.rejected, (state, action) => {

        state.loading = false,
          state.error = action.payload

      })
      .addCase(getPaymentBreakdown.pending, (state) => {
        state.loading = true
      })
      .addCase(getPaymentBreakdown.fulfilled, (state, action) => {
        state.loading = false;
        state.storeOverview = action.payload
      })
      .addCase(getPaymentBreakdown.rejected, (state, action) => {

        state.loading = false,
          state.error = action.payload

      })
      .addCase(getBranchPerformance.pending, (state) => {
        state.loading = true
      })
      .addCase(getBranchPerformance.fulfilled, (state, action) => {
        state.loading = false;
        state.storeOverview = action.payload
      })
      .addCase(getBranchPerformance.rejected, (state, action) => {

        state.loading = false,
          state.error = action.payload

      })
      .addCase(getStoreAlerts.pending, (state) => {
        state.loading = true
      })
      .addCase(getStoreAlerts.fulfilled, (state, action) => {
        state.loading = false;
        state.storeOverview = action.payload
      })
      .addCase(getStoreAlerts.rejected, (state, action) => {

        state.loading = false,
          state.error = action.payload

      })
  }
})
export default storeAnalyticesSlice.reducer