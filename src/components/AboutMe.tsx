import React from "react";
import Image from "next/image";

const AboutMe: React.FC = () => {
  return (
    <section className="container" id="about-me">
      <div className="row">
        <div className="col-6">
          <h2>
            <span className="section-number">01</span>
            <span>About Me</span>
          </h2>
          <p>
            Are you seeking a Front-End Developer who produces clean and has a knowledge of design?
            <br />
            If so, let’s build something great together!
            <br />
            <br />
            Hi there 👋
            <br />
            I’m Ayaka Kojima. I have 8 years of experience as a Front-End Developer and UI Designer. I combine beauty
            and function to create digital products. My expertise also helps design and development teams work together,
            which leads to strong and successful results.
            <br />
            <br />
            When I’m not coding, I love exploring new design ideas, experimenting with new tools and technologies, and
            finding creative ways to improve how users interact.
            <br />
            <br />
            Outside of work, I enjoy sketching, watching movies, and practicing martial arts like MMA and Brazilian
            Jiu-Jitsu.
            <br />
            And of course, I love spending time with my cat 🐱 <br />
            He is perfect coding partner!
          </p>
        </div>
        <div className="col-6">
          <Image
            src="/assets/images/aboutme.png"
            alt="headshot"
            width={300}
            height={300}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
