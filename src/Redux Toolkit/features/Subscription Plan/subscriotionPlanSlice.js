import { createSlice } from "@reduxjs/toolkit";
import { createSubscriptionPlan, updateSubscriptionPlan, getAllSubscriptionPlan, getSubscriptionPlanById, deleteSubscriptionPlan } from "./subscribtionPlanThunk";

const initialState = {
  plans: [],
  selectedPlan: null,
  loading: false,
  error: null,
};

const subscriptionPlanSlice = createSlice({
  name: "subsctiptionPlan",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSubscriptionPlan.pending, (state) => {
        state.loading = true
      })
      .addCase(createSubscriptionPlan.fulfilled, (state, action) => {
        state.loading = false;
        state.plans.push(action.payload)
      })
      .addCase(createSubscriptionPlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(updateSubscriptionPlan.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(updateSubscriptionPlan.fulfilled, (state, action) => {
        state.loading = false;

        state.plans = state.plans.map((plan) =>
          plan.id === action.payload.id
            ? action.payload
            : plan
        );
      })

      .addCase(updateSubscriptionPlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(getAllSubscriptionPlan.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllSubscriptionPlan.fulfilled, (state, action) => {
        state.loading = false;
        state.plans.push(action.payload)
      })
      .addCase(getAllSubscriptionPlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(getSubscriptionPlanById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSubscriptionPlanById.fulfilled, (state, action) => {
        state.loading = false;
        state.plans.push(action.payload)
      })
      .addCase(getSubscriptionPlanById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(deleteSubscriptionPlan.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSubscriptionPlan.fulfilled, (state, action) => {
        state.loading = false;
        state.plans = state.plans.filter((plan) => plan.id !== action.payload)
      })
      .addCase(deleteSubscriptionPlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
});

export default subscriptionPlanSlice.reducer;