
import { createSlice } from "@reduxjs/toolkit";
import { getDailySalesChart, getTopProductsByQuantity, getTopCashiersByRevenue, getCategoryWiseSalesBreakdown, getTodayOverview, getPaymentBreakdown } from "./BranchAnalyticsThunk";

const initialState = {
  dailySales: [],
  topProducts: [],
  topCashiers: [],
  categorySales: [],
  todayOverview: null,
  paymentBreakdown: [],
  loading: false,
  error: null,

}

const breanchAnalyticsSlice = createSlice({
  name: "brancgAnalytics",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getDailySalesChart.pending, (state) => {
        state.loading = true
      })
      .addCase(getDailySalesChart.fulfilled, (state, action) => {
        state.loading = false,
          state.dailySales = action.payload
      })
      .addCase(getDailySalesChart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })


      .addCase(getTopProductsByQuantity.pending, (state) => {
        state.loading = true
      })
      .addCase(getTopProductsByQuantity.fulfilled, (state, action) => {
        state.loading = false,
          state.dailySales = action.payload
      })
      .addCase(getTopProductsByQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })


      .addCase(getTopCashiersByRevenue.pending, (state) => {
        state.loading = true
      })
      .addCase(getTopCashiersByRevenue.fulfilled, (state, action) => {
        state.loading = false,
          state.dailySales = action.payload
      })
      .addCase(getTopCashiersByRevenue.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })

      .addCase(getCategoryWiseSalesBreakdown.pending, (state) => {
        state.loading = true
      })
      .addCase(getCategoryWiseSalesBreakdown.fulfilled, (state, action) => {
        state.loading = false,
          state.dailySales = action.payload
      })
      .addCase(getCategoryWiseSalesBreakdown.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })


      .addCase(getTodayOverview.pending, (state) => {
        state.loading = true
      })
      .addCase(getTodayOverview.fulfilled, (state, action) => {
        state.loading = false,
          state.dailySales = action.payload
      })
      .addCase(getTodayOverview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })


      .addCase(getPaymentBreakdown.pending, (state) => {
        state.loading = true
      })
      .addCase(getPaymentBreakdown.fulfilled, (state, action) => {
        state.loading = false,
          state.dailySales = action.payload
      })
      .addCase(getPaymentBreakdown.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })
  }

})

export default breanchAnalyticsSlice.reducer;