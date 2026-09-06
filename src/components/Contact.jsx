import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" className="py-16 border-b border-white/5">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <p className="mb-4 font-mono text-sm text-purple-400">
            // CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Let’s work <br />
            <span className="text-purple-500 italic">together.</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-md leading-relaxed">
            Open to entry-level roles in Data Analytics, Data Science, and AI.
            Based in India, available for remote opportunities worldwide.
          </p>

          {/* SEND BUTTON */}
          <a
            href="mailto:sumittiwari62642004@gmail.com?subject=Hiring Opportunity&body=Hi Sumit, I saw your portfolio and would like to connect."
            onClick={() => {
              setTimeout(() => {
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=sumittiwari62642004@gmail.com&su=Hiring Opportunity&body=Hi Sumit, I saw your portfolio and would like to connect.",
                  "_blank"
                );
              }, 300);
            }}
            className="inline-block mt-8 px-8 py-3 rounded-lg 
            bg-gradient-to-r from-purple-600 to-purple-500 
            hover:opacity-90 transition font-semibold text-white 
            shadow-[0_0_20px_rgba(124,58,237,0.5)]"
          >
            SEND A MESSAGE →
          </a>
        </div>

        {/* RIGHT */}
        <div className="space-y-4">

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/sumit-tiwari-7a7112381/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl 
            bg-white/5 border border-white/10 hover:border-purple-500 
            hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition"
          >
            <FiLinkedin className="text-xl text-purple-400" />
            <div>
              <p className="text-sm text-gray-400">LINKEDIN</p>
              <p className="text-white">linkedin.com/in/sumit-tiwari</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sumit312-cpu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl 
            bg-white/5 border border-white/10 hover:border-purple-500 
            hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition"
          >
            <FiGithub className="text-xl text-purple-400" />
            <div>
              <p className="text-sm text-gray-400">GITHUB</p>
              <p className="text-white">github.com/sumit312-cpu</p>
            </div>
          </a>

          {/* ✅ EMAIL (FIXED) */}
          <a
            href="mailto:sumittiwari62642004@gmail.com?subject=Hiring Opportunity&body=Hi Sumit, I saw your portfolio and would like to connect."
            onClick={() => {
              setTimeout(() => {
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=sumittiwari62642004@gmail.com&su=Hiring Opportunity&body=Hi Sumit, I saw your portfolio and would like to connect.",
                  "_blank"
                );
              }, 300);
            }}
            className="flex items-center gap-4 p-4 rounded-xl 
            bg-white/5 border border-white/10 hover:border-purple-500 
            hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition"
          >
            <FiMail className="text-xl text-purple-400" />
            <div>
              <p className="text-sm text-gray-400">EMAIL</p>
              <p className="text-white break-all">
                sumittiwari62642004@gmail.com
              </p>
            </div>
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/Sumitti/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl 
            bg-white/5 border border-white/10 hover:border-purple-500 
            hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition"
          >
            <SiLeetcode className="text-xl text-purple-400" />
            <div>
              <p className="text-sm text-gray-400">LEETCODE</p>
              <p className="text-white">leetcode.com/u/Sumitti</p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}