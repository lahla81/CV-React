import React from 'react';
import NavTitlesList from './NavTitlesList';
import {titles} from './Titles';

function NavMenu() {
  return (
    <ul className="navbar-nav nav-pills">
        <NavTitlesList titles={ titles }/>
    </ul>
    )
  }
  export default NavMenu