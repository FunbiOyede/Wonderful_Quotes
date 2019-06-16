import React from 'react';
import Quote from './Quote'
const Quotes = (props) =>{
    let quote =  props.quotes.map((q,index)=> <Quote q={q.quote} key={index} id={index} DeleteQuote={props.DeleteQuote}/>)
    return(
        <h2>{quote}</h2>
    )
}

export default Quotes;