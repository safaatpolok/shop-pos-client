import api from "@/util/api";
import { getAuthHeaders } from "@/util/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const getDailySalesChart = createAsyncThunk(
  "branchAnalytics/getDailySalesChart",
  async ({ branchId, days = 7 }, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/branch-analytics/daily-sales?branchId=${branchId}&days=${days}`, {
        headers
      });
      console.log("get daily sales date success", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);


export const getTopProductsByQuantity = createAsyncThunk(
  "branchAnalytics/getTopProductsByQuantity ",
  async ({ branchId }, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/branch-analytics/top-products?branchId=${branchId}`, {
        headers
      });
      console.log("get top products date success", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);


export const getTopCashiersByRevenue = createAsyncThunk(
  "branchAnalytics/getTopCashiersByRevenue  ",
  async ({ branchId }, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/branch-analytics/top-cashiers?branchId=${branchId}`, {
        headers
      });
      console.log("get top cashiers date success", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);


export const getCategoryWiseSalesBreakdown = createAsyncThunk(
  "branchAnalytics/getCategoryWiseSalesBreakdown",
  async ({ branchId, date }, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/branch-analytics/category-sales?branchId=${branchId}& ${date}`, {
        headers
      });
      console.log("category wise sales success", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);


export const getTodayOverview = createAsyncThunk(
  "branchAnalytics/getTodayOverview",
  async ({ branchId }, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/branch-analytics/today-overview?branchId=${branchId}`, {
        headers
      });
      console.log("get today overview", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);


export const getPaymentBreakdown = createAsyncThunk(
  "branchAnalytics/getPaymentBreakdown",
  async ({ branchId, date }, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/branch-analytics/payment-breakdown?branchId=${branchId}&date=${date}`, {
        headers
      });
      console.log("payment breakdown success", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);