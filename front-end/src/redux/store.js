import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counterSlice';
import { deliveryAPI } from './services/delivery.api';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [deliveryAPI.reducerPath]: deliveryAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(deliveryAPI.middleware),
});

export default store;
