import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
		body.append('redirectUri', 'http://localhost:8080/oauth');

		body.forEach((val, key) => console.log(`${key}, '${val}'`));

		fetch('https://dev.backend.app.links-wien.at/api/v1/login', {
			method: 'POST',
			//headers,
			body,
			mode: 'no-cors',
			redirect: 'follow',
			//credentials: 'include',
			referrerPolicy: 'origin-when-cross-origin',
		})
			.then((response) => {
				console.log(response);
				response.text();
			})
			.then((result) => console.log(result))
			.catch((error) => console.log('error', error));
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
