import { call, put, select, takeEvery } from 'redux-saga/effects';
import { setWorkout, deleteWorkout } from './workoutSlice';
import { fetchWorkout, deleteWorkout as deleteWorkoutAPI, getWorkout } from '../api/workout';

function* fetchWorkoutSaga() {
  try {
    const workout = yield call(fetchWorkout);
    yield put(setWorkout(workout));
  } catch (error) {
    console.error(error);
  }
}

function* deleteWorkoutSaga(action) {
  try {
    yield call(deleteWorkoutAPI, action.payload);
    const workout = yield select((state) => state.workout.workout.filter((c) => c._id !== action.payload));
    yield put(deleteWorkout(workout));
    yield put(setWorkout(workout));
  } catch (error) {
    console.error(error);
  }
}

function* getWorkoutSaga(action) {
  try {
    yield call(getWorkout, action.payload);
    yield put(navigate(`/edit/${action.payload}`));
  } catch (error) {
    console.error(error);
  }
}

function* watchFetchWorkout() {
  yield takeEvery('workout/fetchWorkout', fetchWorkoutSaga);
}

function* watchDeleteWorkout() {
  yield takeEvery('workout/deleteWorkout', deleteWorkoutSaga);
}

function* watchGetWorkout() {
  yield takeEvery('workout/getWorkout', getWorkoutSaga);
}

export default function* workoutSaga() {
  yield all([watchFetchWorkout(), watchDeleteWorkout(), watchGetWorkout()]);
}
