import React from 'react';
import classes from './MoviePoster.module.css';

const moviePoster=(props)=>{
  return(
    <div className={classes.MoviePoster}>
    <img src={props.moviePoster} alt="movie name"/>
    </div>
  );
}
export default moviePoster;
