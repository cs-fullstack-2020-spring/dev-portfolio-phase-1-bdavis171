import React, { Component } from 'react';

class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id='projects-container'>
                <div id="projects-header">
                    <h2>Projects</h2>
                </div>

                <div id="project-1">
                    <div id="project-1-img">
                        <a href="https://digimon-search.herokuapp.com/" target='_blank'>
                        <img src="./digimon-search-app-image.png" alt="Project 1"/>
                        </a>
                    </div>

                    <div id="project-1-description">
                        <p><em>Digimon Search App</em></p>
                        <p>This application allows the user search for a Digimon by name, attribute, or generation, and if those Digimon appear in the database, the applicaition displays their information.</p>
                    </div>
                </div>

                <div id="project-2">
                    <div id="project-2-img">
                        <a href="https://trex-logistics.herokuapp.com/" target='_blank'>
                        <img src="/trex-logistics-image.png" alt="Project 2"/>
                        </a>
                    </div>

                    <div id="project-2-description">
                        <p><em>Trex Logistics</em></p>
                        <p>This application allows users to send packages and check the status of packages that they have sent or are recieving.</p>
                    </div>
                </div>

                <div id="project-3">
                    <div id="project-3-img">
                        <a href="https://github.com/bdavis171/Coding_Projects/tree/master/character-bio-app" target='_blank'>
                        <img src="/character-bio.png" alt="Project 3"/>
                        </a>
                    </div>

                    <div id="project-3-description">
                        <p><em>Create Character Bio:</em></p>
                        <p>This website lets you create a character by entering their name, age, date of birth, gender, and a bio for them. Once submitted, the characters you have created will display on the page.</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ProjectsPage;