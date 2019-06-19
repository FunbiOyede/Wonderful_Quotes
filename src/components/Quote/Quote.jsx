import React from 'react';
import PropTypes from 'prop-types';

const Quote = (props) =>{
    const {q,id} = props;
  return(
    <p onClick={() =>props.DeleteQuote(id)}>{q}</p>
  );
}

Quote.propTypes = {
  q: PropTypes.string,
  id: PropTypes.number,
  DeleteQuote: PropTypes.func
}
export default Quote;