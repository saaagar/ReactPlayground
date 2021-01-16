import React from 'react';
import SearchBox from './SearchBox/SearchBox';
import OtherLinks from './OtherLinks/OtherLinks';
import classes from './Header.module.css';
import  Logo from './Logo/Logo';

const header=(props)=>{
  return(
    <div className={classes.Header} >
    <Logo clicked={props.homeClicked}/>
    <SearchBox clicked={props.searchClick} textchanged={props.searchKey} keypressed={props.pressed}/>
    <OtherLinks/>
    </div>
  )
}

export default header;
