import api from "@/util/api";
import { getAuthHeaders } from "@/util/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createInventory = createAsyncThunk(
  "inventory/create",
  async (dto, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.post(`/api/inventories`, dto, {
        headers,
      });
      console.log("create customer success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);
export const updateInventory = createAsyncThunk(
  "inventory/update ",
  async (id, dto, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.put(`/api/inventories/${id}`, dto, {
        headers,
      });
      console.log("update inventory success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);


export const deleteInventory = createAsyncThunk(
  "inventory/delete ",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.delete(`/api/inventories/${id}`, {
        headers,
      });
      console.log("delete inventory success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);

export const getInventoryById = createAsyncThunk(
  "inventory/getById ",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/inventories/${id}`, {
        headers,
      });
      console.log("get by id inventory success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);


export const getInventoryByBranch = createAsyncThunk(
  "inventory/getByBranch ",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/inventories/branch/${id}`, {
        headers,
      });
      console.log("get by branch inventory success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);


export const getInventoryByProduct = createAsyncThunk(
  "inventory/getByProduct ",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/inventories/product/${id}`, {
        headers,
      });
      console.log("get product inventory success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);