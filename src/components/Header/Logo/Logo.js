import React from 'react';
import movieLogo from '../../../assets/images/logo.png';
import classes from './Logo.module.css';

const logo=(props)=>(
  <div className={classes.Logo} style={{height:props.height}} onClick={props.clicked}>
  <img src={movieLogo} alt="MovieMagnet" />
  </div>
);

export default logo;
