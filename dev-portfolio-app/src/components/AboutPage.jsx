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
            navigation=<div id='about-container'>
                <div id="about-header">
                    <h2>About</h2>
                </div>

                <div id="about-img">
                    <img src="https://i.pinimg.com/originals/9d/93/fb/9d93fb66ee15d9f7a9e458f6f26f6898.png" alt="Brandon Davis"/>
                </div>

                <div id="about-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A incidunt voluptatem aliquam. Qui, eligendi autem, ipsa possimus iure id ipsum nesciunt, corrupti et amet voluptatum repudiandae quisquam laborum iusto? Ipsa illum tempora cupiditate laudantium odit autem deleniti, ea recusandae laborum, voluptatum accusantium, nemo quam corporis vero eum laboriosam culpa modi cum. Modi quaerat reiciendis vel in, possimus obcaecati commodi cum voluptate quae illo asperiores amet iure, consectetur rem ducimus odio provident nam fugit est neque repellendus magnam eos unde? Iusto at, aliquid voluptatibus quis nesciunt illum ab hic totam cumque dolore vitae, nulla voluptates maiores? Hic at similique incidunt dignissimos!</p>
                </div>
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
            <div id='general-container'>
                <div id="navigation-bar">
                <button onClick={this.handleNavigation} name='about'>About</button>
                <button onClick={this.handleNavigation} name='skills'>Skills</button>
                <button onClick={this.handleNavigation} name='projects'>Projects</button>
                <button onClick={this.handleNavigation} name='education'>Education</button>
                <button onClick={this.handleNavigation} name='resume'>Resume</button>
                <button onClick={this.handleNavigation} name='contact'>Contact</button>
                </div>
                
                <div id="page-display">
                    {navigation}
                </div>
                
                <div id="footer">
                    <p>Designed by Brandon Davis</p>
                </div>
                
            </div>
        );
    }
}

export default AboutPage;