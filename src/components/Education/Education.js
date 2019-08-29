import React from 'react';
import './education.css';
import AllEducation from './AllEducation';
import {EducationArray} from './EducationArray';
// import Next from '../Next/Next';

function Education({onRouteChange}) {
  return (
    <section id="education">
      <div className="education-title title d-title text-center">
          <h2 className="">EDUCATION</h2>
      </div>
      <AllEducation EducationArray = {EducationArray} onRouteChange={onRouteChange}/>
      {/* <Next onRouteChange={onRouteChange} next='Certificates' /> */}
    </section>
  );
}

export default Education;
