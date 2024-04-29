import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import { Layout } from './components/Layout';

function App() {
	return (
		<Layout>
			<div className="wrap">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
				</Routes>
			</div>
		</Layout>
	);
}

export default App;
