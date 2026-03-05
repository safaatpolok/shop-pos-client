import api from "@/util/api";
import { getAuthHeaders } from "@/util/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const createBranch = createAsyncThunk(
  "branch/create",
  async ({ dto }, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.post(`/api/branches`, dto, {
        headers
      });
      console.log("create branch successfully", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejectedWithValue(
        error?.response?.data?.message || "Faild to create branch"
      );

    }
  }
);


export const getBranchById = createAsyncThunk(
  "branch/getById",
  async ({ id }, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/branches/${id}`, {
        headers
      });
      console.log("get branch successfully", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejectedWithValue(
        error?.response?.data?.message || "Faild to fetch branch"
      );

    }
  }
);
export const getAllBranchesByStore = createAsyncThunk(
  "branch/getAllByStore",
  async ({ id }, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/branches/store/${id}`, {
        headers
      });
      console.log("get store branch successfully", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejectedWithValue(
        error?.response?.data?.message || "Faild to fetch store branch"
      );

    }
  }
);
export const updateBranch = createAsyncThunk(
  "branch/updateBranch",
  async ({ id, dto }, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.patch(`/api/branches/store/${id}`, { dto }, {
        headers
      });
      console.log("update branches successfully", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejectedWithValue(
        error?.response?.data?.message || "Faild to fetch update branch"
      );

    }
  }
);