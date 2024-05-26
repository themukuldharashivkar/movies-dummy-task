// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
//   const response = await axios.get("https://dummyapi.online/api/movies");
//   // Sort the movies in decreasing order based on ratings
//   const sortedMovies = response.data.sort((a, b) => b.rating - a.rating);
//   return sortedMovies;
// });

// const moviesSlice = createSlice({
//   name: "movies",
//   initialState: {
//     movies: [],
//     loading: false,
//     error: null,
//     favorites: [],
//   },
//   reducers: {
//     toggleFavorite: (state, action) => {
//       const movieId = action.payload;
//       if (state.favorites.includes(movieId)) {
//         state.favorites = state.favorites.filter((id) => id !== movieId);
//       } else {
//         state.favorites.push(movieId);
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchMovies.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchMovies.fulfilled, (state, action) => {
//         state.loading = false;
//         state.movies = action.payload;
//       })
//       .addCase(fetchMovies.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { toggleFavorite } = moviesSlice.actions;
// export default moviesSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const response = await axios.get(apiUrl);
  const sortedMovies = response.data.sort((a, b) => b.rating - a.rating);
  return sortedMovies;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
    error: null,
    favorites: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const movieId = action.payload;
      if (state.favorites.includes(movieId)) {
        state.favorites = state.favorites.filter((id) => id !== movieId);
      } else {
        state.favorites.push(movieId);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { toggleFavorite } = moviesSlice.actions;
export default moviesSlice.reducer;
