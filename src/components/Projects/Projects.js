import React from 'react';
import './projects.css';
function Projects() {
  return (
    <section id="projects">
    <div className="title text-center">
        <h2>PROJECTS</h2>
    </div>
    <div className="container text-center">
        <div className="gallery">
            <input type="radio" id="item-type-all" name="radio-set-1" className="item-type-all" defaultChecked />
            <label htmlFor="item-type-all" className="label-type-all">ALL</label>

            <input type="radio" id="item-type-1" name="radio-set-1" className="item-type-1" />
            <label htmlFor="item-type-1" className="label-type-1">Communication</label>

            <input type="radio" id="item-type-2" name="radio-set-1" className="item-type-2" />
            <label htmlFor="item-type-2" className="label-type-2">Fiber Optics</label>

            <input type="radio" id="item-type-3" name="radio-set-1" className="item-type-3" />
            <label htmlFor="item-type-3" className="label-type-3">Over Head Transmision Lines</label>
            
            <div className="row items">
                <div className="col-lg-4 col-sm-6 item item-type-1">
                    <div className="project">
                        <a href="#project1">
                            <img src="./assets/images/project1.jpg" alt="project1" className="img-fluid" />
                        </a>
                        <div className="project-overlay">
                            <h3>Borolos - Itay Al-Baroud</h3>
                            <h5>500 KV</h5>
                            <h5>105 KM</h5>
                            <p>2017</p>
                        </div>
                        <div className="category">
                            OHTL
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 item item-type-3">
                    <div className="project">
                        <a href="#project1">
                            <img src="./assets/images/project1.jpg" alt="project1" className="img-fluid" />
                        </a>
                        <div className="project-overlay">
                            <h3>Borolos - Itay Al-Baroud</h3>
                            <h5>500 KV</h5>
                            <h5>105 KM</h5>
                            <p>2017</p>
                        </div>
                        <div className="category">
                            OHTL
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 item item-type-2">
                    <div className="project">
                        <a href="#project1">
                            <img src="./assets/images/project1.jpg" alt="project1" className="img-fluid" />
                        </a>
                        <div className="project-overlay">
                            <h3>Borolos - Itay Al-Baroud</h3>
                            <h5>500 KV</h5>
                            <h5>105 KM</h5>
                            <p>2017</p>
                        </div>
                        <div className="category">
                            OHTL
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 item item-type-1">
                    <div className="project">
                        <a href="#project1">
                            <img src="./assets/images/project1.jpg" alt="project1" className="img-fluid" />
                        </a>
                        <div className="project-overlay">
                            <h3>Borolos - Itay Al-Baroud</h3>
                            <h5>500 KV</h5>
                            <h5>105 KM</h5>
                            <p>2017</p>
                        </div>
                        <div className="category">
                            OHTL
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 item item-type-2">
                    <div className="project">
                        <a href="#project1">
                            <img src="./assets/images/project1.jpg" alt="project1" className="img-fluid" />
                        </a>
                        <div className="project-overlay">
                            <h3>Borolos - Itay Al-Baroud</h3>
                            <h5>500 KV</h5>
                            <h5>105 KM</h5>
                            <p>2017</p>
                        </div>
                        <div className="category">
                            OHTL
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 item item-type-3">
                    <div className="project">
                        <a href="#project1">
                            <img src="./assets/images/project1.jpg" alt="project1" className="img-fluid" />
                        </a>
                        <div className="project-overlay">
                            <h3>Borolos - Itay Al-Baroud</h3>
                            <h5>500 KV</h5>
                            <h5>105 KM</h5>
                            <p>2017</p>
                        </div>
                        <div className="category">
                            OHTL
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default Projects;
