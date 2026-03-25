"use client";
import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.5 } },
  };

  const SkillBox = ({ category, label, data, className = "" }) => (
    <motion.div
      variants={itemVariants}
      className={`bg-bg-base border border-bg-border rounded-2xl p-6 lg:p-8 hover:border-brand/40 transition-colors shadow-sm ${className}`}
    >
      <div className="mb-8">
        <h3 className="font-syne text-xl md:text-2xl font-bold text-text-base uppercase tracking-tight">
          {category}
        </h3>
        <p className="font-mono text-[11px] tracking-[0.18em] text-[#c8a96e] uppercase mt-1">
          {label}
        </p>
      </div>

      <div className="flex flex-wrap gap-4 lg:gap-6">
        {data.map((skill) => {
          const slug = skill.icon.toLowerCase().replace(/^si/, '');
          // Icons that have good built-in color and don't need the light variant
          const colorfulIcons = ['javascript','typescript','python','cplusplus','html5','react','tailwindcss','pytorch','tensorflow','streamlit','mongodb','postgresql','redis','firebase','figma','githubactions','fastapi','django','docker','framer'];
          const iconUrl = colorfulIcons.includes(slug)
            ? `https://cdn.simpleicons.org/${slug}`
            : `https://cdn.simpleicons.org/${slug}/f5f5f0`;
          return (
            <a
              key={skill.name}
              href={skill.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 cursor-none"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-bg-card rounded-xl border border-bg-border flex items-center justify-center p-3 shadow-inner group-hover:bg-bg-base group-hover:border-brand/50 transition-all duration-300">
                <img
                  src={iconUrl}
                  alt={skill.name}
                  className="w-full h-full object-contain transition-all duration-300"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(skill.name)}&background=1a1a1a&color=c8a96e&size=128&bold=true&font-size=0.35`;
                  }}
                />
              </div>
              <span className="font-mono text-[11px] text-text-muted group-hover:text-text-base transition-colors text-center w-full">
                {skill.name}
              </span>
            </a>
          );
        })}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 md:py-32 bg-bg-card border-t border-bg-border overflow-hidden relative">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-16 md:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <p className="font-mono text-[11px] tracking-[0.25em] text-[#c8a96e] uppercase mb-4 md:text-[12px]">
              EXPERTISE
            </p>
            <h2 className="font-syne text-5xl md:text-7xl lg:text-[80px] font-black text-text-base uppercase tracking-tighter leading-none shadow-sm">
              Technical Arsenal
            </h2>
          </motion.div>
        </div>

        {/* Bento Box Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Foundation: Languages - Spans 2 columns on large screens */}
          <SkillBox
            category="Core Languages"
            label="Foundation"
            data={skills.languages}
            className="md:col-span-2"
          />

          {/* Frameworks & Libraries */}
          <SkillBox
            category="Frameworks"
            label="& Libraries"
            data={skills.frameworks}
            className="md:row-span-2 flex flex-col"
          />

          {/* Workflow: Tools & Infrastructure */}
          <SkillBox
            category="Tools & Infra"
            label="Workflow"
            data={skills.tools}
            className="md:col-span-2"
          />
          
          {/* Soft Skills Horizontal Row */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-3 bg-bg-base border border-bg-border rounded-2xl p-6 lg:p-8 hover:border-brand/40 transition-colors shadow-sm flex flex-col lg:flex-row items-center gap-6 lg:gap-12"
          >
            <div className="flex-shrink-0 text-center lg:text-left">
              <h3 className="font-syne text-xl md:text-2xl font-bold text-text-base uppercase tracking-tight">
                Interpersonal
              </h3>
              <p className="font-mono text-[11px] tracking-[0.18em] text-[#c8a96e] uppercase mt-1">
                Soft Skills
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-8 flex-grow">
              {skills.softSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-bg-card rounded-full border border-bg-border flex items-center justify-center text-xl md:text-2xl shadow-inner">
                    {skill.icon}
                  </div>
                  <span className="font-mono text-[12px] md:text-[13px] font-semibold text-text-muted group-hover:text-text-base transition-colors tracking-wide">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
