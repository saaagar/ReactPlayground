import React from 'react';
import SearchResult from './SearchResult/SearchResult';
import classes from './SearchResults.module.css';
import { Container, Row } from 'reactstrap';


const movieSearch=(props)=>{
  const movielist=props.movies.map(movie=>{
    return <SearchResult
     movieName={movie.Title}
     key={movie.imdbID}
     moviePoster={movie.Poster}
     movieYear={movie.Year}
     clicked={()=>props.movieSelected(movie.imdbID)}
     />
  });

  return(
    <div>
    <h2 className={classes.TopText}>Search Results</h2>
    <Row>
    {movielist}
    </Row>
    </div>
  );
}

export default movieSearch;
