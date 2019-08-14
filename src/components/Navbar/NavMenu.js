import React from 'react';
import NavTitlesList from './NavTitlesList';
import {titles} from './Titles';

function NavMenu({onRouteChange}) {
  return (
        <NavTitlesList onRouteChange={onRouteChange} titles={ titles }/>
    )
  }
  export default NavMenu