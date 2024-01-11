import { configureStore } from "@reduxjs/toolkit";
import sidebarsSlice from "./features/sidebarsSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./services/Api";

const store = configureStore({
    reducer: {
        sidebars: sidebarsSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefault)=>getDefault().concat(api.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store