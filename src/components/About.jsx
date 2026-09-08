export default function About() {
  return (
    <section
      id="about"
      className="py-12 md:py-16 border-b border-white/5"
    >
      <div className="w-full grid md:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* ================= LEFT ================= */}
        <div>
          <p className="text-purple-400 font-mono mb-4">
            // 01 — ABOUT
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Data is a{" "}
            <span className="italic text-purple-500">language.</span>
            <br />
            I translate it.
          </h2>

          <p className="text-gray-400 mt-8 leading-relaxed max-w-lg">
            I’m <span className="text-white font-medium">Sumit Tiwari</span>, a
            Data Analyst and AI/ML enthusiast focused on turning raw data into
            actionable insights. I work across the full data pipeline — from
            data cleaning and exploratory analysis to building machine learning
            models and interactive dashboards.
          </p>

          <p className="text-gray-400 mt-6 leading-relaxed max-w-lg">
            I’ve completed hands-on training in Data Science & AI and worked on
            real-world datasets during my internship at Oasis Infobyte. I’m currently
            seeking entry-level opportunities where I can contribute to data-driven
            decision-making and grow as a data professional.
          </p>

          {/* 🌐 LANGUAGES */}
          <div className="flex gap-4 mt-8">
            <div className="px-4 py-2 border border-white/10 rounded-md text-sm text-gray-300">
              🇬🇧 English — Fluent
            </div>

            <div className="px-4 py-2 border border-white/10 rounded-md text-sm text-gray-300">
              🇮🇳 Hindi — Native
            </div>
          </div>

          <a
            href="/RESUME_SUMIT.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 border border-white/10 px-5 py-3 rounded-md text-sm hover:border-purple-500 hover:text-purple-400 transition"
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/* ================= RIGHT ================= */}
        <div>
          <p className="text-purple-400 font-mono mb-6">
            // core skills
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              "Python",
              "SQL",
              "Pandas & NumPy",
              "Machine Learning",
              "EDA & Visualization",
              "Power BI",
              "Excel (Advanced)",
              "Scikit-learn",
              "Matplotlib / Seaborn",
              "Data Cleaning",
            ].map((skill, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 px-4 py-3 rounded-md text-sm text-gray-300 hover:border-purple-500 hover:text-white transition"
              >
                • {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}