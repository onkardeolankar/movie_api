import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "./context";

const SingleMovie = () => {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [movie, setMovie] = useState("");
	const [isError, setIsError] = useState("");

	const getMovies= async(url)=>{
		setIsLoading(true);
		try{
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);
			if (data.Response === "True") {
				setIsLoading(false);
				setMovie(data);
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
			getMovies(`${API_URL}&i=${id}`);
		},1000);
		return () => clearTimeout(timerOut)
	}, [id]);

	if(isLoading){
        return(
            <div className="movie-section">
                <div className='loading'>Loading...</div>
            </div>
        );
    }
	return (
		<>
			<div>Our Single Movie {id}</div>
		</>
	);
};

export default SingleMovie;
