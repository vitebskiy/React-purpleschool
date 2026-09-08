import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../FilmList/FilmList.props';

// я сделал этот массив но до конца не понял почему он должен быть. подглядел в прошлом задание.
export interface FilmState {
  items: Film[];
}

// тоже не поятно почему каждый раз нужно выносить это в отдельную переменную? / ответ как будет возможно.
export const initialState: FilmState = {
  items: JSON.parse(localStorage.getItem('favorites') || '[]'),
};

export const favoritSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Film>) => {
      const existed = state.items.find((i) => i.imdbID === action.payload.imdbID);
      if (!existed) {
        state.items.push(action.payload);
        return;
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((i) => i.imdbID !== action.payload);
    },
  },
});


export default favoritSlice.reducer;
export const favoriteAction = favoritSlice.actions;
