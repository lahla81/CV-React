import React from 'react';
import NavMenu from './NavMenu';
import './navbar.css';

function Navbar({onRouteChange}) {
    console.log('Navbar')
    return (
        <div className="row">
            <nav id="navBar" className="navbar w-100 trans navbar-nav navbar-expand-lg">
                <div className="container navagation">
                    <button className="btn bg-transparent navbar-brand h1" onClick={() => onRouteChange('Intro')}>
                        Mohamed Lahla
                    </button>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="icon-menu icon"></i>                        
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <NavMenu onRouteChange={onRouteChange} />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
