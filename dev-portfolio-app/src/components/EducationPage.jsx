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
                        <h3>CodeCrew Code School: Feb 2020 - July 2020</h3>
                        <h4>Memphis, TN</h4>
                        <ul>
                            <li>Software Development Bootcamp</li>
                            <li>Microsoft Technology Associate: Inroduction to <br/> Programming Using JavaScript</li>
                        </ul>
                        <a href="https://www.code-crew.org/" target="_blank"><img src="/codecrewlogo.png" alt="CodeCrew"/></a>
                    </div>

                    <div id="education-2">
                        <h3>Central High School: Aug 2012 - May 2016</h3>
                        <h4>Memphis, TN</h4>
                        <ul>
                            <li>GPA: 4.0</li>
                            <li>High School Diploma</li>
                        </ul>
                        <a href="https://schools.scsk12.org/central-hs" target="_blank"><img src="/centralhighlogo.png" alt="Central High School" width="150px"/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default EducationPage;