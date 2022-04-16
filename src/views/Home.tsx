import { useAppSelector } from '../app/hooks';

const Home = () => {
	const isLogged = useAppSelector((state) => state.user.isLogged);
	return (
		<div>
			<p>Home</p>
			{!isLogged && (
				<button
					onClick={() =>
						window.location.assign(
							'https://dev.backend.app.links-wien.at/login-redirect?redirectUri=http://localhost:8080/oauth',
						)
					}
				>
					Log In
				</button>
			)}
		</div>
	);
};
export default Home;
