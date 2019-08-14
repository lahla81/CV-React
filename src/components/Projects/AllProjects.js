import React from 'react';
import OneProject from './OneProject';

const AllProjects = ({projectsArray}) =>  {
    
        return (
            <div className="row items">
                {
                    projectsArray.map(project => {
                        return (
                            <OneProject 
                                key={project.id} 
                                id={project.id} 
                                name={project.name}
                                img={project.img}
                                volt={project.volt}
                                length={project.length}
                                date={project.date}
                                category={project.category}
                                circuits={project.circuits}
                                conductor={project.conductor}
                                insulator={project.insulator}
                                details={project.details}
                                role={project.role}
                                installation={project.installation}
                            />
                        )
                    })
                }
            </div>
        )
}
export default AllProjects