import React from 'react';
import NavTitle from './NavTiltle';

function NavTitlesList({ titles }) {
  return (
    <ul className="navbar-nav nav-pills">
        {
            titles.map(nav => {
                return (
                        <NavTitle 
                            key={nav.id} 
                            id={nav.id} 
                            name={nav.name} 
                            href={nav.href}
                        />
                    )
            })
        }
    </ul>
    )
  }
  export default NavTitlesList