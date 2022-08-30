import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from '../../../constans/index'
import finalConfig from '../../../constans/config.json';
import { getUpcommingService } from "src/api/service/generalService";

export interface IUpComingMovie {
  upcommingMovie: Array<Object>,
  status: string
}

const initialState: IUpComingMovie = {
  upcommingMovie: [],
  status: 'idle'
};

const upComingSlice = createSlice({
  name: "upcomming",
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUpComingMovieList.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchUpComingMovieList.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.upcommingMovie = action.payload
      })
      .addCase(fetchUpComingMovieList.rejected, (state, action) => {
        state.status = 'failed'
      })
  }
});

export const fetchUpComingMovieList : any = createAsyncThunk(baseUrl + finalConfig.UPCOMING, async (queryParam : any) => {

  const response = await getUpcommingService(queryParam);
  if (!response.errStatus) {
    return response.data
  }
  else {
    return [];
  }
});


export default upComingSlice.reducer;

