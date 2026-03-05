import { createSlice } from "@reduxjs/toolkit";
import { createStore, getAllStore, getStoreByAdmin, getStoreById, moderateStore, updateStore } from "./stoteThunk";



const initialState = {

  store: null,
  stores: [],
  employees: [],
  loading: false,
  error: null,

};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createStore.pending, (state) => {
        state.loading = true;

      })
      .addCase(createStore.fulfilled, (state, action) => {
        state.loading = false;
        state.store = action.payload;
      })
      .addCase(createStore.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getStoreByAdmin.fulfilled, (state, action) => {
        state.store = action.payload;
        console.log("store by admin", action.payload)
      })

      .addCase(getStoreById.fulfilled, (state, action) => {
        state.store = action.payload;
      })
      .addCase(getAllStore.fulfilled, (state, action) => {
        state.store = action.payload;
      })

      .addCase(moderateStore.fulfilled, (state, action) => {
        const updated = action.payload;
        state.store = state.stores.map(store =>
          store.id === updateStore.id ? updated : store
        );
      })
  }
})

export default storeSlice.reducer;