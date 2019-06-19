import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) =>{
    return(
        <form action="">
            <textarea onChange={props.getQuotes} />
            <button onClick={props.submitQuotes}>Add Quote</button>
        </form>
       
    );
}

Input.propTypes = {
    getQuotes: PropTypes.func,
    submitQuotes: PropTypes.func
}
export default Input;