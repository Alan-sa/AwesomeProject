import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedJob: null,
};

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setSelectedJob: (state, action) => {
      state.selectedJob = action.payload;
    },
  },
});
