import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: "001",
    title: "AI Resume Screening Agent",
    description:
      "Engineered an NLP-driven resume screening system that parses, analyzes, and ranks candidates against job descriptions using semantic similarity and keyword extraction.",
    impact:
      "⚡ Reduced manual screening effort by ~70% and improved candidate shortlisting speed",
    tools: ["Python", "NLP", "Machine Learning"],
    link: "https://github.com/sumit312-cpu/ai_resume_screening_agent",
    featured: true,
  },
  {
    id: "002",
    title: "Iris Classification",
    description:
      "Developed a supervised ML classification model using preprocessing, feature scaling, and evaluation techniques. Deployed using Flask for real-time predictions.",
    impact: "🌼 Achieved ~95% accuracy with live prediction",
    tools: ["Python", "Scikit-learn", "Flask"],
    link:
      "https://github.com/sumit312-cpu/OIBSIP/tree/main/Task1_Iris_Classification",
  },
  {
    id: "003",
    title: "Car Price Prediction",
    description:
      "Built a regression model to estimate car prices using multiple features with feature engineering and optimization techniques.",
    impact: "🚗 Improved prediction accuracy by ~15%",
    tools: ["Python", "Pandas", "Scikit-learn"],
    link: "https://github.com/sumit312-cpu", // ✅ fallback
  },
  {
    id: "004",
    title: "Spam Email Predictor",
    description:
      "Designed an NLP-based text classification system using vectorization and supervised learning techniques.",
    impact: "📧 High precision spam detection",
    tools: ["Python", "NLP", "Scikit-learn"],
    link: "https://github.com/sumit312-cpu", // ✅ fallback
  },
  {
    id: "005",
    title: "Customer Churn Prediction",
    description:
      "Built predictive models to identify churn risk using customer behavior data and ML pipelines.",
    impact: "📉 Identified high-risk customers for retention",
    tools: ["Python", "Pandas", "Scikit-learn"],
    link: "https://github.com/sumit312-cpu/customer_churn",
  },
  {
    id: "006",
    title: "E-Commerce Sales Dashboard",
    description:
      "Created an interactive Power BI dashboard analyzing sales trends, revenue, and customer behavior.",
    impact: "📊 Delivered actionable business insights",
    tools: ["Power BI", "SQL", "Excel"],
    link: "https://github.com/sumit312-cpu/Ecommerce-Sales-Dashboard",
  },
  {
    id: "007",
    title: "Retail IQ Analysis",
    description:
      "Performed retail analytics including segmentation and KPI tracking using SQL and visualization tools.",
    impact: "🛒 Extracted strategic retail insights",
    tools: ["SQL", "Power BI", "Excel"],
    link: "https://github.com/sumit312-cpu/RETAIL_IQ_PROJECTS",
  },
  {
    id: "008",
    title: "Trader Behaviour Analysis",
    description:
      "Analyzed trading datasets using statistical methods and visualization to identify behavior patterns.",
    impact: "📈 Identified trading trends and risk signals",
    tools: ["Python", "Pandas", "Matplotlib"],
    link: "https://github.com/sumit312-cpu/Trader-behaviour-analysis",
  },
  {
    id: "009",
    title: "Insurance Prediction Model",
    description:
      "Developed a regression model to estimate insurance costs based on demographics and lifestyle data.",
    impact: "💰 Improved pricing prediction accuracy",
    tools: ["Python", "Pandas", "Scikit-learn"],
    link: "https://github.com/sumit312-cpu", // ✅ fallback
  },
  {
    id: "010",
    title: "Trading Bot",
    description:
      "Built an automated trading bot using APIs and rule-based strategies for real-time execution.",
    impact: "🤖 Automated trading operations",
    tools: ["Python", "APIs", "Automation"],
    link: "https://github.com/sumit312-cpu", // ✅ fallback
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-b border-white/5">

      <p className="mb-4 font-mono text-sm text-purple-400">
        // 02 — PROJECTS
      </p>

      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-10">
        Featured <span className="italic text-purple-500">Work.</span>
      </h2>

      {/* FEATURED */}
      {projects.filter(p => p.featured).map(project => (
        <a
          key={project.id}
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="block mb-12 border border-purple-500/30 p-8 rounded-xl bg-white/5 backdrop-blur-md max-w-3xl card-hover"
        >
          <p className="text-purple-400 text-sm mb-4">{project.id}</p>

          <h3 className="text-3xl font-bold text-white mb-4">
            {project.title}
          </h3>

          <p className="text-gray-400 leading-relaxed">
            {project.description}
          </p>

          <p className="text-purple-400 mt-4 font-medium">
            {project.impact}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tools.map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs border border-white/10 rounded-md"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="flex justify-end mt-6">
            <ExternalLink className="text-purple-400" size={20} />
          </div>
        </a>
      ))}

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.filter(p => !p.featured).map(project => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="border border-white/10 p-6 rounded-lg bg-white/5 hover:border-purple-500 transition card-hover h-full flex flex-col justify-between"
          >
            <div>
              <p className="text-purple-400 text-sm mb-3">
                {project.id}
              </p>

              <h3 className="text-lg font-semibold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>

              <p className="text-purple-400 text-sm mt-3 font-medium">
                {project.impact}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs border border-white/10 rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <ExternalLink className="text-purple-400" size={18} />
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}