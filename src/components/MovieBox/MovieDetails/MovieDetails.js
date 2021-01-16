import React from 'react';
import classes from './MovieDetails.module.css';

const movieDetail=(props)=>{
  return(
    <div className={classes.MovieDetails}>
      <h1>{props.movieName}</h1>
      <p>Casts: {props.casts}</p>
      <p>Directed By: {props.director}</p>
      <p>Year of release: {props.yor}</p>
      <p>{props.plot}</p>
      <p>IMDB Ratings: {props.imdbratings}</p>
      <p>Movie ID: {props.mID}</p>
    </div>
  );
}

export default movieDetail;
