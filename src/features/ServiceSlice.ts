import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    services: localStorage.getItem("services")
      ? JSON.parse(localStorage.getItem("services") || "[]")
      : [],
    getInfo: {},
  },
  reducers: {
    addService: (state, action) => {
      state.services.push(action.payload);
      localStorage.setItem("services", JSON.stringify(state.services));
    },
    // get one service
    getService: (state, action) => {
      const id = action.payload;

      const service = state.services.find(
        (service: any) => Number(service.id) === Number(id)
      );

      state.getInfo = service ? { ...service } : {};
    },

    // update service
    updateService: (state, action) => {
      const newService = action.payload;
      const index = state.services.findIndex(
        (service: any) => Number(service.id) === Number(newService.id)
      );

      if (index !== -1) {
        state.services[index] = newService;
        localStorage.setItem("services", JSON.stringify(state.services));
      }
    },
    // delete service
    deleteService: (state, action) => {
      const id = action.payload;
      const index = state.services.findIndex(
        (service: any) => service.id === id
      );
      if (index !== -1) {
        state.services.splice(index, 1);
        localStorage.setItem("services", JSON.stringify(state.services));
      }
    },
  },
});

export const { addService, getService, updateService, deleteService } =
  serviceSlice.actions;
export default serviceSlice.reducer;
