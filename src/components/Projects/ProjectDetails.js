import React from 'react';

function ProjectDetails({id,img, name, volt, length, date, category,details}) {
  return (
    <div key={id} className="overlay-gallery row" id="details">
        <div className="col-sm gallery-img">
            <img src={img} alt="project" />
        </div>
        <div className="col-sm gallery-text">
            <h3 className="project-name">{name}</h3>
            <h5 className="project-data">{volt}</h5>
            <h5 className="project-data">{length}</h5>
            <p className="project-data">{date}</p>
            <p>{details}</p>
        </div>
        <div className="category" >
            {category}
        </div>
        <a href="#page" className="close">×</a>
    </div>
  );
}

export default ProjectDetails;