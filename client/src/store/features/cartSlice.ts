import { CartItem, Product } from "@/@types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialCartState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image:newItem.image
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }

      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },
    removeSingleItemFromCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }

        state.totalQuantity--;
        state.totalPrice -= existingItem.price;
      }
    },
    removeItemFromCart(state, action:PayloadAction<string>){
      const id = action.payload
      const existingItem  = state.items.find(item=>item.id === id)

      if (existingItem){
        state.items = state.items.filter((item)=>item.id !== existingItem.id)

        state.totalQuantity--;
        state.totalPrice -= existingItem.totalPrice
      }
    },



    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },

    replaceCart(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;
    },
  },
});

export const { addToCart, removeItemFromCart, removeSingleItemFromCart, clearCart, replaceCart } =
  cartSlice.actions;

export default cartSlice.reducer;
