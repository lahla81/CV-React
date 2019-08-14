import React,{Component} from 'react';
import './assets/css/animate.css';
import './assets/css/style.css';
import './assets/webfonts/style.css';
import ParticlesBg from './components/Particles/ParticlesBg';

// import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Certificates from './components/Certificates/Certificates';
import Projects from './components/Projects/Projects';

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'Intro'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }
  render(){
    const { route } = this.state;
    return (
      <div className="container-fluid">
        <ParticlesBg />
        {/* <Navbar onRouteChange={this.onRouteChange}/> */}
        {
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
        }
        <button 
          onClick={() => this.onRouteChange('up')}
          className="up-btn btn bg-transparent">
          <i className="icon icon-circle-up"></i>
        </button>
      </div>
    )
  }
}

export default App;
