import React from 'react';
import { ContextApp } from '../Context/AppContext'

const Header = (props) =>{
    return(
        <h2>
        <ContextApp.Consumer>
            {(context) => context.title}
        </ContextApp.Consumer>
        </h2>
    );
}

export default Header;