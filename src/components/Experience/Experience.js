import React, { Component } from 'react';
import './Experience.css';
import AllExperience from './AllExperience';
import {ExperienceArray} from './ExperienceArray';
import SecHeaders from '../SecHeaders/SecHeaders';

class Experience extends Component{
  render(){
    const onRouteChange = this.props
    console.log('Experience')
    return (
      <div>
        <section id="experience">
            <SecHeaders name={'EXPERIENCE'}/>
            <AllExperience ExperienceArray = {ExperienceArray} onRouteChange={onRouteChange} />
        </section>
      </div>
    );
  }
}

export default Experience;
