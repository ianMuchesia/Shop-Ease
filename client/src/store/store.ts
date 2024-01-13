import { configureStore } from "@reduxjs/toolkit";
import sidebarsSlice from "./features/sidebarsSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./services/Api";
import authSlice from "./features/authSlice";
import categorySlice from "./features/categorySlice";
import focusCategorySlice from "./features/focusCategorySlice";
import cartSlice from "./features/cartSlice";

const store = configureStore({
    reducer: {
        sidebars: sidebarsSlice,
        auth: authSlice,
        category: categorySlice,
        cart:cartSlice,
        focusedCategoryComponent: focusCategorySlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefault)=>getDefault().concat(api.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store