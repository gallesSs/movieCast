import MovieList from '../../components/MovieList/MovieList.jsx';
import {useEffect, useState} from 'react';
import {fetchPopularMovies} from '../../services/api.js';


const HomePage = () => {

	const [movieList, setMovieList] = useState([])

	useEffect(() => {
		const getData = async() => {
			const response = await fetchPopularMovies()
			setMovieList(response.results)
		}
		getData()
	}, []);
	return (
		<div>
			<h1>Trending today</h1>
			<MovieList movies={movieList} />
		</div>
	);
};

export default HomePage;