import React from 'react';

function OneCertificate({id, course, center, country, date, active}) {
  return (
    <div className={`carousel-item ${active}`}>
        <h1>{course}</h1>
        <h3>{center}</h3>
        <h5>{country}</h5>
        <p>{date}</p>
    </div>
  );
}

export default OneCertificate;
