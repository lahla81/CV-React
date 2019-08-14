import React from 'react';
import NavTitle from './NavTiltle';

function NavTitlesList({ titles, onRouteChange }) {
  return (
    <ul className="navbar-nav nav-pills p-0">
        {
            titles.map(nav => {
                return (
                        <NavTitle 
                            key={nav.id} 
                            id={nav.id} 
                            name={nav.name} 
                            href={nav.href}
                            onRouteChange = {onRouteChange}
                        />
                    )
            })
        }
    </ul>
    )
  }
  export default NavTitlesList