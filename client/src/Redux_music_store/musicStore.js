import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import workoutReducer from './musicSlice';

export const store = configureStore({
  reducer: {
    workout: workoutReducer
  },
  middleware: [thunk, ...getDefaultMiddleware()],
});




