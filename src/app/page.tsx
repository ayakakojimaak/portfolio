import React from "react";
// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
// import AboutMe from "@/components/AboutMe";
// import ProjectSection from "@/components/ProjectSection";
import "@/styles/main.scss";

export default function Home() {
  return (
    <div id="main">
      <Hero />
      <Sidebar />
    </div>
  );
}
