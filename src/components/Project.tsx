"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Modal, Button, Card, Row, Col } from "react-bootstrap";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "UI Design mobile app for a Fitness App",
    category: "Agency Website",
    image: "/assets/images/project-image01.png",
    description: "An agency website with digital strategies.",
  },
  {
    id: 2,
    title: "Shiro",
    category: "Personal Portfolio",
    image: "/assets/images/project-image01.png",
    description: "A clean and modern personal portfolio.",
  },
  {
    id: 3,
    title: "Vivid",
    category: "App Showcase",
    image: "/assets/images/project-image01.png",
    description: "An app showcase landing page.",
  },
  {
    id: 4,
    title: "Capture",
    category: "Video Agency",
    image: "/assets/images/project-image01.png",
    description: "A video production agency website.",
  },
];

const Project: React.FC = () => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleShow = (project: Project) => {
    setSelectedProject(project);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  return (
    <section className="container" id="projects">
      <h2 className="mb-3">
        <span>02</span>
        <span>Projects</span>
      </h2>
      <Row xs={1} md={2} className="g-4">
        {projects.map((project) => (
          <Col key={project.id}>
            <Card className="shadow-sm" onClick={() => handleShow(project)}>
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.category}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for project details */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject?.image && (
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={300}
              height={300}
              layout="intrinsic"
            />
          )}
          <p>{selectedProject?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Project;
