import React, { Component } from 'react';
import SkillsPage from './SkillsPage';
import ProjectsPage from './ProjectsPage';
import EducationPage from './EducationPage';
import ResumePage from './ResumePage';
import ContactPage from './ContactPage';

class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAbout: true,
            isSkils: false,
            isProjects: false,
            isEducation: false,
            isResume: false,
            isContact: false
        }
    }

    // handle navigation button presses
    handleNavigation = (event) => {
        if (event.target.name === 'about') {
            this.setState({
                isAbout: true,
                isSkils: false,
                isProjects: false,
                isEducation: false,
                isResume: false,
                isContact: false
            })
        }
        else if (event.target.name === 'skills'){
            this.setState({
                isAbout: false,
                isSkils: true,
                isProjects: false,
                isEducation: false,
                isResume: false,
                isContact: false
            })
        }
        else if (event.target.name === 'projects'){
            this.setState({
                isAbout: false,
                isSkils: false,
                isProjects: true,
                isEducation: false,
                isResume: false,
                isContact: false
            })
        }
        else if (event.target.name === 'education'){
            this.setState({
                isAbout: false,
                isSkils: false,
                isProjects: false,
                isEducation: true,
                isResume: false,
                isContact: false
            })
        }
        else if (event.target.name === 'resume'){
            this.setState({
                isAbout: false,
                isSkils: false,
                isProjects: false,
                isEducation: false,
                isResume: true,
                isContact: false
            })
        }
        else if (event.target.name === 'contact'){
            this.setState({
                isAbout: false,
                isSkils: false,
                isProjects: false,
                isEducation: false,
                isResume: false,
                isContact: true
            })
        }
    }

    // display page
    render() {
        let navigation;
        if (this.state.isAbout){
            navigation=<div>
                <h1>About</h1>
            </div>;
        }
        else if (this.state.isSkils){
            navigation=<SkillsPage/>;
        }
        else if (this.state.isProjects){
            navigation=<ProjectsPage/>;
        }
        else if (this.state.isEducation){
            navigation=<EducationPage/>;
        }
        else if (this.state.isResume){
            navigation=<ResumePage/>;
        }
        else if (this.state.isContact){
            navigation=<ContactPage/>;
        }
        return (
            <div>
                <button onClick={this.handleNavigation} name='about'>About</button>
                <button onClick={this.handleNavigation} name='skills'>Skills</button>
                <button onClick={this.handleNavigation} name='projects'>Projects</button>
                <button onClick={this.handleNavigation} name='education'>Education</button>
                <button onClick={this.handleNavigation} name='resume'>Resume</button>
                <button onClick={this.handleNavigation} name='contact'>Contact</button>
                {navigation}
                <p>Designed by Brandon Davis</p>
            </div>
        );
    }
}

export default AboutPage;