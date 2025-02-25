import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import MoviesPage from './pages/MoviesPage/MoviesPage.jsx';

const App = () => {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/movies' element={<MoviesPage />} />
			</Routes>
		</div>
	);
};

export default App;