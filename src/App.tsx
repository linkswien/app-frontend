import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Oauth from './views/Oauth';
import Home from './views/Home';

class App extends React.Component {
	render() {
		return (
			<Routes>
				<Route index element={<Home />} />
				<Route path="/oauth" element={<Oauth />} />
			</Routes>
		);
	}
}

export { App };
