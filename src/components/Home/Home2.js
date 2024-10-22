import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <p className="home-about-body">
            I’m a passionate software engineer with over 2 years of experience, working across various technologies to bring ideas to life. 
            <br />
            <br />
            My expertise lies in modern development stacks like the <i><b className="purple">MERN Stack</b></i> and <i><b className="purple">Ruby on Rails</b></i>, allowing me to craft scalable web applications.
            <br />
            <br />
            I’m particularly fascinated by emerging tech, especially <i><b className="purple">Blockchain</b></i>, and always eager to explore new horizons in the development world.
            <br />
            <br />
            Whether it’s building dynamic front-end experiences with <i><b className="purple">React.js/Next.js</b></i> or handling complex back-end logic with <i><b className="purple">Node.js/Rails</b></i>, I love turning ideas into functional, well-architected products.
            <br />
            <br />
            Let's build something cool together!
          </p>
        </Col>
        <Col md={4} className="myAvtar">
          <Tilt>
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Tilt>
        </Col>
      </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/UsamaJaved35"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/usama-javed-37b5aa211"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:devbyusama007@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
