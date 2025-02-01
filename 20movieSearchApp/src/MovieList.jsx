import React, { useState } from 'react';
import useFetch from './hooks/useFetch';

const createOptions = (keyword) => ({
  method: 'GET',
  url: `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${keyword}`,
  headers: {
    'x-rapidapi-key': 'd9d0cbf6d3msh0d8e26c92e3eb18p1b2aadjsn8983511791bf',
    'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
  }
});

function MovieList() {
  const [keyword, setKeyword] = useState("");
  const [search, setSearch] = useState("");
  const { data, loading, error } = useFetch(createOptions(search));

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };
  
  const handleSearch = debounce((value) => setSearch(value), 500);

  return (
    <div>
      <input 
        type="text"
        value={keyword}
        placeholder='Enter Movie Name...'
        onChange={(e) => setKeyword(e.target.value)}
      />
    <button onClick={() => handleSearch(keyword)}>Search</button>

      {loading && <p>Loading Movie...</p>}
      {error && <p>Error: {error.message}</p>}

      {data?.results?.map((movie) => (
        <div key={movie.id}> 
          <h2>{movie.titleText?.text}</h2>
          <p>{movie.releaseYear?.year}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
