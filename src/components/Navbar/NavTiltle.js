import React from 'react';

function NavTitle({onRouteChange, name, href}) {

  return (
    <li className="nav-item">
        <button onClick={() => onRouteChange(`${href}`)} className="nav-link btn c-btn m-1 text-left">{name}</button>
    </li>
    )
  }
  export default NavTitle