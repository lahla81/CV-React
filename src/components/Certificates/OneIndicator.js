import React from 'react';

function OneIndicator({id,active}) {
  return (
    <li data-target="#carouselExampleIndicators" data-slide-to={id} className={`indicator ${active}`}></li>
  );
}

export default OneIndicator;