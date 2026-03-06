import api from "@/util/api";
import { createAsyncThunk } from "@reduxjs/toolkit"



export const getUserProfile = createAsyncThunk(
  "user/getProfile",
  async (token, { rejecteWithValue }) => {
    try {
      const res = await api.get("/api/users/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("get user Profile success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejecteWithValue(
        error?.response?.data?.message || "Faild to featch profile"
      );

    }
  }
)


export const getAllCustomer = createAsyncThunk(
  "user/getCustomers",
  async (token, { rejectedWithValue }) => {
    try {
      const res = await api.get("/api/users/customer", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("get  customers success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejectedWithValue(
        error?.response?.data?.message || "Faild to featch Customer"
      );

    }
  }
)

export const getAllCashier = createAsyncThunk(
  "user/getCashier",
  async (token, { rejectedWithValue }) => {
    try {
      const res = await api.get("/api/users/cashier", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("get  customers success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejectedWithValue(
        error?.response?.data?.message || "Faild to featch cashier"
      );

    }
  }
)
export const getUserById = createAsyncThunk(
  "user/getUById",
  async (userId, { rejectedWithValue }) => {
    try {
      const res = await api.get(`/api/users/${userId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      });
      console.log("get  user by id success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejectedWithValue(
        error?.response?.data?.message || "Faild to featch user by id"
      );

    }
  }
)

export const logout = createAsyncThunk(
  "user/logout",
  async (_, { rejectedWithValue }) => {
    try {
      localStorage.removeItem('jwt')

    } catch (error) {
      console.log("error", error)
      return rejectedWithValue("Faild to logout"
      );

    }
  }
)