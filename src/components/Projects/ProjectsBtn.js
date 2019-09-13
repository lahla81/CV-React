import React, { Component } from 'react';

class ProjectsBtn extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return false;
    }

    render(){
        const onProjectsChange = this.props.onProjectsChange
        console.log('ProjectsBtn')
        return (
            <div>
                <button className="btn c-btn m-1" onClick={() => onProjectsChange('')}>ALL</button>
                <button className="btn c-btn m-1" onClick={() => onProjectsChange('Fiber')}>Fiber Optics</button>
                <button className="btn c-btn m-1" onClick={() => onProjectsChange('OHTL')}>OHTL</button>
            </div>
        ); 
    }
}

export default ProjectsBtn;
