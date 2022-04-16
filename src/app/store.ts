import { configureStore, StateFromReducersMapObject } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import { loadState, saveState } from './localState';

const preloadedState = loadState();

const reducer = {
	user: userReducer,
};

// Configure store with all reducers and initial state
const store = configureStore({
	reducer,
	preloadedState,
});

// Store state in localStoage whenever it changes
store.subscribe(() => {
	saveState(store.getState());
});

export type RootState = StateFromReducersMapObject<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
