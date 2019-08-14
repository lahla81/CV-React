import React from 'react';

function NavTitle({id, name, href}) {

  return (
    <li className="nav-item" id={id}>
        <a className="nav-link scroll text-left" href={`#${href}`}>{name}</a>
    </li>
    )
  }
  export default NavTitle