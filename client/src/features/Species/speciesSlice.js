import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  species: [],
  error: '',
};

export const fetchSpecies = createAsyncThunk(
  'species/fetchSpecies',
  async () => {
    return axios
      .get('http://localhost:3001/api/v1/species')
      .then((res) => res.data);
  }
);

const speciesSlice = createSlice({
  name: 'species',
  initialState,
  extraReducers: {
    [fetchSpecies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSpecies.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.species = payload;
    },
    [fetchSpecies.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default speciesSlice.reducer;
