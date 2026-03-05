import api from "@/util/api";
import { getAuthHeaders } from "@/util/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOrder = createAsyncThunk(
  "order/create",
  async (dto, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.post(`/api/orders`, dto, {
        headers,
      });
      console.log("create customer success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejectedWithValue(
        error?.response?.data?.message || "Faild to featch order"
      );

    }
  }
);


export const getOrderById = createAsyncThunk(
  "order/getById",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/orders/${id}`, {
        headers,
      });
      console.log("fetch order success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejectedWithValue(
        error?.response?.data?.message || "Faild to featch order"
      );

    }
  }
);


export const getOrdersByBranch = createAsyncThunk(
  "order/getByBranch",
  async ({ branchId, customerId, cashierId, paymentType, status },
    { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders();
      const param = []
      if (customerId) param.push(`customerId=${customerId}`);
      if (cashierId) param.push(`customerId=${cashierId}`);
      if (paymentType) param.push(`customerId=${paymentType}`);
      if (status) param.push(`customerId=${status}`);

      const query = param.length ? `?${param.join("&")}` : "";


      const res = await api.get(`/api/orders/branch/${branchId}${query}`, {
        headers,
      });
      console.log("fetch  branch order success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejectedWithValue(
        error?.response?.data?.message || "Faild to featch branch order"
      );

    }
  }
);

export const getOrdersByCashier = createAsyncThunk(
  "order/getByCashier",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/orders/cashier/${id}`, {
        headers,
      });
      console.log("fetch cashier order success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejectedWithValue(
        error?.response?.data?.message || "Faild to fetch cashier order"
      );

    }
  }
);
export const getTodayOrderByBranch = createAsyncThunk(
  "order/getTodayByBranch",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/orders/today/branch${id}`, {
        headers,
      });
      console.log("fetch today branch order success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejectedWithValue(
        error?.response?.data?.message || "Faild to fetch today branch order"
      );

    }
  }
);
export const deleteOrder = createAsyncThunk(
  "order/delete",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.delete(`/api/orders/${id}`, {
        headers,
      });
      console.log("delete order success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejectedWithValue(
        error?.response?.data?.message || "Faild to delete order"
      );

    }
  }
);
export const getOrderByCustomer = createAsyncThunk(
  "order/getOrderByCustomer",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/orders/customer${id}`, {
        headers,
      });
      console.log("fetch  customer order success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejectedWithValue(
        error?.response?.data?.message || "Faild to fetch customer order"
      );

    }
  }
);
export const getRecentOrdersByBranch = createAsyncThunk(
  "order/ getRecentByBranchr",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/orders/customer${id}`, {
        headers,
      });
      console.log("fetch  recent branch order success", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error?.response?.data)
      return rejectedWithValue(
        error?.response?.data?.message || "Faild to fetch recent branch order"
      );

    }
  }
);

