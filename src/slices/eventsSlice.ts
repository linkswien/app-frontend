import { createSlice /* , PayloadAction  */ } from '@reduxjs/toolkit';

export interface Event {
	id: number;
	title: string;
	headerUrl: string;
	date: string;
	location: string;
}

const initialState: Event[] = [
	{
		id: 0,
		title: 'Mayday mit LINKS',
		headerUrl:
			'https://links-wien.at/wp-content/uploads/2021/09/2021-09-03-Lobau-Erste-Woche-3-e1633604520420.jpg',
		date: `Donnerstag, 13.\xa0Dezember\xa02022`,
		location: `Heinestraße\xa035/12 1020\xa0Wien`,
	},
];

export const eventsSlice = createSlice({
	name: 'events',
	initialState,
	reducers: {
		/* logIn: (state, action: PayloadAction<string>) => ({
			...state,
			isLogged: true,
			apiToken: action.payload,
		}), */
	},
});

//export const { logIn } = eventsSlice.actions;

export default eventsSlice.reducer;
