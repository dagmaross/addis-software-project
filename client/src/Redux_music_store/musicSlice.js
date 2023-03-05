import { createSlice } from '@reduxjs/toolkit'

export const workoutSlice = createSlice({
  name: 'workout',
  initialState: {
    workout:null
  },
  reducers: {
    setWorkout: (state, action) => {
      state.workout = action.payload;
    },
    deleteWorkout: (state, action) => {
      state.workout=state.workout.filter((w) => w._id !== action.payload._id);
    },
    createWorkout: (state, action) => {
    state.workout=  state.workout.push(action.payload);
    },
    updateWorkout: (state, action) => {
      state.workout = state.workout.find((w) => w._id === action.payload._id);
  
    }
  }
});

export const { setWorkout, deleteWorkout, createWorkout, updateWorkout } = workoutSlice.actions;

export default workoutSlice.reducer;
