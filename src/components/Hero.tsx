"use client";
import React from "react";
import Image from "next/legacy/image";
import { Github, Linkedin, Twitter } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="container" id="hero">
      <div className="row border-bottom pb-4">
        <div className="col-12 col-md-4 col-lg-3">
          <Image src="/assets/images/headshot.jpg" alt="headshot" width={300} height={300} layout="intrinsic" />
        </div>
        <div className="col-12 col-md-8 col-lg-9 d-flex flex-column justify-content-between">
          <div>
            <h1>Ayaka Kojima</h1>
            <div className="mt-2">Front-end Developer & UI designer</div>
          </div>
          <ul className="lh-sm">
            <li>- 4+ years as a Designer & 4+ years as a Front-End Developer</li>
            <li>- From design to development, providing end-to-end solutions</li>
            <li>- React.js, Next.js, TypeScript, Figma</li>
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <ul className="d-flex gap-2">
              <li>
                <a href="https://www.linkedin.com/in/ayakakojimaaka/">
                  <Linkedin size={20} />
                </a>
              </li>
              <li>
                <a href="https://github.com/ayakakojimaak/">
                  <Github size={20} />
                </a>
              </li>
              <li>
                <a href="https://x.com/_em_penguin/">
                  <Twitter size={20} />
                </a>
              </li>
            </ul>
            <a className="border-bottom" href="">
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
