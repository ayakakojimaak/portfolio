"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Modal, Button, Card, Row, Col, Carousel } from "react-bootstrap";

interface Project {
  id: number;
  title: string;
  category: string;
  images: string[];
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "UI Design mobile app for a Fitness App",
    category: "Agency Website",
    images: ["/assets/images/project-image01.png", "/assets/images/project-image01.png"],
    description: "An agency website with digital strategies.",
  },
  {
    id: 2,
    title: "Shiro",
    category: "Personal Portfolio",
    images: ["/assets/images/project-image01.png"],
    description: "A clean and modern personal portfolio.",
  },
  {
    id: 3,
    title: "Vivid",
    category: "App Showcase",
    images: ["/assets/images/project-image01.png"],
    description: "An app showcase landing page.",
  },
  {
    id: 4,
    title: "Capture",
    category: "Video Agency",
    images: ["/assets/images/project-image01.png"],
    description: "A video production agency website.",
  },
];

const Project: React.FC = () => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [index, setIndex] = useState(0);

  const handleShow = (project: Project) => {
    setSelectedProject(project);
    setIndex(0);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="container" id="projects">
      <h2 className="mb-3">
        <span>02</span>
        <span>Projects</span>
      </h2>
      <Row xs={2} md={3} className="g-4">
        {projects.map((project) => (
          <Col key={project.id}>
            <Card onClick={() => handleShow(project)}>
              <Card.Img variant="top" src={project.images[0]} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.category}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={show} onHide={handleClose} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <h4>{selectedProject?.category}</h4>
              <p>{selectedProject?.description}</p>
            </Col>
            <Col md={6}>
              {selectedProject?.images && (
                <>
                  <Carousel activeIndex={index} onSelect={handleSelect}>
                    {selectedProject.images.map((image, idx) => (
                      <Carousel.Item key={idx}>
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${selectedProject.title} - 画像 ${idx + 1}`}
                          width={600}
                          height={400}
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "cover",
                          }}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <div className="d-flex justify-content-center mt-3">
                    {selectedProject.images.map((image, idx) => (
                      <div
                        key={idx}
                        onClick={() => setIndex(idx)}
                        style={{
                          cursor: "pointer",
                          margin: "0 5px",
                          border: idx === index ? "2px solid #007bff" : "none",
                        }}>
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`サムネイル ${idx + 1}`}
                          width={60}
                          height={40}
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Project;
