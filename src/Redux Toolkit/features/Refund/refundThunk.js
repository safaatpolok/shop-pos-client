import api from "@/util/api";
import { getAuthHeaders } from "@/util/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


// Create Refund
export const createdRefunds = createAsyncThunk(
  "/refund/create",
  async (refundDTO, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();

      const res = await api.post("/api/refunds", refundDTO, { headers });
      console.log("create refund success", res.data);

      return res.data;

    } catch (error) {
      console.log("error", error);

      return rejectWithValue(
        error.response?.data?.message || "Failed to create refund"
      );
    }
  }
);


// Get All Refunds
export const getAllRefunds = createAsyncThunk(
  "/refund/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();

      const res = await api.get("/api/refunds", { headers });
      console.log("get all refund success", res.data);

      return res.data;

    } catch (error) {
      console.log("error", error);

      return rejectWithValue(
        error.response?.data?.message || "Failed to get all refunds"
      );
    }
  }
);


// Get Refunds By Cashier
export const getRefundsByCashier = createAsyncThunk(
  "/refund/getByCashier",
  async (cashierId, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();

      const res = await api.get(
        `/api/refunds/cashier/${cashierId}`,
        { headers }
      );

      console.log("get refund by cashier success", res.data);

      return res.data;

    } catch (error) {
      console.log("error", error);

      return rejectWithValue(
        error.response?.data?.message || "Failed to get cashier refunds"
      );
    }
  }
);


// Get Refunds By Branch
export const getRefundsByBranch = createAsyncThunk(
  "/refund/getByBranch",
  async (branchId, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();

      const res = await api.get(
        `/api/refunds/branch/${branchId}`,
        { headers }
      );

      console.log("get refund by branch success", res.data);

      return res.data;

    } catch (error) {
      console.log("error", error);

      return rejectWithValue(
        error.response?.data?.message || "Failed to get branch refunds"
      );
    }
  }
);


// Get Refunds By Shift
export const getRefundsByShift = createAsyncThunk(
  "/refund/getByShift",
  async (shiftReportId, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();

      const res = await api.get(
        `/api/refunds/shift/${shiftReportId}`,
        { headers }
      );

      console.log("get refund by shift success", res.data);

      return res.data;

    } catch (error) {
      console.log("error", error);

      return rejectWithValue(
        error.response?.data?.message || "Failed to get shift refunds"
      );
    }
  }
);


// Get Refunds By Cashier and Date Range
export const getRefundsByCashierAndDateRange = createAsyncThunk(
  "/refund/getByCashierAndDateRange",
  async ({ cashierId, from, to }, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();

      const formattedFrom = encodeURIComponent(from);
      const formattedTo = encodeURIComponent(to);

      const res = await api.get(
        `/api/refunds/cashier/${cashierId}/range?from=${formattedFrom}&to=${formattedTo}`,
        { headers }
      );

      console.log("get by date range success", res.data);

      return res.data;

    } catch (error) {
      console.log("error", error);

      return rejectWithValue(
        error.response?.data?.message || "Failed to get refunds"
      );
    }
  }
);


// Get Refund By ID
export const getRefundsById = createAsyncThunk(
  "/refund/getById",
  async (refundId, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();

      const res = await api.get(
        `/api/refunds/${refundId}`,
        { headers }
      );

      console.log("get refund by id success", res.data);

      return res.data;

    } catch (error) {
      console.log("error", error);

      return rejectWithValue(
        error.response?.data?.message || "Failed to get refund by id"
      );
    }
  }
);