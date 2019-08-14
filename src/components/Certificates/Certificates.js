import React from 'react';
import './certificates.css';
function Certificates() {
  return (
    <section id="certificates">
        <div className="certificates-title title text-center">
            <h2>CERTIFICATES</h2>
        </div>
        <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                </ol>
                <div className="carousel-inner text-center">
                    <div className="carousel-item active">
                        <h1>Microsoft Access</h1>
                        <h3>West Delta Regional Control Center</h3>
                        <h5>Egypt</h5>
                        <p>September 2014</p>
                    </div>
                    <div className="carousel-item">
                        <h1>Preparation and awarding tenders</h1>
                        <h3>Administrative Financial Center</h3>
                        <h5>(Cairo) Egypt</h5>
                        <p>Jully 2012</p>
                    </div>
                    <div className="carousel-item">
                        <h1>English Course Level : Intermediate1</h1>
                        <h3>Administrative Financial Center</h3>
                        <h5>(Cairo) Egypt</h5>
                        <p>January 2012</p>
                    </div>
                    <div className="carousel-item">
                        <h1>Building and Managing effective work team</h1>
                        <h3>Administrative Financial Center</h3>
                        <h5>(Cairo) Egypt</h5>
                        <p>February 2011</p>
                    </div>
                    <div className="carousel-item">
                        <h1>OPGW & ACCESSORIES TRAINNING</h1>
                        <h3>Prysmian Cables and Systems</h3>
                        <h5>(barcelona) Spain</h5>
                        <p>April 2010</p>
                    </div>
                    <div className="carousel-item">
                        <h1>Leadership & Management Skills</h1>
                        <h3>Administrative Financial Center</h3>
                        <h5>(Cairo) Egypt</h5>
                        <p>September 2010</p>
                    </div>
                </div>
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
    </section>
  );
}

export default Certificates;
