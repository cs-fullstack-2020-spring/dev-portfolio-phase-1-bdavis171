import React, { Component } from 'react';
import AboutPage from './AboutPage';

class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doesEnter: false
        }
    }

    // determine whether or not the enter button is pressed
    handleEnter = (event) => {
        this.setState({ doesEnter: true });
    }

    // display page
    render() {
        let enterSite;

        if (this.state.doesEnter) {
            enterSite = <AboutPage />;
        }

        else {
            enterSite = <div id='welcome-container'>
                <div id="welcome-header">
                    <h1>Welcome, Visitor!</h1>
                </div>

                <div id="enter-button">
                    <button onClick={this.handleEnter}>Enter</button>
                </div>
                
            </div>
        }

        return (
            <div>
               
            {enterSite}

            </div>
        );
    }
}

export default WelcomePage;