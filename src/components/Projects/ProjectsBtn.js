import React from 'react';

function ProjectsBtn({onAllClick,onFiberClick,OnOhtlProjectClick }) {
    return (
        <div>
            <button className="btn c-btn m-1" onClick={onAllClick}>ALL</button>
            <button className="btn c-btn m-1" onClick={onFiberClick}>Fiber Optics</button>
            <button className="btn c-btn m-1" onClick={OnOhtlProjectClick}>OHTL</button>
        </div>
    );
}

export default ProjectsBtn;
