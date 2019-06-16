import React from 'react';

const Quote = (props) =>{
    const {q,id} = props;
  return(
    <p onClick={() =>props.DeleteQuote(id)}>{q}</p>
  );
}

export default Quote;