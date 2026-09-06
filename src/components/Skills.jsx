import {   
  SiPython,   
  SiTensorflow,   
  SiPytorch,   
  SiDocker,   
  SiPandas,   
  SiNumpy,   
  SiScikitlearn,   
  SiFastapi,   
  SiStreamlit,   
  SiGit,   
  SiGithub   
} from "react-icons/si";   

export default function Skills() {   

  const skills = [   
    { name: "Python", icon: <SiPython /> },   
    { name: "SQL", icon: "🗄️" },   
    { name: "Pandas", icon: <SiPandas /> },   
    { name: "NumPy", icon: <SiNumpy /> },   
    { name: "Scikit-learn", icon: <SiScikitlearn /> },   
    { name: "TensorFlow", icon: <SiTensorflow /> },   
    { name: "PyTorch", icon: <SiPytorch /> },   
    { name: "Deep Learning", icon: "🧠" },   
    { name: "Machine Learning", icon: "🤖" },   
    { name: "NLP", icon: "💬" },   
    { name: "OpenAI API", icon: "⚡" },   
    { name: "LLMs", icon: "🧠" },   
    { name: "RAG", icon: "🔗" },   
    { name: "Agentic AI", icon: "🚀" },   
    { name: "Prompt Engineering", icon: "✍️" },   
    { name: "FastAPI", icon: <SiFastapi /> },   
    { name: "Streamlit", icon: <SiStreamlit /> },   
    { name: "Docker", icon: <SiDocker /> },   
    { name: "MLOps", icon: "⚙️" },   
    { name: "Azure", icon: "☁️" },   
    { name: "Git", icon: <SiGit /> },   
    { name: "GitHub", icon: <SiGithub /> }   
  ];   

  const loopSkills = [...skills, ...skills];   

  return (   
    <section  
      id="skills"  
      className="py-16 border-b border-white/5 overflow-hidden"
    >   

      {/* Heading */}  
      <div className="mb-12">   
        <p className="text-sm text-purple-400 mb-2">
          // 04 – TOOLKIT
        </p>   

        <h2 className="text-4xl md:text-6xl font-bold">   
          Technologies I <span className="text-purple-500">Use.</span>   
        </h2>   
      </div>   

      {/* Scroll row */}
      <div className="overflow-hidden"> 
        <div className="flex gap-6 animate-scroll whitespace-nowrap"> 

          {loopSkills.map((skill, index) => (   
            <div   
              key={index}   
              className="flex items-center gap-2 px-6 py-3 rounded-full   
              bg-white/5 border border-white/10   
              text-sm text-gray-300   
              backdrop-blur-md   
              hover:border-purple-500 hover:text-white   
              transition duration-300"   
            >   
              <span className="text-lg">{skill.icon}</span>   
              {skill.name}   
            </div>   
          ))}   

        </div> 
      </div> 

    </section>   
  );   
}