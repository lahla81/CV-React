import React,{Component} from 'react';
import './assets/css/animate.css';
import './assets/css/style.css';
import './assets/webfonts/style.css';
import ParticlesBg from './components/Particles/ParticlesBg';

import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import AsyncComponent from './components/AsyncComponent/AsyncComponent';
// import Experience from './components/Experience/Experience';
// import Experience from './components/Experience/Experience';
// import Education from './components/Education/Education';
// import Certificates from './components/Certificates/Certificates';
// import Projects from './components/Projects/Projects';

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'Intro',
      component: null
    }
  }

  onRouteChange = (route) => {
    // no code splitting
    this.setState({route: route});
    // with Code splitting:
    // route === 'Intro'
    // ?this.setState({ route: route })
    // :(route === 'ohtl')
    // ?import ('./components/Experience/Experience').then((Experience) => {
    //   this.setState({ route: route, component:Experience.default})
    // })
    // :(route === 'Experience')
    // ?import ('./components/Experience/Experience').then((Experience) => {
    //   this.setState({ route: route, component:Experience.default})
    // })
    // :(route === 'Education')
    // ?import ('./components/Education/Education').then((Education) => {
    //   this.setState({ route: route, component:Education.default})
    // })
    // :(route === 'Certificates')
    // ?import ('./components/Certificates/Certificates').then((Certificates) => {
    //   this.setState({ route: route, component:Certificates.default})
    // })
    // :(route === 'Projects')
    // ?import ('./components/Projects/Projects').then((Projects) => {
    //   this.setState({ route: route, component:Projects.default})
    // })
    // :this.setState({ route: route, component:Intro.default})
  }
  render(){
    const { route } = this.state;
    const AsyncExperience = AsyncComponent(() => import('./components/Experience/Experience'));
    const AsyncEducation = AsyncComponent(() => import('./components/Education/Education'));
    const AsyncCertificates = AsyncComponent(() => import('./components/Certificates/Certificates'));
    const AsyncProjects = AsyncComponent(() => import('./components/Projects/Projects'));
    return (
      <div className="container-fluid">
        <ParticlesBg />
        <Navbar onRouteChange={this.onRouteChange}/>
        {
          route === 'Intro'
          ?<Intro onRouteChange={this.onRouteChange} />
          :(route === 'ohtl' || route === 'Experience')
          ?<AsyncExperience onRouteChange={this.onRouteChange} />
          :(route === 'Education')
          ?<AsyncEducation onRouteChange={this.onRouteChange} />
          :(route === 'Certificates')
          ?<AsyncCertificates onRouteChange={this.onRouteChange} />
          :(route === 'Projects')
          ?<AsyncProjects onRouteChange={this.onRouteChange} />
          : null
        }
        {/* {
          route === 'Intro'
          ?<Intro onRouteChange={this.onRouteChange} />
          :(route === 'ohtl')
          ?<Experience onRouteChange={this.onRouteChange} />
          :(route === 'Education')
          ?<Education onRouteChange={this.onRouteChange} />
          :(route === 'Certificates')
          ?<Certificates onRouteChange={this.onRouteChange} />
          :(route === 'Projects')
          ?<Projects onRouteChange={this.onRouteChange} />
          :(route === 'up')
          ?<Intro onRouteChange={this.onRouteChange} />
          :<Intro />
        } */}
        {/* {
          route === 'Intro'
          ?<Intro onRouteChange={this.onRouteChange} />
          :<this.state.component onRouteChange={this.onRouteChange} />
        } */}
        <button 
          onClick={() => this.onRouteChange('Intro')}
          className="up-btn btn bg-transparent">
          <i className="icon icon-circle-up"></i>
        </button>
      </div>
    )
  }
}

export default App;
