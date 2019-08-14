import React from 'react';
import OneExperience from './OneExperience';

function AllExperience({ ExperienceArray }) {
  return (
    <div className="container history">
        {
            ExperienceArray.map(Experience => {
                return (
                        <OneExperience 
                            key={Experience.id} 
                            id={Experience.id} 
                            duration={Experience.duration}
                            jobTitle={Experience.jobTitle}
                            company={Experience.company}
                            role1={Experience.role1}
                            role2={Experience.role2}
                            role3={Experience.role3}
                        />
                    )
            })
        }
    </div>
    )
  }
  export default AllExperience;