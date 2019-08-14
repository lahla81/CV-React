import React from 'react';
import OneEducation from './OneEducation';

function AllEducation({ EducationArray }) {
  return (
    <div className="container schools">
        {
            EducationArray.map(Education => {
                return (
                        <OneEducation 
                            key={Education.id} 
                            id={Education.id} 
                            duration={Education.duration}
                            degree={Education.degree}
                            title={Education.title}
                            school={Education.school}
                            specialty={Education.specialty}
                            Grade={Education.Grade}
                            project={Education.project}
                            projectGrade={Education.projectGrade}
                        />
                    )
            })
        }
    </div>
    )
  }
  export default AllEducation;