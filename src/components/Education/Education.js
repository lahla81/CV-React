import React from 'react';
import './education.css';
import AllEducation from './AllEducation';
import {EducationArray} from './EducationArray';
import SecHeaders from '../SecHeaders/SecHeaders';

function Education({onRouteChange}) {
  return (
    <section id="education">
      <SecHeaders name={'EDUCATION'}/>
      <AllEducation EducationArray = {EducationArray} onRouteChange={onRouteChange}/>
      {/* <Next onRouteChange={onRouteChange} next='Certificates' /> */}
    </section>
  );
}

export default Education;
