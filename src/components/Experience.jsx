export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 border-b border-white/5"
    >
      <div>

        {/* 🔹 Heading */}
        <p className="mb-4 font-mono text-sm text-purple-400">
          // 03 — EXPERIENCE
        </p>

        <h2 className="text-4xl font-bold text-white sm:text-5xl mb-20">
          My <span className="italic text-purple-500">Journey.</span>
        </h2>

        {/* 🔥 Timeline */}
        <div className="relative">

          {/* ✨ Vertical line */}
          <div className="absolute left-3 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500/60 via-purple-500/20 to-transparent"></div>

          {/* ITEM 1 */}
          <div className="relative pl-12 mb-16 group">

            <div className="absolute left-0 top-2 flex items-center justify-center">
              <span className="w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_12px_rgba(124,58,237,0.9)] group-hover:scale-125 transition"></span>
            </div>

            <p className="text-gray-400 text-sm">
              Nov 2025 – Present
            </p>

            <div className="mt-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500 transition">

              <h3 className="text-2xl font-semibold text-white">
                Data Science & AI Training
              </h3>

              <p className="text-purple-400 font-mono text-sm mt-1">
                // Intellipaat
              </p>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Currently undergoing advanced training in Data Science and AI,
                covering machine learning, deep learning, data visualization,
                and real-world project implementations. Gaining hands-on
                experience in building models, working with large datasets, and
                deploying data-driven solutions.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Python",
                  "Machine Learning",
                  "Deep Learning",
                  "SQL",
                  "Power BI",
                ].map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs border border-white/10 rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>

            </div>
          </div>

          {/* ITEM 2 */}
          <div className="relative pl-12 group">

            <div className="absolute left-0 top-2 flex items-center justify-center">
              <span className="w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_12px_rgba(124,58,237,0.9)] group-hover:scale-125 transition"></span>
            </div>

            <p className="text-gray-400 text-sm">
              Apr – May 2026
            </p>

            <div className="mt-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500 transition">

              <h3 className="text-2xl font-semibold text-white">
                Data Science Intern
              </h3>

              <p className="text-purple-400 font-mono text-sm mt-1">
                // Oasis Infobyte — Remote
              </p>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Worked on real-world datasets to perform data analysis and build
                machine learning models. Conducted data preprocessing, feature
                engineering, and exploratory data analysis to extract meaningful
                insights. Developed predictive models and improved accuracy
                through tuning and evaluation techniques.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Python",
                  "Pandas",
                  "NumPy",
                  "Scikit-learn",
                  "Matplotlib",
                ].map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs border border-white/10 rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}