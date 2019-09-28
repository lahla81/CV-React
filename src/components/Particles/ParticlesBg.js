import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './particles.css';

class ParticlesBg extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return false;
    }

    render(){
        console.log('Particles')
        return (
            <Particles  className="particles w-100"
                params={{
                    particles: {
                        number: {
                            value:30,
                            density:{
                                enable: true,
                                value_area:150,
                            }
                        }
                    }
                }}
            />
        )
    }
}
export default ParticlesBg;