import React from 'react';
import classes from './SearchResult.module.css';
import { Container, Row,Col } from 'reactstrap';


const searchResult=(props)=>{
  let img=props.moviePoster;
  if(props.moviePoster==="N/A"){
    img="https://in.bmscdn.com/iedb/movies/images/website/poster/large/ela-cheppanu-et00016781-24-03-2017-18-31-40.jpg";
  }
  return(
    <Col xs="3">
    <div className={classes.SearchResult} onClick={props.clicked}>
    <div className={classes.MoviePoster}>
    <img src={img} alt={props.movieName}/>
    </div>

    {/*
      <div className={classes.MovieDetails}>
      <h3>{props.movieName}</h3>
      <p>Year of release: {props.movieYear}</p>
      </div> */
    }
    </div>
    </Col>
  );
}

export default searchResult;
