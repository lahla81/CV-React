import React,{Component} from 'react';
import './assets/css/animate.css';
import './assets/css/style.css';
import './assets/webfonts/style.css';
import ParticlesBg from './components/Particles/ParticlesBg';

import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Experiance from './components/Experiance/Experiance';
import Education from './components/Education/Education';
import Certificates from './components/Certificates/Certificates';
import Projects from './components/Projects/Projects';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onDevClick = () => {
    console.log("click");
  }
  onOhtlClick = () => {
    console.log("OHTLclick");
  }
  render(){
    return (
      <div className="container-fluid">
        <ParticlesBg /> 
        <Intro onDevClick={this.onDevClick} onOhtlClick={this.onOhtlClick}/>
        <Navbar />
        {/* <Intro /> */}
        <Experiance />
        <Education />
        <Certificates />
        <Projects />
      </div>
    )
  }
}

export default App;
