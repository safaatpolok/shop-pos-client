import { createSlice } from "@reduxjs/toolkit"
import { createCustomer, updateCustomer, deleteCustomer, getCustomerById, getAllCustomer, } from "./customerThunk"
import { getAllCashier } from "../User/userThunk"

const initialState = {

  customers: [],
  selectedCustomer: null,
  loading: false,
  error: null

}
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(createCustomer.pending, (state) => {
        state.loading = true,
          state.customers = []
      })
      .addCase(createCustomer.fulfilled, (state, action) => {
        state.loading = false,
          state.customers.push(action.payload)
      })
      .addCase(createCustomer.rejected, (state, action) => {
        state.loading = false,
          state.error = action.payload
      })

      //Update Customer
      .addCase(updateCustomer.pending, (state) => {
        state.loading = true;

      })

      .addCase(updateCustomer.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.customers.findIndex(
          (customer) => customer.id === action.payload.id
        );
        if (index !== -1) {
          state.customers[index] = action.payload;
        }
        if (
          state.selectedCustomer &&
          state.selectedCustomer.id === action.payload.id
        ) {
          state.selectedCustomer = action.payload;
        }
      })

      .addCase(updateCustomer.rejected, (state, action) => {
        state.loading = false,
          state.error = action.payload
      })

      //Delete Customer

      .addCase(deleteCustomer.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = state.customers.filter(
          (customer) => customer.id !== action.payload
        );
        if (state.selectedCustomer &&
          state.selectedCustomer.id === action.payload
        ) {
          state.selectedCustomer = null;
        }
      })
      .addCase(deleteCustomer.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })

      //Get Customer by Id

      .addCase(getCustomerById.pending, (state) => {
        state.loading = true;

      })
      .addCase(getCustomerById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCustomer = action.payload;
        state.error = action.payload;
      })

      .addCase(getCustomerById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //Get All Customers
      .addCase(getAllCustomer.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCashier.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = action.payload;

      })
      .addCase(getAllCashier.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      })

  }

});
export default customerSlice.reducer
