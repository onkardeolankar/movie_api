import React, { useState } from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState([]);
	const [query, setQuery] = useState("titanic");
	return (
		<>
			<div>Our Single Movie {id}</div>
		</>
	);
};

export default SingleMovie;
