import React from 'react';
import Link from './Link/Link';
import classes from './OtherLinks.module.css';

const otherLinks=(props)=>{
  return(
    <div className={classes.OtherLinks}>
    <Link LinkText="IMDB Top"/>
    <Link LinkText="2019 Top"/>
    </div>
  );
}

export default otherLinks;
