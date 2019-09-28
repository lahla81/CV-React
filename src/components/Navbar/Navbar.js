import React, {Component} from 'react';
import NavMenu from './NavMenu';
import './navbar.css';

class Navbar extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return false;
    }

    render(){
        const { onRouteChange } = this.props;
        return (
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
        );
    }
}

export default Navbar;
