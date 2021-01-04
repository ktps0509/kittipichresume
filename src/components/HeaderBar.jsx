import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-scroll';
import '../App.css';

import iconHead from '../assets/Img/iconhead.jpg';



export class HeaderBar extends Component {
    render() {
        return (

            <div>

                    <section>
                        <Navbar className="justify-content-between" fixed="top" style={{ backgroundColor: "white"}}>

                            <div className="paddingH">
                                <Navbar.Brand href="#home">
                                    <img
                                        src={iconHead}
                                        width="40"
                                        height="30"
                                        className="d-inline-block align-top rounded"
                                    />
                                </Navbar.Brand>
                                <b className="font-white">Kittipich H.</b>
                            </div>

                            <div className="paddingH">
                                <Nav>
                                    <Link activeClass="active" style={{ cursor: "pointer" }} className="nav-link js-scroll-trigger" to="Home" spy={true} smooth={true} duration={500} ><b className="font-white">Home</b></Link>
                                    <Link activeClass="active" style={{ cursor: "pointer" }} className="nav-link js-scroll-trigger" to="About" spy={true} smooth={true} duration={500} ><b className="font-white">About</b></Link>
                                    <Link activeClass="active" style={{ cursor: "pointer" }} className="nav-link js-scroll-trigger" to="Skill" spy={true} smooth={true} duration={500} ><b className="font-white">Skill</b></Link>
                                    {/* <Link activeClass="active" style={{ cursor: "pointer" }} className="nav-link js-scroll-trigger" to="Portfolio" spy={true} smooth={true} duration={500} ><b className="font-white">Portfolio</b></Link> */}
                                    <Link activeClass="active" style={{ cursor: "pointer" }} className="nav-link js-scroll-trigger" to="Contact" spy={true} smooth={true} duration={500} ><b className="font-white">Contact</b></Link>
                                </Nav>
                            </div>
                        </Navbar>
                        
                    </section>


            </div >


        )
    }
}

export default HeaderBar





