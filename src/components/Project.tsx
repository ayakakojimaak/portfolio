"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Modal, Button, Card, Row, Col, Carousel } from "react-bootstrap";
import styles from "./Project.module.scss";
import { useTranslation } from "@/components/hooks/useTranslation";

interface Project {
  id: number;
  title: string;
  category: string[];
  images: string[];
  description: string;
}

const Project: React.FC = () => {
  const t = useTranslation();
  const projects: Project[] = t.projects;
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
    <section className={`container ${styles.projectSection}`} id="projects">
      <h2>
        <span>02</span>
        <span>Projects</span>
      </h2>
      <Row xs={1} sm={2} md={3} className={`g-4 ${styles.projectGrid}`}>
        {projects.map((project: Project) => (
          <Col key={project.id}>
            <Card className={styles.projectCard} onClick={() => handleShow(project)}>
              <Image
                className={styles.cardImg}
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={220}
              />
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.cardTitle}>{project.title}</Card.Title>
                <Card.Text className={styles.cardCategory}>
                  {project.category.map((category) => (
                    <span key={category}>{category}</span>
                  ))}
                </Card.Text>
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
            <Col md={6} className={styles.projectInfo}>
              <p
                className={styles.projectDescription}
                dangerouslySetInnerHTML={{ __html: selectedProject?.description || "" }}
              />
              <div className={styles.projectCategory}>
                {selectedProject?.category.map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </div>
            </Col>
            <Col md={6}>
              {selectedProject?.images && (
                <>
                  <Carousel activeIndex={index} onSelect={handleSelect}>
                    {selectedProject.images.map((image, idx) => (
                      <Carousel.Item key={idx}>
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${selectedProject.title} - img ${idx + 1}`}
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
                  <div className={styles.thumbnailContainer}>
                    {selectedProject.images.map((image, idx) => (
                      <div
                        key={idx}
                        onClick={() => setIndex(idx)}
                        className={`${styles.thumbnail} ${idx === index ? styles.active : ""}`}>
                        <Image src={image || "/placeholder.svg"} alt={`img ${idx + 1}`} width={60} height={40} />
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
