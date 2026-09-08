import { configureStore } from '@reduxjs/toolkit';
import { favoritSlice } from './favorites_slice';

export const store = configureStore({
  reducer: {
    favorite: favoritSlice.reducer,
  },
});

store.subscribe(() => {
  const saveStorage = store.getState();
  localStorage.setItem('favorites', JSON.stringify(saveStorage.favorite.items));
});

export type RootState = ReturnType<typeof store.getState>;
