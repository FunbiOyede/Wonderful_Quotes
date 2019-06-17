import React from 'react';
import {ContextApp} from './AppContext'
const TextContext = () =>{
    return(
        <div>
            <ContextApp.Consumer>
                    {(context) => context.name}
            </ContextApp.Consumer>

        </div>
    );
}

export default TextContext;