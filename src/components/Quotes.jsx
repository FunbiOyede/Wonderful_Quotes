import React from 'react';
import Quote from './Quote';
import PropTypes from 'prop-types';
const Quotes = (props) =>{
    let quote =  props.quotes.map((q,index)=> <Quote q={q.quote} key={index} id={index} DeleteQuote={props.DeleteQuote}/>)
    return(
        <h2>{quote}</h2>
    )
}


Quotes.propType = {
    quotes:PropTypes.array

}
export default Quotes;