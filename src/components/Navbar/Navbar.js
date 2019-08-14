import React from 'react';
import NavMenu from './NavMenu';
import './navbar.css';

function Navbar({onRouteChange}) {
    return (
        <div className="row">
            <nav id="navBar" className="navbar navbar-nav navbar-expand-lg fixed-top">
                <div className="container navagation">
                    <a className="navbar-brand h1 scroll" href="/">
                        Mohamed Lahla
                    </a>
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
