import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./Slices/newsSlice";
import structureSlice from "./Slices/structureSlice";

export default configureStore({
  reducer: {
    newsSlice: newsSlice,
    structureSlice: structureSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
