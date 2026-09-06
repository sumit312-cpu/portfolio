export default function Education() {
  return (
    <section
      id="education"
      className="py-16 border-b border-white/5"
    >
      <div>

        {/* Heading */}
        <p className="mb-4 font-mono text-sm text-purple-400">
          // 05 — EDUCATION & CREDENTIALS
        </p>

        <h2 className="text-4xl font-bold text-white sm:text-5xl">
          Academic <span className="italic text-purple-500">Background.</span>
        </h2>

        {/* Card */}
        <div className="mt-10 grid lg:grid-cols-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md overflow-hidden">

          {/* LEFT */}
          <div className="p-8 border-b lg:border-b-0 lg:border-r border-white/10">
            <p className="text-xs text-purple-400 font-mono mb-4">
              // DEGREE
            </p>

            <h3 className="text-2xl font-semibold text-white">
              B.Tech — Computer Science
            </h3>

            <p className="text-purple-400 mt-2">
              RGPV University, Bhopal (MP)
            </p>

            <p className="text-gray-400 mt-2">
              2021 – 2025 · CGPA{" "}
              <span className="text-white font-semibold">7.95 / 10</span>
            </p>
          </div>

          {/* RIGHT */}
          <div className="p-8">
            <p className="text-xs text-purple-400 font-mono mb-4">
              // CERTIFICATIONS
            </p>

            <ul className="space-y-4 text-gray-300">

              <li className="flex items-start gap-2 hover:text-white transition">
                <span className="text-purple-500 mt-1">▶</span>
                Advanced Excel — Intellipaat (2026)
              </li>

              <li className="flex items-start gap-2 hover:text-white transition">
                <span className="text-purple-500 mt-1">▶</span>
                Power BI — Intellipaat (2026)
              </li>

              <li className="flex items-start gap-2 hover:text-white transition">
                <span className="text-purple-500 mt-1">▶</span>
                SQL — Intellipaat (2026)
              </li>

              <li className="flex items-start gap-2 hover:text-white transition">
                <span className="text-purple-500 mt-1">▶</span>
                Linux Fundamentals — Intellipaat
              </li>

              <li className="flex items-start gap-2 hover:text-white transition">
                <span className="text-purple-500 mt-1">▶</span>
                Data Science Internship Certificate — Oasis Infobyte (Apr–May 2026)
              </li>

            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}