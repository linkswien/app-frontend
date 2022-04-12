import { createSlice } from '@reduxjs/toolkit';

interface UserState {
	isLogged: boolean;
	credentials: null | {
		token: string;
	};
}

const initialState: UserState = {
	isLogged: false,
	credentials: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logIn: (state) => {
			state.isLogged = true;
		},
	},
});

export const { logIn } = userSlice.actions;

export default userSlice.reducer;
