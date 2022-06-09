import { configureStore } from '@reduxjs/toolkit';
import speciesSlice from './Species/speciesSlice';

export const store = configureStore({
  reducer: {
    species: speciesSlice,
  },
});
