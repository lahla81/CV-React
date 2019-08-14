import React from 'react';
import face from '../Intro/face.jpg';
import './intro.css';

function Intro({onDevClick,onOhtlClick}) {
  return (
      <div id="intro">
        <header className="pt-5">
          <div className="intro-overlay">
              <div className="container">
                  <div className="row header">
                      <div className="col-md-6 half">
                          <div className="photo">
                              <img src={face} alt=""/>
                          </div>
                        </div>
                      <div className="col-md-6 half text-left">
                          <div className="personal-info">
                              <div className="intro-title">
                                <h2 className="text-center text-primary"><strong>Hello!</strong> I'm Mohamed Lahla</h2>
                                <h5>I am delighted for your kind visit to my private page, 
                                    Happy to introduce my self as <hr/>
                                    <div className="text-center">
                                        <button className="dark-blue mr-3" onClick={onDevClick}>
                                            WEB DEVELOPER
                                        </button>
                                        and 
                                        <button className="dark-blue ml-3 c-btn paper" onClick={onOhtlClick} href="https://www.linkedin.com/in/lahla81/" target="_blank" rel="noopener noreferrer">
                                            OHTL PROJECT MANAGER
                                        </button>
                                    </div>
                                    <hr/>
                                </h5>
                              </div>
                             
                              <div className="sub-title">
                                  Phone
                              </div>
                              <p>+201062666226</p>
                              <div className="sub-title">
                                  Email
                              </div>
                              <p>lahla81@outlook.com</p>
                              <div className="sub-title">
                                  Adrees
                              </div>
                              <p className="top-adress">4th Dair-AlBalad st / Al Kawady</p>
                              <p>Al-Mahmoudiya / Al-Behaira / Egypt</p>
                              <div className="sub-title">
                                  Date of Birth
                              </div>
                              <p>May 25th, 1981</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="intro-social container">
                  <div className="row justify-content-center intro-social-icons">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            
                        </li>
                        <li className="list-inline-item">
                            <a className="social-link" href="https://www.linkedin.com/in/lahla81/" target="_blank" rel="noopener noreferrer">
                                <i className="icon icon-linkedin2"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="social-link" href="https://twitter.com/lahla81" target="_blank" rel="noopener noreferrer">
                                <i className="icon icon-twitter"></i>                                                    
                            </a>
                        </li>
                        <li className="list-inline-item">
                            
                        </li>
                      </ul>
                  </div>
              </div>
          </div>
      </header>
    </div>
    )
  }
  export default Intro