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
                        <h3>School</h3>
                        <h4>Location</h4>
                        <ul>
                            <li>Certificate or Degree</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default EducationPage;