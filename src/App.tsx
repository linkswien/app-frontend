import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Oauth from './pages/Oauth';
import Home from './pages/Home';

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
