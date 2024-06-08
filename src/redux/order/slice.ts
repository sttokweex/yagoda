import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OrderItem {
  id: string;
  count: number;
  price: number;
}

interface Order {
  name: string;
  phone: string;
  deliveryMethod: string;
  items: OrderItem[];
  totalPrice: number;
}

interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    submitOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
      // Here you can add a function to send order data to the server
    },
  },
});

export const { submitOrder } = orderSlice.actions;

export default orderSlice.reducer;
