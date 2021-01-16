import React,{Component} from 'react';
import classes from './MovieBox.module.css';
import MoviePoster from './MoviePoster/MoviePoster';
import MovieDetails from './MovieDetails/MovieDetails';
import axios from 'axios';

class MovieBox extends Component{
  state={
    movieDetail:[]
  }
componentDidMount(){
  axios.get('https://www.omdbapi.com/?apikey=6b5e5d9b&i='+this.props.movieID).then(response=>{
    this.setState({movieDetail:response.data});
  });
}
  render(){
    let bgUrl=this.state.movieDetail.Poster;
    return(
      <div className={classes.MovieBox} style={{backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      background:"linear-gradient(rgba(0, 0, 0, 0.63),rgba(0, 0, 0, 0.63)),url('"+bgUrl+"')",
      color:'green'}}>
      <div className={classes.inner}>
      <MoviePoster moviePoster={this.state.movieDetail.Poster}/>
      <MovieDetails
        mID={this.props.movieID}
        movieName={this.state.movieDetail.Title}
        casts={this.state.movieDetail.Actors}
        director={this.state.movieDetail.Director}
        yor={this.state.movieDetail.Released}
        plot={this.state.movieDetail.Plot}
        imdbratings="9.7"
      />
      </div>
      </div>
    );
  }
}

export default MovieBox;
