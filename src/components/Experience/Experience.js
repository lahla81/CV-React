import React from 'react';
import './Experience.css';
import AllExperience from './AllExperience';
import {ExperienceArray} from './ExperienceArray';
import Next from '../Next/Next';

function Experience({onRouteChange}) {
  return (
    <div>
      <section id="experience">
          <div className="experience-title d-title title text-center">
              <h2>EXPERIENCE</h2>
          </div>
          <AllExperience ExperienceArray = {ExperienceArray} onRouteChange={onRouteChange} />
          <Next onRouteChange={onRouteChange} next='Education' />
      </section>
    </div>
  );
}

export default Experience;
