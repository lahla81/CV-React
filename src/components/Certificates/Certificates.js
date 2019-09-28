import React from 'react';
import './certificates.css';
import AllCertificate from './AllCertificate';
import AllIndicators from './AllIndicators';
import {CertificateArray} from './CertificateArray';
import SecHeaders from '../SecHeaders/SecHeaders';

function Certificates({onRouteChange}) {
    console.log('Certificates')
  return (
    <section id="certificates">
        <SecHeaders name={'CERTIFICATES'}/>
        <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <AllIndicators CertificateArray={CertificateArray} />
               
                <AllCertificate onRouteChange={onRouteChange} CertificateArray={CertificateArray} />

                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
        {/* <Next onRouteChange={onRouteChange} next='Projects' /> */}
    </section>
  );
}

export default Certificates;
