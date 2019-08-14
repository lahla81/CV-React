import React from 'react';
import face from '../Intro/face1.jpg';
import './intro.css';

function Intro({onRouteChange}) {
    return (
        <div id="intro">
            <header>
                <div className="container">
                    <div className="intro-overlay mx-sm-5">
                        <div className="row header">
                            <div className="col-lg-6 half">
                                <div className="photo rounded-lg">
                                    <img className="rounded-lg bg-secondary p-3" src={face} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-6 half text-left">
                                <div className="personal-info rounded-lg">
                                    <div className="intro-title">
                                        <h2 className="text-center text-primary"><strong>Hello!</strong> I'm Mohamed Lahla</h2>
                                        <h5>I am delighted for your kind visit to my private page, 
                                            Happy to introduce my self as 
                                        </h5>
                                        <hr/>
                                        <div className="text-center">
                                            <button 
                                                className="btn i-btn c-btn m-1" 
                                                onClick={() => onRouteChange('develper')}>
                                                WEB DEVELOPER
                                            </button>
                                            <button 
                                                className="btn i-btn c-btn m-1" 
                                                onClick={() => onRouteChange('ohtl')} 
                                                href="https://www.linkedin.com/in/lahla81/" 
                                                target="_blank" 
                                                rel="noopener noreferrer">
                                                OHTL PROJECT MANAGER
                                            </button>
                                        </div>
                                        <hr/>
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
                                    <div className="row justify-content-center intro-social-icons rounded-lg">
                                        <ul className="list-inline">
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
                                        </ul>     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Intro