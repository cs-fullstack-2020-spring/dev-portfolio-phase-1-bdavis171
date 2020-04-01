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
                        <a href="https://github.com/bdavis171/Coding_Projects/tree/master/maze_game" target='_blank'>
                        <img src="./maze_game-img.png" alt="Project 1"/>
                        </a>
                    </div>

                    <div id="project-1-description">
                        <p><em>Maze Game:</em></p>
                        <p>This is game where you have to get through a maze, but you are only given which direction you can go. Use the buttons and make it out of the maze as best you can.</p>
                    </div>
                </div>

                <div id="project-2">
                    <div id="project-2-img">
                        <a href="https://github.com/bdavis171/Coding_Projects/tree/master/pokemon-battle-1" target='_blank'>
                        <img src="/pkebtl1-img.png" alt="Project 2"/>
                        </a>
                    </div>

                    <div id="project-2-description">
                        <p><em>Pokemon Battle: Typholsion vs Blastoise:</em></p>
                        <p>This is game that simulates a battle between two pokemon, Typholsion, the Volcano Pokemon, and Blastoise, the Shellfish Pokemon. Take control of Typholsion and try to defeat the Blastoise that stands before you.</p>
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