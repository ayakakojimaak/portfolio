import React from "react";
import Image from "next/image";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="container" id="hero">
      <div className="row border-bottom pb-4">
        <img className="col-4 col-lg-3" src="/assets/images/headshot.jpg" alt="headshot" />
        <div className="col-8 col-lg-9">
          <h1>Ayaka Kojima</h1>
          <p>Front-end Developer & UI designer</p>
          <ul>
            <li>4+ years as a Designer & 4+ years as a Front-End Developer</li>
            <li>Available now</li>
            <li>From web design to UI and development, providing end-to-end solutions</li>
            <li>React.js, Next.js, JavaSctipt, TypeScript, WordPress</li>
            <li>Figma, Canva, Adobe Illustrator, Adobe Photoshop</li>
          </ul>
          <div className="d-flex gap-3 align-items-center mt-2">
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
            <a href="">
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
