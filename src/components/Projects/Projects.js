import React,{Component} from 'react';
import './projects.css';
import AllProjects from './AllProjects';
import {projectsArray} from './ProjectsArray';
import ProjectsBtn from './ProjectsBtn';

class Projects extends Component {
  constructor(){
    super();
    this.state = {
      projects: projectsArray,
      category: ''
    }
  }
  onAllClick = () => {
    this.setState({ category: '' })
  }
    
  onFiberClick = () => {
    this.setState({ category: 'Fiber Optics' })
  }
  OnOhtlProjectClick = () => {
    this.setState({ category: 'OHTL' })
  }
  
  render(){
    const filteredProjects = this.state.projects.filter(project => {
      return project.category.includes(this.state.category)
    })
    return (
      <section id="projects">
        <div className="title text-center">
            <h2>PROJECTS</h2>
        </div>
        <div className="container text-center">
            <div className="gallery">
                <ProjectsBtn onAllClick={this.onAllClick} OnOhtlProjectClick={this.OnOhtlProjectClick} onFiberClick={this.onFiberClick}/>
                <AllProjects projectsArray={filteredProjects} />            
            </div>
        </div>
      </section>
    )
  }
  
}

export default Projects;
