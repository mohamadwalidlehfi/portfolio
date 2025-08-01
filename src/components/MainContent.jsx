import { useState, useEffect } from "react";
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Resume from "../components/Resume";
import Clients from "./Clients";

const MainContent = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [contentHeight, setContentHeight] = useState("calc(100vh - 180px)");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setContentHeight("calc(100vh - 160px)");
      } else {
        setContentHeight("calc(100vh - 180px)");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full md:flex-1 bg-gray-900 text-white p-4 md:p-6 rounded-xl shadow-lg border-4 border-teal-400 transition-all h-fit min-h-[80vh]">
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />

      <div 
        className="p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-teal-400 scrollbar-track-gray-700 rounded-lg"
        style={{ height: contentHeight }}
      >
        {activeSection === "about" && <AboutMe />}
        {activeSection === "portfolio" && <Portfolio />}
        {activeSection === "resume" && <Resume />}
        {activeSection === "contact" && <Contact />}
        {activeSection === "clients" && <Clients />}
      </div>
    </div>
  );
};

export default MainContent;