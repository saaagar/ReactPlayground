import React from 'react';
import classes from './SearchBox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const searchBox=(props)=>{
  return(
    <div className={classes.SearchBar}>
    <input type='text' className={classes.SearchInput} placeholder='Search Movies' onChange={props.textchanged} onKeyPress={props.keypressed}/>
    <button className={classes.SearchButton} onClick={props.clicked}>
    <FontAwesomeIcon icon={faSearch} />
    </button>
    </div>
  );
}

export default searchBox;
