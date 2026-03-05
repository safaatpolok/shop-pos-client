import api from "@/util/api";
import { getAuthHeaders } from "@/util/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createStoreEmployee = createAsyncThunk(
  "/employee/createStoreEmployee",
  async ({ employee, storeId }, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const res = await api.post(`/api/employees/store/${storeId}`, employee, { headers })
      console.log("create store employee success", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectWithValue(error.response?.data?.message);
    }
  }
)


export const createBranchEmployee = createAsyncThunk(
  "/employee/createBranchEmployee",
  async ({ employee, branchId }, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const res = await api.post(`/api/employees/branch/${branchId}`, employee, { headers })
      console.log("create branch employee success", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectWithValue(error.response?.data?.message);
    }
  }
)

export const updateEmployee = createAsyncThunk(
  "/employee/updateEmployee",
  async ({ employeeId, employeeDetails }, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const res = await api.put(`/api/employee/${employeeId}`, employeeDetails, { headers })
      console.log("update  employee success", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectWithValue(error.response?.data?.message);
    }
  }
)
export const deleteEmployee = createAsyncThunk(
  "/employee/deleteEmployee",
  async ({ employeeId }, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const res = await api.delete(`/api/employee/${employeeId}`, { headers })
      console.log("delete employee success", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectWithValue(error.response?.data?.message);
    }
  }
)


export const findEmployeeById = createAsyncThunk(
  "/employee/findEmployeeById",
  async ({ employeeId }, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const res = await api.get(`/api/employee/${employeeId}`, { headers })
      console.log("find employee by id success", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectWithValue(error.response?.data?.message);
    }
  }
)



export const findStoreEmployee = createAsyncThunk(
  "/employee/findStoreEmployee",
  async ({ storeId }, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const res = await api.get(`/api/employee/${storeId}`, { headers })
      console.log("find  store employee success", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectWithValue(error.response?.data?.message);
    }
  }
)

export const findBranchEmployee = createAsyncThunk(
  "/employee/findBramchEmployee",
  async ({ branchId }, { rejectWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const res = await api.get(`/api/employee/${branchId}`, { headers })
      console.log("find  branch employee success", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectWithValue(error.response?.data?.message);
    }
  }
)


