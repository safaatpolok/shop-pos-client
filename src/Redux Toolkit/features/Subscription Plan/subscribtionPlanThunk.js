import api from "@/util/api";
import { getAuthHeaders } from "@/util/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createSubscriptionPlan = createAsyncThunk(
  "/subscriptionPlan/create",
  async (plan, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.post(`/api/super-admin/subscription-plans`, plan, {
        headers
      });
      console.log("create subscription plan success", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);


export const updateSubscriptionPlan = createAsyncThunk(
  "/subscriptionPlan/update",
  async ({ id, plan }, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/super-admin/subscription-plans/${id}`, plan, {
        headers
      });
      console.log("update subscription plan success", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);
export const getAllSubscriptionPlan = createAsyncThunk(
  "/subscriptionPlan/getAll",
  async (_, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/super-admin/subscription-plans`, {
        headers,
      });
      console.log("get all subscription plan success", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);
export const getSubscriptionPlanById = createAsyncThunk(
  "/subscriptionPlan/getById",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/super-admin/subscription-plans/${id}`, {
        headers,
      });
      console.log("get subscription plan byId success", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
);
export const deleteSubscriptionPlan = createAsyncThunk(
  "/subscriptionPlan/delete",
  async (id, { rejectedWithValue }) => {
    try {
      const headers = getAuthHeaders()
      const res = await api.get(`/api/super-admin/subscription-plans/${id}`, {
        headers,
      });
      console.log("delete subscription plan success", res.data);
      return res.data;
    } catch (error) {
      console.log("error", error)
      return rejectedWithValue(
        error?.response?.data?.message
      );

    }
  }
); 