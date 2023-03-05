import { configureStore } from '@reduxjs/toolkit'
import workoutReducer from './musicSlice'
export const store = configureStore({
  reducer: {
    workout: workoutReducer
  },
})
