import React, { Component } from 'react';
import {Document, Page} from 'react-pdf';

class ResumePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id='resume-container'>
                <div id="resume-header">
                    <h2>Resume</h2>
                </div>

                <div id="resume-pdf">
              <object id="resume" data="./resume.pdf#page=1" type="application/pdf" width='600px' height='508px'>Not here</object>
                </div>
            </div>
         );
    }
}
 
export default ResumePage;