import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
