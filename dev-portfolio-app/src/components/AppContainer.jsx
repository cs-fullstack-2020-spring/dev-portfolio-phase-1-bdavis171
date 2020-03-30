import React, { Component } from 'react';
import WelcomePage from './WelcomePage';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <WelcomePage/>
            </div>
         );
    }
}
 
export default AppContainer;