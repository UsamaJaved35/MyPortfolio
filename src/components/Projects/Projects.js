import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import img from "../../Assets/Projects/1.png";
import blogger from "../../Assets/Projects/blogger.png";
import carforce from "../../Assets/Projects/carforce.png";
import newsMonkey from "../../Assets/Projects/newsmonkey.png";
import estamp from "../../Assets/Projects/estampveri.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={0} className="project-card">
            <ProjectCard
              imgPath={img}
              isBlog={false}
              title="FlixGenie"
              description="FlixGenie is a movie discovery application built with React that allows users to explore and browse through movies using the TMDB (The Movie Database) API. The app fetches various movie categories like Now Playing, Popular, and Upcoming, and displays them with a user-friendly interface."
              ghLink="https://github.com/UsamaJaved35/flixGenie"
              demoLink="https://flixgenie.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogger}
              isBlog={false}
              title="Blogger"
              description="This project is a backend for a blogging platform built with Node.js, Express.js, and MongoDB, featuring secure JWT-based authentication, comprehensive CRUD operations for managing blog posts, and a scalable, maintainable architecture. It includes robust error handling and input validation through middleware and is designed to integrate seamlessly with a frontend built using React.js."
              ghLink="https://github.com/UsamaJaved35/Blogger-frontend"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carforce}
              isBlog={false}
              title="CarForce"
              description="The Carforce project is a multi-tenant CRM system designed for managing car auctions and client relationships, developed using modern web technologies. It streamlines the auction process by integrating key mapping solutions, revamping the Auction module with Firebase, and automating tasks such as car ad posting. The platform includes a preference module for targeted marketing, API integrations with external teams, and optimization of performance bottlenecks, ensuring a seamless experience for users managing large-scale car auctions."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://dubizzle.empgautos.com/admin/login"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsMonkey}
              isBlog={false}
              title="News Monkey"
              description="NewsMonkey is a news application that fetches the latest news from various categories using an external API and presents it to users in a clean, easy-to-navigate interface. The app features infinite scrolling, allowing users to continuously browse through articles without the need to refresh or navigate to new pages. Built with React for a dynamic user experience and styled using Bootstrap for responsive design, NewsMonkey offers a seamless way to stay updated on current events across different categories."
              ghLink="https://github.com/UsamaJaved35/NewsMonkey"
              demoLink="https://usamajaved35.github.io/NewsMonkey/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={estamp}
              isBlog={false}
              title="E Stamp Verification System (FYP)"
              description="I developed an E-stamp Verification System using blockchain technology, featuring a ReactJS frontend and a NodeJS server. The system efficiently verifies the authenticity and integrity of digital documents, detecting tampering within 30 seconds. Key technologies include Multer for image storage, Sharp for image processing, Tesseract.js for text extraction, and PDFPoppler for handling PDFs. The extracted text is hashed using the SHA256 algorithm and stored on the blockchain, ensuring data integrity. A smart contract built with Solidity and integrated with the Metamask wallet allows secure and immutable storage on the Alchemy Block network, supported by the Hardhat library for development and testing."
              ghLink="https://github.com/UsamaJaved35/FYP"
              demoLink="https://usamajaved35.github.io/FYP/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
