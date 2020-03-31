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
                        <img src="./maze_game-img.png" alt="Project 1"/>
                    </div>

                    <div id="project-1-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quaerat corporis! Praesentium a blanditiis illum, adipisci doloribus repellendus distinctio reiciendis?</p>
                    </div>
                </div>

                <div id="project-2">
                    <div id="project-2-img">
                        <img src="/pkebtl1-img.png" alt="Project 2"/>
                    </div>

                    <div id="project-2-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quaerat corporis! Praesentium a blanditiis illum, adipisci doloribus repellendus distinctio reiciendis?</p>
                    </div>
                </div>

                <div id="project-3">
                    <div id="project-3-img">
                        <img src="" alt="Project 3"/>
                    </div>

                    <div id="project-3-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quaerat corporis! Praesentium a blanditiis illum, adipisci doloribus repellendus distinctio reiciendis?</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ProjectsPage;