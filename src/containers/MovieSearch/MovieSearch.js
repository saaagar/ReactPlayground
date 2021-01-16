import React,{Component} from 'react';
import axios from 'axios';
import Aux from '../../hoc/ReactAux';
import Header from '../../components/Header/Header';
import MovieBox from '../../components/MovieBox/MovieBox';
import SearchResults from '../../components/SearchResults/SearchResults';
import HomePage from '../../components/HomePage/HomePage';

class MovieSearch extends Component{
  state={
    movies:[],
    searchKey:"one flew over the cuckoo's nest",
    showSearch:false,
    selectedMovieId:null,
    showMovie:false,
    showHome:true
  }
  searchHandler=()=>{
    this.getData(this.state.searchKey);
    this.setState({showSearch:true,showMovie:false,showHome:false});
  }
  setTheSearchState=(event)=>{
    this.setState({searchKey:event.target.value});
  }
  movieSelectedHandler=(movId)=>{
    this.setState({showMovie:true,selectedMovieId:movId,showSearch:false,showHome:false});
  }
  homeClickedHandler=()=>{
    this.setState({showHome:true,showMovie:false,showSearch:false});
  }
  getData=(skey)=>{
    axios.get('https://www.omdbapi.com/?apikey=6b5e5d9b&s='+skey).then(response=>{
      this.setState({movies:response.data.Search});
    });
  }
  keyPressedHandler=(event)=>{
    if(event.key==='Enter'){
      this.getData(this.state.searchKey);
      this.setState({showSearch:true,showMovie:false,showHome:false});
    }
  }
  componentDidMount(){
    // axios.get('http://www.omdbapi.com/?apikey=6b5e5d9b&s=lord').then(response=>{
    //   this.setState({movies:response.data.Search});
    // });
  }
  render(){
    let disp="";
    const movies=this.state.movies;
    if(this.state.showHome){
      disp=<HomePage/>
    }
    if(this.state.showSearch){
      disp=<SearchResults movies={movies} movieSelected={this.movieSelectedHandler} />;
    }
    if(this.state.showMovie){
      disp=<MovieBox movieID={this.state.selectedMovieId}/>
    }
    return(
      <Aux>
      <Header searchClick={this.searchHandler} searchKey={this.setTheSearchState} homeClicked={this.homeClickedHandler} pressed={this.keyPressedHandler}/>
      {disp}
      </Aux>
    );
  }
}

export default MovieSearch;
// http://www.omdbapi.com/?apikey=6b5e5d9b&s=lord
