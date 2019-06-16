import React from 'react';

const Input = (props) =>{
    return(
        <form action="">
            <textarea onChange={props.getQuotes} />
            <button onClick={props.submitQuotes}>Add Quote</button>
        </form>
       
    );
}

export default Input;