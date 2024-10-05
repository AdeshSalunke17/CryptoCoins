import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "../rtkservices/newsservice";
import { historySlice } from "../features/historyslice/historySlice";
export const store = configureStore({
    reducer: {
        [newsApi.reducerPath]: newsApi.reducer,
        history: historySlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(newsApi.middleware),
})