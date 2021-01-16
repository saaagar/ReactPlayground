import React from 'react';
import classes from './Link.module.css';

const link=(props)=>{
  return(
    <p className={classes.Link} >{props.LinkText}</p>
  );
}

export default link;
