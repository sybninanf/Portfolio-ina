import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/1.png";
import emotion from "../../Assets/Projects/arabic.jpg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/face.png";
import potik from "../../Assets/Projects/potik.png";
import suicide from "../../Assets/Projects/face.png";
import bitsOfCode from "../../Assets/Projects/3.png";
import pijar from "../../Assets/Projects/2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My programming <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Story App"
              description="a project submission during the rise academy which discussed intermidate"
              ghLink="https://github.com/sybninanf/StoryAppDicoding"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="
              Evaluation of the Implementation of Car Satisfaction Based on the Servqual Method"
              description="The task involves crafting an Evaluation Application geared towards assessing car satisfaction, utilizing the Servqual Methodology hosted on a website platform. This application leverages a MySQL database in conjunction with the PHP programming language to ensure efficient data management and processing. The integration of the Servqual Methodology into the website-based framework allows for a comprehensive evaluation of various aspects of car satisfaction, providing users with a structured and user-friendly interface for inputting and analyzing data. The utilization of PHP as the programming language facilitates seamless communication between the front-end and back-end components, ensuring smooth data flow and robust functionality throughout the evaluation process."
              ghLink="https://github.com/sybninanf/kuisioner"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="
              Building an application for diagnosing skin cancer in humans using the CNN algorithm"
              description="Creating an Android-based skin cancer diagnosis application that uses the CNN (Convutional Neural Network) algorithm and scanning features."
              ghLink="https://github.com/sybninanf/Nct2020"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="
              Capstone Bangkit 2023 Batch 1"
              description="Traditional paper namecard are becoming increasingly outdated and inefficient in today's digital age. This will result in paper waste production increasing year on year as Indonesia produces 34.5 tons of waste annually according to the Kementerian Lingkungan Hidup for 2020, which of 12 percent is paper waste. The production of paper namecard also takes a lot of time, starting with the design of the namecard, filling in the personal data, printing and laminating. Based on personal experience, we realize that we cannot collect all the business cards we have in one place, so paper namecard need space to store."
              ghLink="https://github.com/CardCradters/DiNa_JetPack"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="
              Face recognition attendance application for teachers using cnn algorithm using flutter"
              description="Developing a feature for attendance management utilizing facial recognition technology, incorporating the high accuracy of the Mobile FaceNet model alongside convolutional neural networks (CNN) as the underlying algorithm. This solution is further strengthened by Laravel serving as the backend framework, facilitating seamless processing and delivery of server-side data to the client, which typically comprises administrators within the application interface."
              ghLink="https://github.com/sybninanf/presensi-flutter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="
              Creating an interactive Arabic language android learning application using Kotlin and Firebase for database"
              description="
              Then used - Interactive Learning: quizzes, interactive exercises, or modules.
              - Use of Firebase to store user data, learning progress, or other information for easy access from various
              devices.
              - Real-Time Functionality: live updates of materials or exam results.
              - Learning Progress Monitoring
              - Encourages user engagement through interactive features and feedback that allows customisation of
              learning materials."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>

        <h1 className="project-heading">
          UI/UX Design <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>


        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={potik}
              isBlog={false}
              title="Basic Course - Preliminary Round PI | Final Assigment Landing PageBasic Course - Preliminary Round PI | Final Assigment Landing Page"
              description="
              Creating the culminating project for a UI/UX designer participating in the Innovation 2023 women's program involves designing a landing page centered around the case and theme of Enhancing Self-Confidence in Women"
            // ghLink="https://github.com/sybninanf/StoryAppDicoding"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pijar}

             title="Pijar Music"
              description="The task involves crafting an Evaluation Application geared towards assessing car satisfaction, utilizing the Servqual Methodology hosted on a website platform. This application leverages a MySQL database in conjunction with the PHP programming language to ensure efficient data management and processing. The integration of the Servqual Methodology into the website-based framework allows for a comprehensive evaluation of various aspects of car satisfaction, 
              providing users with a structured and user-friendly interface for inputting and analyzing data. The utilization of PHP as the programming language facilitates seamless communication between the front-end and back-end components, ensuring smooth data flow and robust functionality throughout the evaluation process."

            />
          </Col>
        </Row>
      </Container>
    </Container>

  );
}

export default Projects;
