import React from 'react';
import Quote from '../Quote/Quote';
import PropTypes from 'prop-types';
const Quotes = (props) =>{
    let quote =  props.quotes.map((q,index)=> <Quote q={q.quote} key={index} id={index} DeleteQuote={props.DeleteQuote}/>)
    return(
        <div>{quote}</div>
    )
}


Quotes.propType = {
    quotes:PropTypes.array

}
export default Quotes;