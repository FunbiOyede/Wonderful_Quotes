import React, {Component} from 'react';
export const ContextApp = React.createContext();

class AppContext extends Component{
    state = {
        name:"funbi"
    }
    render(){
        return(
            <ContextApp.Provider value={this.state}>
                    {this.props.children}
            </ContextApp.Provider>
        );
    }
}

export default AppContext;