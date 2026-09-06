import GridBackground from "./components/GridBackground";
import MouseGlow from "./components/MouseGlow";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor"; // ✅ ADD THIS

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050507] text-white font-sans overflow-x-hidden">

      {/* ✅ CURSOR FIRST (VERY IMPORTANT) */}
      <CustomCursor />

      <GridBackground />
      <MouseGlow />

      <div className="relative z-10">
        <Navbar />

        <main className="max-w-6xl mx-auto w-full px-5 sm:px-6 md:px-10 lg:px-16">

          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Contact />

        </main>

        <footer className="mt-12 border-t border-white/5">
          <div className="max-w-6xl mx-auto w-full px-5 sm:px-6 md:px-10 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">

            <p>© 2026 Sumit Tiwari • All rights reserved</p>

            <p className="mt-2 md:mt-0">
              AI & Data Science • India
            </p>

          </div>
        </footer>
      </div>
    </div>
  );
}
