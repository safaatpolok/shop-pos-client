import api from "@/util/api";
import { getAuthHeaders } from "@/util/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createCustomer = createAsyncThunk(
  "customer/create",
  async (customer, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/customers`, customer, {
        headers,
      });
      console.log("create customer success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejectedWithValue(
        error?.response?.data?.message || "Faild to featch customer"
      );

    }
  }
);


export const updateCustomer = createAsyncThunk(
  "customer/update",
  async (id, customer, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.put(`/api/customers/${id}`, customer, {
        headers,
      });
      console.log(" update customer success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejectedWithValue(
        error?.response?.data?.message || "Faild to featch customer"
      );

    }
  }
)
export const deleteCustomer = createAsyncThunk(
  "customer/delete",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.delete(`/api/customers/${id}`, {
        headers,
      });
      console.log(" delete customer success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejectedWithValue(
        error?.response?.data?.message || "Faild to delete customer"
      );

    }
  }
)
export const getCustomerById = createAsyncThunk(
  "customer/getById",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/customers/${id}`, {
        headers,
      });
      console.log(" get customer by id success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejectedWithValue(
        error?.response?.data?.message || "Faild to fetch customer"
      );

    }
  }
);
export const getAllCustomer = createAsyncThunk(
  "customer/getAll",
  async (_, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/customers`, {
        headers,
      });
      console.log(" get all customer success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejectedWithValue(
        error?.response?.data?.message || "Faild to fetch customer"
      );

    }
  }
);

