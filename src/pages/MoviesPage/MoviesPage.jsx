import React, {useEffect, useState} from 'react';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import {fetchMovieSearch} from '../../services/api.js';
import MovieList from '../../components/MovieList/MovieList.jsx';

const MoviesPage = () => {
	const [query, setQuery] = useState('')
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		if (query) {
			const getData = async () => {
				const response = await fetchMovieSearch(query)
				setMovies(response.results)
			}
			getData()
		}
	}, [query]);


	const onSubmit = (value, {resetForm}) => {
		setQuery(value.query)
		resetForm()
	}

	return (
		<div>
			<SearchBar onSubmit={onSubmit}/>
			<MovieList movies={movies} />
		</div>
	);
};

export default MoviesPage;