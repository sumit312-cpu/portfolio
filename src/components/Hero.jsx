import { motion } from "framer-motion";
import profilePic from "../assets/profile (3).jpeg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full blur-sm opacity-70"></div>

      {/* ✅ MAIN CONTAINER (THIS FIXES ALIGNMENT) */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-purple-400 font-mono mb-6">
              // data scientist · ml enthusiast
            </p>

            <h1 className="font-bold leading-[0.95] tracking-tight">
              <span className="block text-[clamp(3rem,8vw,6rem)]">
                Sumit
              </span>
              <span className="block text-[clamp(3rem,8vw,6rem)] italic text-purple-500">
                Tiwari.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-gray-400 text-lg leading-relaxed">
              I build AI pipelines, dashboards, and machine learning models that
              transform raw data into actionable insights and real-world decisions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="border border-white/10 px-6 py-3 rounded-md hover:border-purple-500 hover:text-white transition"
              >
                Get in touch →
              </a>

              <a
                href="#projects"
                className="bg-purple-600 px-6 py-3 rounded-md text-white font-medium hover:bg-purple-500 transition shadow-[0_0_20px_rgba(124,58,237,0.4)]"
              >
                View Projects →
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-10"
          >
            <div className="relative group">
              <img
                src={profilePic}
                alt="Sumit Tiwari"
                className="w-56 h-56 rounded-2xl object-cover border border-white/10 
                shadow-[0_0_40px_rgba(124,58,237,0.5)] 
                group-hover:scale-105 transition"
              />
              <span className="absolute bottom-2 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></span>
            </div>

            <div className="flex flex-col gap-6 text-center">
              <div>
                <p className="text-purple-400 text-3xl font-bold">10+</p>
                <p className="text-gray-500 text-sm">Projects</p>
              </div>

              <div>
                <p className="text-purple-400 text-3xl font-bold">7.95</p>
                <p className="text-gray-500 text-sm">CGPA</p>
              </div>

              <div>
                <p className="text-purple-400 text-3xl font-bold">1</p>
                <p className="text-gray-500 text-sm">Internship Experience</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}