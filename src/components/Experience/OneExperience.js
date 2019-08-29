import React from 'react';

function OneExperience({duration, jobTitle, company, role1, role2, role3}) {
  return (
    <div className="row">
        <div className="col-sm-6 dot">
            <h4 className="text-sm-right">{duration}</h4>
            <h5 className="text-sm-right">{jobTitle}</h5>
        </div>
        <div className="col-sm-6 text-left right-side">
            <h3>{company}</h3>
            <ul>
                <li>
                    <p>
                        {role1}
                    </p>      
                </li>
                <li>
                    <p>
                        {role2}
                    </p>
                </li>
                <li>
                    <p>
                        {role3}
                    </p>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default OneExperience;
