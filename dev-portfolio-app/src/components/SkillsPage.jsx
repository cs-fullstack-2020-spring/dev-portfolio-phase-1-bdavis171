import React, { Component } from 'react';

class SkillsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id='skills-container'>
                <div id="skills-header">
                    <h2>Skills</h2>
                </div>
                
                <div id="skills-img">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png" alt="html5"/>

                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="css3"/>

                    <img src="https://wildcardcorp.com/image-repository/javascript-icon.png/@@images/image.png" alt="javascript"/>

                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="react"/>

                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" alt="c++"/>
                </div>
            </div>
         );
    }
}
 
export default SkillsPage;