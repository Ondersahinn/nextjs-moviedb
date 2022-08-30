
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from '../../../constans/index'
import finalConfig from '../../../constans/config.json';
import { getSearchMovie } from "src/api/service/generalService";

interface IMovie {
  movies: Array<Object>,
  searchKey : string,
  status: string
  recentSearches : Array<string>
}

const initialState: IMovie = {
  movies: [],
  searchKey: '',
  status: 'idle',
  recentSearches: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('recentSearch')  || '[]') : []
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    handleRecentSearchChange: (state, action) => {
      debugger
      const findSearchKey = state.recentSearches.find((e) => e === action.payload);
      if(findSearchKey === undefined) {
        if(state.recentSearches.length > 4){
          state.recentSearches.pop();
          state.recentSearches.unshift(action.payload);
          localStorage.setItem('recentSearch', JSON.stringify(state.recentSearches));
        }
        else {
          state.recentSearches.unshift(action.payload);
          localStorage.setItem('recentSearch', JSON.stringify(state.recentSearches));
        }
      }
      
    },
    handleDeleteRecentSearch: (state ) => {
      state.recentSearches = [];
      localStorage.setItem('recentSearch', JSON.stringify([]));

    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSearchMovieList.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchSearchMovieList.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.movies = action.payload
      })
      .addCase(fetchSearchMovieList.rejected, (state, action) => {
        state.status = 'failed'
      })
  }
});

export const fetchSearchMovieList: any = createAsyncThunk(baseUrl + finalConfig.SEARCHMOVIE, async (queryParam: any , {getState}) => {

  const response = await getSearchMovie(queryParam);
  if (!response.errStatus) {
    return response.data
  }
  else {
    return [];
  }
});


export const { handleRecentSearchChange , handleDeleteRecentSearch } = movieSlice.actions;

export default movieSlice.reducer;
