"use client";

import { useState, useEffect } from "react";
import SidebarSection from "@/components/SidebarSection";
import SidebarSocial from "@/components/SidebarSocial";
import type { Section } from "@/app/page";

interface SidebarWrapperProps {
  sectionOrder: Section[];
}

const SidebarWrapper: React.FC<SidebarWrapperProps> = ({ sectionOrder }) => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const check = () => setIsWideScreen(window.innerWidth >= 1300);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!isWideScreen) return null;

  return (
    <>
      <SidebarSection sectionOrder={sectionOrder} />
      <SidebarSocial />
    </>
  );
};

export default SidebarWrapper;
