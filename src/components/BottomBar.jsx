import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import '../App.css';
import iconFB from '../assets/Icon/facebook.png'
import iconGithub from '../assets/Icon/github-image.png'
import iconMail from '../assets/Icon/mail.png'




export default class BottomBar extends Component {
    render() {
        return (
            <div>
                <section>
                    <Navbar className="justify-content-between" fixed="bottom" style={{ backgroundColor: "white"}}>

                        <div className="paddingH">
                            <Navbar.Brand href="https://www.facebook.com/ktpsss">
                                <img
                                    src={iconFB}
                                    width="25"
                                    height="25"
                                    className="d-inline-block align-top rounded"
                                />
                            </Navbar.Brand>
                            <Navbar.Brand href="https://github.com/ktps0509">
                                <img
                                    src={iconGithub}
                                    width="25"
                                    height="25"
                                    className="d-inline-block align-top rounded"
                                />
                            </Navbar.Brand>

                            {/* <Navbar.Brand href="https://github.com/ktps0509">
                                <img
                                    src={iconMail}
                                    width="25"
                                    height="25"
                                    className="d-inline-block align-top rounded"
                                />
                            </Navbar.Brand> */}
                            
                        </div>
                    </Navbar>

                </section>


            </div >
        )
    }
}
