import React from 'react';
import { useContext, useEffect, useState } from "react";
import useFetch from "./useFetch";

// export const API_URL = `http://www.omdbapi.com/?&apikey=${process.env.REACT_API_KEY}`;
// export const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=6ac27309";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [query, setQuery] = useState("hacker");
	const { isLoading, isError, movie } = useFetch(`&s=${query}`);
  
	return (
	  <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError }}>
		{children}
	  </AppContext.Provider>
	);
  };
  
  const useGlobalContext = () => {
	return useContext(AppContext);
  };
  
  export { AppContext, AppProvider, useGlobalContext };
