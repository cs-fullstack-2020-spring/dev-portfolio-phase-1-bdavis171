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
        else if (event.target.name === 'skills') {
            this.setState({
                isAbout: false,
                isSkils: true,
                isProjects: false,
                isEducation: false,
                isResume: false,
                isContact: false
            })
        }
        else if (event.target.name === 'projects') {
            this.setState({
                isAbout: false,
                isSkils: false,
                isProjects: true,
                isEducation: false,
                isResume: false,
                isContact: false
            })
        }
        else if (event.target.name === 'education') {
            this.setState({
                isAbout: false,
                isSkils: false,
                isProjects: false,
                isEducation: true,
                isResume: false,
                isContact: false
            })
        }
        else if (event.target.name === 'resume') {
            this.setState({
                isAbout: false,
                isSkils: false,
                isProjects: false,
                isEducation: false,
                isResume: true,
                isContact: false
            })
        }
        else if (event.target.name === 'contact') {
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
        if (this.state.isAbout) {
            navigation = <div id='about-container'>
                <div id="about-header">
                    <h2>About</h2>
                </div>

                <div id="about-img">
                    <img src="/dragon.png" alt="Brandon Davis" />
                </div>

                <div id="about-description">
                    <p>My name is Brandon Davis, and I am a very passionate software developer born and raised right here in Memphis,TN. I attended CodeCrew Code School for 6 months, learning and refining my coding skills to be the best they can be.</p>
                    <p>My goal is to design video games, though that doesn't mean I won't do other projects. From designin webpages to back-end functionality, I put my best effort into all my projects and work to surpass all expectations set before me.</p>
                </div>
            </div>;
        }
        else if (this.state.isSkils) {
            navigation = <SkillsPage />;
        }
        else if (this.state.isProjects) {
            navigation = <ProjectsPage />;
        }
        else if (this.state.isEducation) {
            navigation = <EducationPage />;
        }
        else if (this.state.isResume) {
            navigation = <ResumePage />;
        }
        else if (this.state.isContact) {
            navigation = <ContactPage />;
        }
        return (
            <div id='general-container'>
                <div id="general-header">
                    <div id="navigation-bar">
                        <button onClick={this.handleNavigation} name='about'>About</button>
                        <button onClick={this.handleNavigation} name='skills'>Skills</button>
                        <button onClick={this.handleNavigation} name='projects'>Projects</button>
                        <button onClick={this.handleNavigation} name='education'>Education</button>
                        <button onClick={this.handleNavigation} name='resume'>Resume</button>
                        <button onClick={this.handleNavigation} name='contact'>Contact</button>
                    </div>
                </div>

                <div id="page-display">
                    {navigation}
                </div>

                <div id="footer">
                    <span>Brandon Davis 2020</span>
                    <a href="https://github.com/bdavis171" target='_blank'>GitHub</a>
                </div>

            </div>
        );
    }
}

export default AboutPage;