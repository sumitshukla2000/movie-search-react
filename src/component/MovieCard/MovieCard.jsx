import React from 'react';
import classes from '../../App.module.css';


const MovieCard = (props) => {
    const movie = props.Type;
    const upperCase = movie[0].toUpperCase() + movie.slice(1); 
    return(
        <div className={classes.Container}>
      <div className={classes.Year}>
          <p>{props.Year}</p>
      </div>
      <img src={props.Poster !== 'N/A' ? 
      props.Poster :
       "http://via.placeholder.com/400"} alt="" />

      <div className={classes.Bottom}>
          <p>
           {upperCase}
          </p>

          <h3>
            {props.Title}
          </h3>
      </div>
      </div>
    )
}

export default MovieCard;