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
                    <a href="https://en.wikipedia.org/wiki/HTML5" target='_blank'>
                    <img src="/html-logo.png" alt="html5" id='html5'/>
                    </a>

                    <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target='_blank'>
                    <img src="/css-logo.png" alt="css3" id='css3'/>
                    </a>

                    <a href="https://en.wikipedia.org/wiki/JavaScript" target='_blank'>
                    <img src="/javascript-logo.png" alt="javascript" id='javascript'/>
                    </a>

                    <a href="https://en.wikipedia.org/wiki/React_(web_framework)" target='_blank'>
                    <img src="/react-logo.png" alt="react" id='react'/>
                    </a>

                    <a href="https://en.wikipedia.org/wiki/C%2B%2B" target='_blank'>
                    <img src="/cplusplus-logo.png" alt="c++" id='cplusplus'/>
                    </a>

                    <a href="https://en.wikipedia.org/wiki/Node.js" target='_blank'>
                    <img src="/node-logo.png" alt="node" id='node'/>
                    </a>
                </div>
            </div>
         );
    }
}
 
export default SkillsPage;