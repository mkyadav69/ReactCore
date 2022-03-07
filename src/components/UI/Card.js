import React from 'react';
import '../UI/Card.css';

let Card  = (props) =>{
    const classes  ='card '+props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;