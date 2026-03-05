import { createSlice } from "@reduxjs/toolkit";
import { createInventory, deleteInventory, getInventoryByBranch, getInventoryById, getInventoryByProduct, updateInventory } from "./inventoryThunk";

const initialState = {
  inventories: [],

  inventory: null,
  loading: false,
  error: null,
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createInventory.pending, (state) => {
        state.loading = true;
      })
      .addCase(createInventory.fulfilled, (state, action) => {
        state.loading = false;
        state.inventories.push(action.payload);
      })
      .addCase(createInventory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateInventory.fulfilled, (state, action) => {

        const index = state.inventories.findIndex(inv => inv.id === action.payload);
        if (index !== -1) state.inventories[index] = action.payload;

      })

      .addCase(deleteInventory.fulfilled, (state, action) => {

        state.inventories = state.inventories.filter(inv => inv.id !== action.payload);
      })
      .addCase(getInventoryById.fulfilled, (state, action) => {

        state.inventory = (action.payload);
      })
      .addCase(getInventoryByBranch.fulfilled, (state, action) => {

        state.inventories = (action.payload);
      })
      .addCase(getInventoryByProduct.fulfilled, (state, action) => {

        state.inventory = (action.payload);
      })
  }

})

export default inventorySlice.reducer;