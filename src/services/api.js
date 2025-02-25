import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2E4YjJiMjhhYzBhMjZkZTViM2NmYzcwYzM4ZWRiYiIsIm5iZiI6MTc0MDQ3OTEzNi40ODE5OTk5LCJzdWIiOiI2N2JkOWFhMGViOWQ3NWE2MTM1OTlkZTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fiDLdtvRiAw4ZxioicJACCzw3GKkEYCzCixZZ4lqw-4'

export const fetchPopularMovies = async () => {
	const { data } = await axios.get("/movie/popular", {
		params: {
			language: "en-US",
			page: 1,
		},
	});
	return data;
};

export const fetchMovieSearch = async(query) => {
	const {data} = await axios.get(`/search/movie?query=${query}`)
	return data
}