
import { createSlice } from "@reduxjs/toolkit";
import { createStoreEmployee, createBranchEmployee, updateEmployee, deleteEmployee, findEmployeeById, findStoreEmployee, findBranchEmployee } from "./employeeThunk";

const initialState = {
  employees: [],
  employee: null,
  loading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createStoreEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(createStoreEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.employees.push(action.payload)
      })
      .addCase(createStoreEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;;
      })


      .addCase(createBranchEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBranchEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.employees.push(action.payload)
      })
      .addCase(createBranchEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;;
      })

      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.employee.findIndex((e) => e.id !== action.payload)
        if (index !== -1) {
          state.employees[index] = action.payload;
        }

      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.filter((e) => e.id !== action.payload)
      })
      .addCase(findEmployeeById.fulfilled, (state, action) => {
        state.employees = action.payload;
      })
      // .addCase(findEmployeeById.fulfilled, (state, action) => {
      //   state.employees = action.payload;
      // })
      .addCase(findStoreEmployee.fulfilled, (state, action) => {
        state.employees = action.payload;
      })
      .addCase(findBranchEmployee.fulfilled, (state, action) => {
        state.employees = action.payload;
      })
  }
})


export default employeeSlice.reducer; 
