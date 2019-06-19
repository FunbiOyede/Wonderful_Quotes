import React, {Component} from 'react';
export const ContextApp = React.createContext();

class AppContext extends Component{
    state = {
        name:"funbi",
    }
    render(){
        return(
            <div>
                 <ContextApp.Provider value={this.state}>
                    {this.props.children}
            </ContextApp.Provider>
            </div>
           
        );
    }
}

export default AppContext;