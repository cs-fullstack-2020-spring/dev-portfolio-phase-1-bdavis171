import React, { Component } from 'react';

class EducationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id='education-container'>
                <div id="education-header">
                    <h2>Education</h2>
                </div>

                <div id="education-description">
                    <div id="education-1">
                        <h3>CodeCrew Code School; 2020</h3>
                        <h4>Memphis, TN</h4>
                        <ul>
                            <li>Software Development Bootcamp</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default EducationPage;