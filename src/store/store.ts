import { configureStore } from "@reduxjs/toolkit";

import ModeSlice from "../features/ModeSlice";
import ServiceSlice from "../features/ServiceSlice";

const store = configureStore({
  reducer: {
    mode: ModeSlice,
    service: ServiceSlice,
  },
});

export default store;
