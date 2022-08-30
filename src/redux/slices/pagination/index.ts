import { createSlice } from "@reduxjs/toolkit";

export interface IUpComingMovie {
  upcommingMovie: Array<Object>,
  status: string,
  pageIndex: number,
  pageSize: number,
}

const initialState: IUpComingMovie = {
  upcommingMovie: [],
  status: 'idle',
  pageIndex: 1,
  pageSize: 5,
};

const paginationSlice = createSlice({
  name: "upcomming",
  initialState,
  reducers: {
    handlePageIndexChange: (state, action) => {
        state.pageIndex = action.payload
      }
  },
  
});

export const { handlePageIndexChange } = paginationSlice.actions;

export default paginationSlice.reducer;

