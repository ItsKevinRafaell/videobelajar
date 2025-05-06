import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import courseReducer from './courseReducer';

const store = configureStore({
  reducer: {
    userData: userReducer,
    courseData: courseReducer,
  },
});

export default store;
