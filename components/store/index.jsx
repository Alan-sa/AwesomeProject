import {configureStore} from '@reduxjs/toolkit';
import {jobsSlice} from './jobsSlice';

const store = configureStore({
  reducer: {
    selectedJob: jobsSlice.reducer,
  },
});

export default store;
