import api from "@/util/api";
import { getAuthHeaders } from "@/util/getAuthHeader";
import { createAsyncThunk, } from "@reduxjs/toolkit";


export const createCategory = createAsyncThunk(
  "/category/create",
  async ({ dto }, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const res = await api.post("/api/categories", dto, { headers })
      console.log("create category sucess", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectWithValue(error.response?.data?.message)
    }
  }
)
export const getCategoriesByStore = createAsyncThunk(
  "/category/getByStore",
  async ({ storeId }, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const res = await api.get(`api/categories/store/${storeId}`, { headers })
      console.log("get category sucess", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectWithValue(error.response?.data?.message)
    }
  }
)
export const updateCategory = createAsyncThunk(
  "/category/update",
  async ({ id, dto }, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const res = await api.put(`api/categories/store/${id}`, dto, { headers })
      console.log("update category sucess", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectWithValue(error.response?.data?.message)
    }
  }
)
export const deleteCategory = createAsyncThunk(
  "/category/delete",
  async ({ id }, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const res = await api.delete(`api/categories/${id}`, { headers })
      console.log("delete category sucess", res.data);
      return id;
    } catch (error) {
      console.log("error", error)
      return rejectWithValue(error.response?.data?.message)
    }
  }
)