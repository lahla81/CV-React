import React from 'react';

function OneEducation({id, duration, degree, title, school, specialty, Grade, project, projectGrade}) {
  return (
    <div className="row">
        <div className="col-sm-6 degree dot">
            <h4>{duration}</h4>
            <h5>{degree}</h5>
        </div>
        <div className="col-sm-6 text-left right-side">
            <h3>{title}</h3>
            <p>{school}</p>
            <p>{specialty}</p>
            <p>{Grade}</p>
            <p>{project} </p>
            <p> {projectGrade}</p>
        </div>
    </div>  );
}

export default OneEducation;
