import { configureStore, createSlice } from '@reduxjs/toolkit';
import { ReactFragment } from 'react';
import { Story } from '@storybook/react';
import { Provider } from 'react-redux';
import EventListItem from '../components/EventListItem';
import { Event } from '../slices/eventsSlice';

const MockedState: Event[] = [
	//shot text
	{
		id: 0,
		title: 'Mayday mit LINKS',
		headerUrl:
			'https://links-wien.at/wp-content/uploads/2021/09/2021-09-03-Lobau-Erste-Woche-3-e1633604520420.jpg',
		date: `Sonntag, 1.\xa0Mai\xa02022`,
		location: `Votivpark`,
	},
	//long text
	{
		id: 1,
		title: 'Mayday mit LINKS',
		headerUrl:
			'https://links-wien.at/wp-content/uploads/2021/09/2021-09-03-Lobau-Erste-Woche-3-e1633604520420.jpg',
		date: `Donnerstag, 13.\xa0Dezember\xa02022`,
		location: `Heinestraße\xa035/12 1020\xa0Wien`,
	},
];

interface MockstoreProps {
	mockState: typeof MockedState;
	children: ReactFragment;
}

const Mockstore = ({ mockState, children }: MockstoreProps) => (
	<Provider
		store={configureStore({
			reducer: {
				events: createSlice({
					name: 'events',
					initialState: mockState,
					reducers: {},
				}).reducer,
			},
		})}
	>
		{children}
	</Provider>
);

export default {
	title: 'Links/Cards/Event List Item',
	component: EventListItem,
	excludeStories: /.*MockedState$/,
	decorators: [(story: () => ReactFragment) => story()],
	argTypes: {
		text: {
			options: ['Short', 'Long'],
			control: 'inline-radio',
		},
	},
};

const Template: Story<{ text: string }> = (args) => {
	let id;
	switch (args.text) {
		case 'Long':
			id = 1;
			break;
		default:
			id = 0;
			break;
	}
	return <EventListItem id={id}></EventListItem>;
};

export const Default = Template.bind({});
Default.args = {
	text: 'Short',
};

/*
Default.decorators = [
	(story) => (
		<Mockstore mockState={MockedState}>
			{story()}
		</Mockstore>
	),
];
*/
