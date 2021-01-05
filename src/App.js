import React, { Component, Fragment } from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar'
import BottomBar from './components/BottomBar'
import Image from 'react-bootstrap/Image'
import Fade from 'react-reveal/Fade';
import Skill from './components/Skill';
import { Row, Col, Container } from 'react-bootstrap';
import iconAngular from './assets/Img/IconSkill/al.png';
import iconReact from './assets/Img/IconSkill/ra.png';
import iconJS from './assets/Img/IconSkill/js.png';
import iconCS from './assets/Img/IconSkill/cs.png';
import iconKTP from './assets/Img/ktpktp.jpg';
import iconIonic from './assets/Img/IconSkill/ionic.png';
import iconCall from './assets/Img/IconContact/call.png';
import iconLocation from './assets/Img/IconContact/location.png';
import iconSend from './assets/Img/IconContact/send.png';
import iconflutter from './assets/Img/IconSkill/flutterlogo.png';
import iconSheild from './assets/Img/IconPort/iconSheild.png';
import Slide from 'react-reveal/Slide';
import Carousel from 'react-bootstrap/Carousel';
import SlidePort from './components/SlidePort'

class App extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <section id="Home" className="p-1 p-lg-5 BG-Home">

          <HeaderBar />

          <Fade top duration={2000}>
            <div style={{ marginTop: "5%" }}>
              <div style={{ textAlign: "center" }}>
                <Image src={iconKTP} rounded width="350px" className="App-logo" />
              </div>
            </div>
          </Fade>

          <Fade bottom duration={2500}>
            <div style={{ textAlign: "center" }}>

              <div style={{ marginTop: 30 }}>
                {/* <b style={{ fontSize: "28px", verticalAlign: "top" }}>PROGRAMMER</b>
                <b style={{ fontSize: "45px", verticalAlign: "center" }}>&</b>
                <b style={{ fontSize: "28px", verticalAlign: "bottom" }}>DEVELOPER</b> */}
                <b style={{ fontSize: "45px", verticalAlign: "center", color: "white" }}>DEVELOPER</b>
              </div>
            </div>
          </Fade>

          <BottomBar />

        </section>

        <section id="About" className="p-1 p-lg-5 BG-About">
          <div style={{ marginTop: "10%", textAlign: "center" }}>
            <p>
              <b style={{ fontSize: "28px" }}>Kittipich H.</b>
              <br></br>
              Bangkok, Thailand
            <br></br>
              Programmer
            <br></br>
              092 884 9832
            <br></br>
              ktpskittipich@gmail.com
            </p>
            <br></br>
            <p style={{ fontSize: "18px" }}>my name is "Will" or "View" you can spell both word. I'm funny guy but serious when working.
            <br></br>I enjoy with problem I will try to find every solution to fix it.</p>

            <p style={{ fontSize: "18px" }}>full stack web and mobile developer with almost 2 years of experience and passion always learn something new. </p>
          </div>
        </section>


        <section id="Skill" className="p-1 p-lg-5 BG-Skill">
          <div style={{ marginTop: "5%", textAlign: "center" }}>


            <b style={{ fontSize: "24px" }}>Programming Languages & Tools</b>
            <br></br>
            <br></br>
            <Slide left duration={2000}>
              <Container>
                <Row>

                  <Col sm className="TelAnimate">
                    <Skill imgurl={iconReact} />
                  </Col>
                  <Col sm className="TelAnimate">
                    <Skill imgurl={iconflutter} />
                  </Col>
                  <Col sm className="TelAnimate">
                    <Skill imgurl={iconIonic} />
                  </Col>
                  <Col sm className="TelAnimate">
                    <Skill imgurl={iconAngular} />
                  </Col>
                  <Col sm className="TelAnimate">
                    <Skill imgurl={iconJS} />
                  </Col>
                  <Col sm className="TelAnimate">
                    <Skill imgurl={iconCS} />
                  </Col>
                </Row>
              </Container>
            </Slide>

          </div>
        </section>


        <section id="Contact" style={{ height: "980px" }} className="p-1 p-lg-5 BG-Contact">
          <div style={{ marginTop: "5%", textAlign: "center" }}>


            <b style={{ fontSize: "30px" }}>Contact Me</b>
            <br></br>
            <br></br>

            <Container>
              <Row>
                <Col sm>
                  <Image src={iconCall} className="TelAnimate" />
                  <br></br>
                  <br></br>
                  <b>PHONE</b>
                  <br></br>
                  <br></br>
                  <p>+66 928849832</p>
                </Col>
                <Col sm>
                  <Image src={iconLocation} className="TelAnimate" />
                  <br></br>
                  <br></br>
                  <b>EMAIL</b>
                  <br></br>
                  <br></br>
                  <p>ktpskittipich@gmail.com</p>
                </Col>
                <Col sm>
                  <Image src={iconSend} className="TelAnimate" />
                  <br></br>
                  <br></br>
                  <b>LOCATION</b>
                  <br></br>
                  <br></br>
                  <p>Bangkok, Thailand</p>
                </Col>
              </Row>
            </Container>

          </div>
        </section>



      </div>

    );
  }

}

export default App;
