import React from 'react';
import Particles from 'react-particles-js';
import './particles.css';

const ParticlesBg = () => {
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
export default ParticlesBg;