import api from "@/util/api";
import { getAuthHeaders } from "@/util/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getStoreOverview = createAsyncThunk(
  "storeAnalytics/getStoreOverview",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/store/analytics/${id}/overview`, {
        headers
      });
      console.log("get store overview", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);


export const getSalesTreds = createAsyncThunk(
  "storeAnalytics/getSalesTrends",
  async ({ storeAdminId, period }, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/store/analytics/${storeAdminId}/sales-trends?preiod=${period}`, {
        headers
      });
      console.log("sales trends success", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);


export const getMonthlySales = createAsyncThunk(
  "storeAnalytics/getMonthlySales",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/store/analytics/${id}/sales/monthly`, {
        headers
      });
      console.log("get  monthly sales", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);


export const getDailySales = createAsyncThunk(
  "storeAnalytics/getDailySales",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/store/analytics/${id}/sales/daily`, {
        headers
      });
      console.log("get  daily sales", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);
export const getSalesByCategory = createAsyncThunk(
  "storeAnalytics/getSalesByCategory",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/store/analytics/${id}/sales/category`, {
        headers
      });
      console.log("get  sales by category", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);
export const getSalesByPaymentMethod = createAsyncThunk(
  "storeAnalytics/getSalesByPaymentMethod",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/store/analytics/${id}/sales/payment-method`, {
        headers
      });
      console.log("get  sales by payment method", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);
export const getSalesByBranch = createAsyncThunk(
  "storeAnalytics/getSalesByBranch",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/store/analytics/${id}/sales/branch`, {
        headers
      });
      console.log("get  sales by branch", res.data);
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
  "storeAnalytics/getPaymentBreakdown",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/store/analytics/${id}/sales/payments `, {
        headers
      });
      console.log("get  payment breakdow", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);
export const getBranchPerformance = createAsyncThunk(
  "storeAnalytics/getBranchPreformance",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/store/analytics/${id}/sales/branch-performance `, {
        headers
      });
      console.log("get  branch-performance", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);
export const getStoreAlerts = createAsyncThunk(
  "storeAnalytics/getStoreAlerts",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/store/analytics/${id}/alerts `, {
        headers
      });
      console.log("store alerts success", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);