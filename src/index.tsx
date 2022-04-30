import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './app/chakraTheme';

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<ChakraProvider theme={customTheme}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ChakraProvider>
		</React.StrictMode>
	</Provider>,
	document.getElementById('root'),
);
