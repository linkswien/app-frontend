import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import store from '../app/store';
import { logIn } from '../slices/userSlice';

export default function Oauth() {
	const navigate = useNavigate();
	const [code, setCode] = useState('');

	const queryString = useLocation().search;
	const queryParams = new URLSearchParams(queryString);
	const rawCode = queryParams.get('code');

	useEffect((): void => {
		setCode(rawCode != null ? rawCode : '');

		if (code == null) {
			navigate('/');
			return;
		}
		if (code == '') return;

		const headers = new Headers();
		headers.append('Content-Type', 'multipart/form-data');
		const body = new FormData();
		body.append('code', code);
		body.append('redirectUri', `${process.env.REACT_APP_SERVER_URL}/oauth`);

		fetch('https://dev.backend.app.links-wien.at/api/v1/login', {
			method: 'POST',
			body,
		})
			.then((response) => response.json())
			.then((res) => {
				store.dispatch(logIn(res.access_token));
			})
			.catch((err) => console.log('Error when calling api/v1/login: ', err));
	}, [rawCode, code, navigate]);

	return (
		<div>
			<h1>Oauth:</h1>
			<p>
				Code: <br /> {code}
			</p>
		</div>
	);
}
