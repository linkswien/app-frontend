import { RootState } from './store';

/**
 * @returns Initial state loaded from local storage
 */
export const loadState = (): RootState | Record<string, never> => {
	try {
		const serialiszedState = localStorage.getItem('state');
		if (serialiszedState === null) return {};
		return JSON.parse(serialiszedState);
	} catch (err) {
		return {};
	}
};

/**
 * Stores @param state in persistent local storage
 * @param state state to be stored
 */
export const saveState = (state: RootState): void => {
	try {
		const serialiszedState = JSON.stringify(state);
		localStorage.setItem('state', serialiszedState);
	} catch (err) {
		// do nothing
	}
};
