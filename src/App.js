import React,{ Component } from 'react';
import { connect } from 'react-redux';
import './assets/css/style.css';
import './assets/webfonts/style.css';
import ParticlesBg from './components/Particles/ParticlesBg';

import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import AsyncComponent from './components/AsyncComponent/AsyncComponent';

import { setRoute } from './components/actions';

const mapStateToProps = state => {
  return {
    route: state.routeChange.route,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onRouteChange: (event) => dispatch(setRoute(event)),
  }
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      component: null
    }
  }

  render(){
    const { route, onRouteChange } = this.props;
    const AsyncExperience = AsyncComponent(() => import('./components/Experience/Experience'));
    const AsyncEducation = AsyncComponent(() => import('./components/Education/Education'));
    const AsyncCertificates = AsyncComponent(() => import('./components/Certificates/Certificates'));
    const AsyncProjects = AsyncComponent(() => import('./components/Projects/Projects'));
    return (
      <div className="container-fluid">
        <ParticlesBg />
        <Navbar onRouteChange={onRouteChange}/>
        {
          route === 'Intro'
          ?<Intro onRouteChange={onRouteChange} />
          :(route === 'ohtl' || route === 'Experience')
          ?<AsyncExperience onRouteChange={onRouteChange} />
          :(route === 'Education')
          ?<AsyncEducation onRouteChange={onRouteChange} />
          :(route === 'Certificates')
          ?<AsyncCertificates onRouteChange={onRouteChange} />
          :(route === 'Projects')
          ?<AsyncProjects onRouteChange={onRouteChange} />
          : null
        }
        <button 
          onClick={() => onRouteChange('Intro')}
          className="up-btn btn bg-transparent">
          <i className="icon icon-circle-up"></i>
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
