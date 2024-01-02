import { configureStore } from "@reduxjs/toolkit";
import sidebarsSlice from "./features/sidebarsSlice";

const store = configureStore({
    reducer: {
        sidebars: sidebarsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store