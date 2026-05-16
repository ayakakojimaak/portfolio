"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleShow = (project: Project) => {
    setSelectedProject(project);
    setIndex(0);
    dialogRef.current?.showModal();
  };

  const handleClose = () => dialogRef.current?.close();

  const handlePrev = () => {
    if (!selectedProject) return;
    setIndex((i) => (i - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  const handleNext = () => {
    if (!selectedProject) return;
    setIndex((i) => (i + 1) % selectedProject.images.length);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) handleClose();
  };

  return (
    <section className="section" id="projects">
      <h2 className="section-title">
        <span className="section-number">02</span>
        <span>Projects</span>
      </h2>

      <div className={`row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 ${styles.projectGrid}`}>
        {projects.map((project: Project) => (
          <div key={project.id} className="col">
            <div className={styles.projectCard} onClick={() => handleShow(project)}>
              <Image
                className={styles.cardImg}
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={220}
              />
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <div className={styles.cardCategory}>
                  {project.category.map((cat) => (
                    <span key={cat}>{cat}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <dialog ref={dialogRef} className={styles.dialog} onClick={handleBackdropClick}>
        <div className={styles.dialogContent}>
          <div className={styles.dialogHeader}>
            <h3 className={styles.dialogTitle}>{selectedProject?.title}</h3>
            <button className={styles.dialogClose} onClick={handleClose} aria-label="Close">
              <X size={20} />
            </button>
          </div>
          <div className={styles.dialogBody}>
            <div className={styles.dialogRow}>
              <div className={styles.projectInfo}>
                <p
                  className={styles.projectDescription}
                  dangerouslySetInnerHTML={{ __html: selectedProject?.description || "" }}
                />
                <div className={styles.projectCategory}>
                  {selectedProject?.category.map((cat) => (
                    <span key={cat}>{cat}</span>
                  ))}
                </div>
              </div>

              {selectedProject?.images && (
                <div className={styles.projectImages}>
                  <div className={styles.carouselWrapper}>
                    <div className={styles.carouselMain}>
                      <Image
                        src={selectedProject.images[index] || "/placeholder.svg"}
                        alt={`${selectedProject.title} - ${index + 1}`}
                        width={600}
                        height={400}
                        className={styles.carouselImage}
                      />
                      {selectedProject.images.length > 1 && (
                        <>
                          <button className={`${styles.carouselBtn} ${styles.carouselPrev}`} onClick={handlePrev} aria-label="Previous">
                            <ChevronLeft size={20} />
                          </button>
                          <button className={`${styles.carouselBtn} ${styles.carouselNext}`} onClick={handleNext} aria-label="Next">
                            <ChevronRight size={20} />
                          </button>
                        </>
                      )}
                    </div>
                    {selectedProject.images.length > 1 && (
                      <div className={styles.thumbnailContainer}>
                        {selectedProject.images.map((image, idx) => (
                          <div
                            key={idx}
                            onClick={() => setIndex(idx)}
                            className={`${styles.thumbnail} ${idx === index ? styles.active : ""}`}
                          >
                            <Image src={image} alt={`img ${idx + 1}`} width={60} height={40} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={styles.verticalImageContainer}>
                    {selectedProject.images.map((image, idx) => (
                      <div key={idx} className={styles.verticalImage}>
                        <Image
                          src={image}
                          alt={`${selectedProject.title} - ${idx + 1}`}
                          width={600}
                          height={400}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default Project;
