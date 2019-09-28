import React,{Component} from 'react';
import { connect } from 'react-redux';
import './projects.css';
import AllProjects from './AllProjects';
import ProjectsBtn from './ProjectsBtn';
import { projectsArray } from './ProjectsArray';
import SecHeaders from '../SecHeaders/SecHeaders';
import { setProjects } from '../actions';

const mapStateToProps = state => {
  return {
    category: state.projectsChange.category
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onProjectsChange: (event) => dispatch(setProjects(event))
  }
}

class Projects extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
    }
  }

  componentDidMount(){
    this.setState({ projects: projectsArray })
  }

  render(){
    const { category , onProjectsChange } = this.props;
    const filteredProjects = this.state.projects.filter(project => {
      return project.category.includes(category)
    })
    
    return (
      <section id="projects">
        <SecHeaders name={'PROJECTS'}/>
        <div className="container text-center">
            <div className="gallery">
                <ProjectsBtn onProjectsChange = {onProjectsChange}/>
                <AllProjects projectsArray={filteredProjects} />            
            </div>
        </div>
      </section>
    )
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(Projects);
