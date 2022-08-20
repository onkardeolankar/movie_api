import React, { useState } from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState("");

	const getMovies= async=(url)=>{
		setIsLoading(true);
		try{
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);
			if (data.Response === "True") {
				setIsLoading(false);
				setMovie(data.Search);
			} else {
				setIsError({
					show: true,
					msg: data.Error,
				});
			}
		} catch (error) {
			console.log(error);
		}
		
	};

	useEffect(() => {
		let timerOut= setTimeout(() =>{
			getMovies(`${API_URL}`);
		},1000);
		return () => clearTimeout(timerout)
	}, [query]);
	return (
		<>
			<div>Our Single Movie {id}</div>
		</>
	);
};

export default SingleMovie;
