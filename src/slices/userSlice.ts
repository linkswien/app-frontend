import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
	isLogged: boolean;
	apiToken: null | string;
}

const initialState: UserState = {
	isLogged: false,
	apiToken: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logIn: (state, action: PayloadAction<string>) => ({
			...state,
			isLogged: true,
			apiToken: action.payload,
		}),
	},
});

export const { logIn } = userSlice.actions;

export default userSlice.reducer;
