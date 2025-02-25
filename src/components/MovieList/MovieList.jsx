

const MovieList = ({movies}) => {
	return (
		<ul>
			{movies.map((movie) => {
				return (
					<li key={movie.id}>
						<h2>{movie.original_title}</h2>
					</li>
				)
			})}
		</ul>
	);
};

export default MovieList;