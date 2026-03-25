"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    num: "01",
    type: "FULL-STACK / AI",
    category: "Fullstack",
    name: "ExamGenie",
    role: "AI-powered MERN assessment platform with intelligent exam generation",
    desc: "A MERN stack platform featuring AI exam generation and distinct dashboards for admins, teachers, and students.",
    fullDesc: "ExamGenie is a comprehensive educational platform built on the MERN stack featuring three dedicated portals. The admin dashboard handles user onboarding and teacher-student assignments. The teacher portal leverages AI to assist in generating exam papers, preview designs, automatically track grades, and dispatch tests. The student portal offers an intuitive interface to attempt tests and review detailed performance feedback including error analysis.",
    pills: ["MongoDB", "Express", "React", "Node.js"],
    techArray: ["MongoDB", "Express", "React", "Node.js", "AI Integration"],
    features: [
      "Role-based access with dedicated Admin, Teacher, and Student dashboards",
      "AI-assisted dynamic exam generation, preview, and dispatching",
      "Automated test grading and detailed student performance analytics"
    ],
    github: "https://github.com/AllenLenoy/exam-genie",
    image: "/examgenie.png"
  },
  {
    num: "02",
    type: "FULL-STACK",
    category: "Fullstack",
    name: "Skill India App",
    role: "Full-stack ecosystem bridging education and professional job opportunities",
    desc: "A web platform empowering individuals with access to skill development, certifications, and job opportunities.",
    fullDesc: "The Skill India App was designed to bridge the gap between education and employment by providing access to comprehensive skill development programs. This user-friendly platform enables individuals to browse courses, enroll in programs, view lessons, obtain certifications, and seamlessly apply for relevant jobs.",
    pills: ["JavaScript", "PHP", "MySQL"],
    techArray: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Course browsing, enrollment, and lesson viewing",
      "Automated certification upon course completion",
      "Integrated job application portal"
    ],
    github: "https://github.com/AllenLenoy/skillindia",
    image: "/skillindia.png"
  },
  {
    num: "03",
    type: "AI / PYTHON",
    category: "AI",
    name: "Wellness Bot",
    role: "Voice-enabled health assistant providing AI symptom checks and geo-support",
    desc: "Comprehensive AI-powered health assistant with symptom checking, voice interaction, and hospital finder.",
    fullDesc: "An interactive health platform built using Streamlit and Mistral-7B via OpenRouter. This assistant features advanced AI symptom analysis, multi-turn medical conversations, and integrated voice input/output capabilities. It includes a geolocation-based hospital finder (12km radius), prescription OCR scanning, and professional medical report generation in PDF format.",
    pills: ["Streamlit", "Mistral AI", "Python"],
    techArray: ["Streamlit", "Python", "Mistral-7B", "OpenRouter API", "Folium", "SpeechRecognition", "gTTS"],
    features: [
      "AI Symptom Checker with multi-turn medical context",
      "Real-time Voice Interaction and Prescription OCR analysis",
      "Geo-aware Hospital Finder with interactive mapping"
    ],
    github: "https://github.com/AllenLenoy/WellnessBot",
    image: "/wellnessbot.png"
  },
  {
    num: "04",
    type: "FRONTEND / CREATIVE",
    category: "Fullstack",
    name: "Portfolio Interface",
    role: "High-fidelity creative portfolio focused on fluid 3D interactions",
    desc: "A highly-interactive, award-winning portfolio website.",
    fullDesc: "This personal portfolio website was engineered to deliver a pristine user experience. Focused deeply on extreme interactivity, a custom dark-mode unified visual aesthetic, and butter-smooth 3D carousel animations to produce an absolutely premium user journey.",
    pills: ["Next.js", "Framer Motion", "TailwindCSS"],
    techArray: ["Next.js", "React", "Framer Motion", "TailwindCSS"],
    features: [
      "Extensive micro-interactions and magnetic components",
      "Custom 3D animated CSS layout implementations",
      "Dynamic system theme sync and performance optimizations"
    ],
    github: "https://github.com/AllenLenoy/portfolio",
    image: "/portfolio-preview.png"
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProj, setSelectedProj] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [timer, setTimer] = useState(0);

  const filteredProjects = projects;

  // Ensure activeIndex is bounded and timer resets
  useEffect(() => {
    if (activeIndex >= filteredProjects.length) {
      setActiveIndex(0);
    }
    setTimer(0);
  }, [filteredProjects.length, activeIndex]);

  // Auto-advance carousel & Timer logic
  useEffect(() => {
    if (isHovered || selectedProj) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
      setTimer(0);
    }, 4000);

    const timerInterval = setInterval(() => {
      setTimer(prev => Math.min(prev + 10, 4000));
    }, 10);

    return () => {
      clearInterval(interval);
      clearInterval(timerInterval);
    };
  }, [isHovered, filteredProjects.length, selectedProj]);

  const handleManualNav = (index) => {
    setActiveIndex(index);
    setTimer(0);
  };

  const getCardTransform = (index) => {
    const total = filteredProjects.length;
    let position = (index - activeIndex + total) % total;
    if (position > total / 2) position -= total;

    if (position === 0) {
      return { zIndex: 20, scale: 1, x: 0, z: 0, rotateY: 0, opacity: 1, boxShadow: "0 8px 32px rgba(200,169,110,0.15), 0 2px 8px rgba(200,169,110,0.10)" };
    } else if (position === -1 || (position === total - 1 && total > 2)) {
      return { zIndex: 10, scale: 0.78, x: -240, z: -100, rotateY: 25, opacity: 0.5, boxShadow: "0 0 0 rgba(0,0,0,0)" };
    } else if (position === 1) {
      return { zIndex: 10, scale: 0.78, x: 240, z: -100, rotateY: -25, opacity: 0.5, boxShadow: "0 0 0 rgba(0,0,0,0)" };
    } else {
      return { zIndex: 1, scale: 0.58, x: position < 0 ? -400 : 400, z: -200, rotateY: position < 0 ? 45 : -45, opacity: 0.2, boxShadow: "0 0 0 rgba(0,0,0,0)" };
    }
  };

  return (
    <section id="projects" className="pt-32 pb-24 bg-[#0d0d0d] border-t border-white/[0.08] relative overflow-hidden font-sans w-full cursor-default">
      
      <div className="container px-6 mx-auto flex flex-col items-center text-center z-10">
        
        {/* Header Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-[4rem] font-bold text-[#f5f5f0] tracking-tight font-syne"
        >
          Featured <span className="text-[#c8a96e]">Projects.</span>
        </motion.h2>

      </div>

      {/* Floating 3D Coverflow Carousel */}
      {filteredProjects.length > 0 && (
        <div className="w-full pb-10 flex flex-col items-center">
          <motion.div
            className="relative w-full overflow-visible flex flex-col items-center mt-[12px] pb-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Carousel Container */}
            <div className="relative w-full h-[320px] md:h-[350px] flex items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
              {/* Left Click Zone (Covers exactly everything left of the center card) */}
              <div 
                className="absolute left-0 top-0 h-full z-30 cursor-pointer w-[calc(50%-180px)] md:w-[calc(50%-240px)]" 
                onClick={() => handleManualNav((activeIndex - 1 + filteredProjects.length) % filteredProjects.length)} 
              />
              {/* Right Click Zone (Covers exactly everything right of the center card) */}
              <div 
                className="absolute right-0 top-0 h-full z-30 cursor-pointer w-[calc(50%-180px)] md:w-[calc(50%-240px)]" 
                onClick={() => handleManualNav((activeIndex + 1) % filteredProjects.length)} 
              />
              
              {filteredProjects.map((proj, idx) => (
                <motion.div
                  key={proj.num}
                  initial={false}
                  animate={getCardTransform(idx)}
                  transition={{
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="absolute w-[360px] md:w-[480px] h-[220px] md:h-[280px] cursor-pointer"
                  onClick={() => {
                     if (idx === activeIndex) {
                       setSelectedProj(proj);
                     } else {
                       handleManualNav(idx);
                     }
                  }}
                >
                  <div className={`w-full h-full rounded-2xl overflow-hidden flex flex-col transition-all duration-400 group ${idx === activeIndex ? 'border border-[#c8a96e]/60 translate-y-[-4px] shadow-[0_8px_40px_rgba(200,169,110,0.25)]' : 'border border-bg-border/60'}`}>
                    
                    {/* Entire Card is just the Image */}
                    <div className="w-full h-full bg-black relative overflow-hidden group">
                      <img 
                        src={proj.image} 
                        alt={proj.name}
                        className={`w-full h-full object-cover transition-all duration-700 ${idx === activeIndex ? 'scale-105 group-hover:scale-110 group-hover:blur-md' : 'scale-100 opacity-60'}`}
                      />
                      
                      {/* Active State Hover Expand Prompts */}
                      <AnimatePresence>
                        {idx === activeIndex && (
                          <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <span className="bg-[#c8a96e] text-[#0d0d0d] font-mono text-xs font-bold px-6 py-2 rounded-full shadow-xl uppercase tracking-widest flex items-center gap-2">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="M21 3l-7 7" /><path d="M3 21l7-7" /></svg>
                              View Details
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>

            {/* Active project Name */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="text-center my-6 px-4"
              >
                <h3 className="text-[#f5f5f0] text-3xl font-syne font-bold tracking-tight">
                  {filteredProjects[activeIndex]?.name}
                </h3>
                <p className="font-mono text-xs text-[#c8a96e] uppercase tracking-[0.2em] mt-2">
                  {filteredProjects[activeIndex]?.role}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Controls Mimicking Certificates */}
            <div className="flex flex-col items-center gap-5">
              <div className="flex items-center gap-10">
                  <button
                    onClick={() => handleManualNav((activeIndex - 1 + filteredProjects.length) % filteredProjects.length)}
                    className="w-[52px] h-[52px] rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10 flex items-center justify-center text-[#c8a96e] shadow-[0_0_15px_rgba(200,169,110,0.15)] hover:bg-[#c8a96e]/20 hover:border-[#c8a96e]/60 hover:shadow-[0_0_20px_rgba(200,169,110,0.3)] hover:-translate-y-0.5 transition-all duration-300 relative z-30"
                  >
                    <FaChevronLeft className="text-[16px] ml-[-2px]" />
                  </button>

                  {/* Dot Indicators */}
                  <div className="flex gap-4 items-center">
                    {filteredProjects.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handleManualNav(i)}
                        className="relative flex items-center justify-center w-[20px] h-[20px]"
                      >
                        {i === activeIndex && (
                            <svg className="absolute inset-0 w-full h-full -rotate-90">
                              <circle
                                  cx="10" cy="10" r="9"
                                  fill="none"
                                  stroke="rgba(200,169,110,0.15)" strokeWidth="1.5"
                              />
                              <motion.circle
                                  cx="10" cy="10" r="9"
                                  fill="none"
                                  stroke="#c8a96e" strokeWidth="1.5"
                                  strokeDasharray="56.54"
                                  initial={{ strokeDashoffset: 56.54 }}
                                  animate={{ strokeDashoffset: 56.54 - (timer / 4000) * 56.54 }}
                                  transition={{ duration: 0.1, ease: "linear" }}
                              />
                            </svg>
                        )}
                        <div className={`rounded-full transition-all duration-300 relative z-10 ${i === activeIndex ? 'w-[12px] h-[12px] bg-[#c8a96e]' : 'w-[8px] h-[8px] border border-white/20 hover:border-white/50'}`} />
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handleManualNav((activeIndex + 1) % filteredProjects.length)}
                    className="w-[52px] h-[52px] rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10 flex items-center justify-center text-[#c8a96e] shadow-[0_0_15px_rgba(200,169,110,0.15)] hover:bg-[#c8a96e]/20 hover:border-[#c8a96e]/60 hover:shadow-[0_0_20px_rgba(200,169,110,0.3)] hover:-translate-y-0.5 transition-all duration-300 relative z-30"
                  >
                    <FaChevronRight className="text-[16px] mr-[-2px]" />
                  </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Detail Modal Overlay with GitHub Link */}
      <AnimatePresence>
        {selectedProj && (
          <motion.div 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }} 
             exit={{ opacity: 0 }}
             transition={{ duration: 0.3 }}
             className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-bg-base/80 backdrop-blur-md"
             onClick={() => setSelectedProj(null)}
          >
             <motion.div 
                initial={{ scale: 0.95, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 30, opacity: 0 }}
                transition={{ type: "spring", bounce: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-5xl bg-[#0d0d0d] rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col md:flex-row border border-[#c8a96e]/30"
             >
                {/* Close Button Top Right (Mobile) */}
                <button 
                  onClick={() => setSelectedProj(null)} 
                  className="absolute top-4 right-4 lg:hidden w-10 h-10 rounded-full border border-bg-border bg-bg-base flex items-center justify-center text-[#c8a96e] hover:text-[#f5f5f0] hover:bg-bg-card transition-all z-20 shadow-sm"
                >
                  <FaTimes className="w-4 h-4" />
                </button>

                {/* Left Side: Image Media */}
                <div className="w-full md:w-1/2 bg-[#050505] relative h-64 md:h-auto border-b md:border-b-0 md:border-r border-[#c8a96e]/20 flex items-center justify-center">
                   <img 
                     src={selectedProj.image} 
                     alt={selectedProj.name}
                     className="w-full h-full object-contain p-4 md:p-8 opacity-90"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent flex items-end p-8 pb-12">
                     <div>
                       <div className="text-[#c8a96e] text-[10px] font-mono font-bold tracking-[0.2em] mb-2 uppercase drop-shadow-md">
                         {selectedProj.type}
                       </div>
                       <h2 className="text-3xl md:text-4xl text-white font-syne font-bold leading-tight drop-shadow-xl">
                         {selectedProj.name}
                       </h2>
                     </div>
                   </div>
                </div>

                {/* Right Side: Scrollable Details */}
                <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto flex flex-col bg-[#0d0d0d] relative">
                   
                   <button 
                     onClick={() => setSelectedProj(null)} 
                     className="absolute top-6 right-6 hidden lg:flex w-10 h-10 rounded-full border border-white/10 bg-white/5 items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all z-20 shadow-sm"
                   >
                     <FaTimes className="w-4 h-4" />
                   </button>

                   <div className="flex gap-3 mb-6 items-center mt-2">
                     <span className="text-[#f5f5f0] font-bold text-xs tracking-widest uppercase bg-white/5 px-3 py-1 rounded-md border border-white/10">
                       {selectedProj.role}
                     </span>
                   </div>

                   <p className="text-white/60 text-sm md:text-[15px] leading-relaxed mb-8">
                     {selectedProj.fullDesc}
                   </p>

                   <div className="mb-8">
                     <h4 className="text-white text-[10px] font-mono tracking-[0.2em] font-bold uppercase mb-4 border-b border-white/10 pb-2">Tech Stack</h4>
                     <div className="flex flex-wrap gap-2">
                       {selectedProj.techArray.map(tech => (
                         <span key={tech} className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-[#c8a96e] text-[10px] font-mono uppercase tracking-widest shadow-sm hover:border-[#c8a96e]/40 transition-colors">
                           {tech}
                         </span>
                       ))}
                     </div>
                   </div>

                   <div className="mb-8 flex-1">
                     <h4 className="text-white text-[10px] font-mono tracking-[0.2em] font-bold uppercase mb-4 border-b border-white/10 pb-2">Key Highlights</h4>
                     <ul className="flex flex-col gap-3">
                       {selectedProj.features.map((feat, i) => (
                         <li key={i} className="flex items-start gap-4 text-white/50 text-sm">
                           <span className="text-[#c8a96e] mt-1.5 text-[8px]">■</span> 
                           <span className="leading-relaxed">{feat}</span>
                         </li>
                       ))}
                     </ul>
                   </div>

                   {/* Github Interactive Button */}
                   <a 
                     href={selectedProj.github} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="mt-2 flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#c8a96e] text-[#0d0d0d] font-bold font-mono text-xs uppercase tracking-[0.2em] hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg group"
                   >
                     <FaGithub className="w-5 h-5 group-hover:-translate-y-1 transition-transform"/> 
                     View on GitHub
                   </a>

                   {/* Modal Navigation Buttons */}
                   <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
                     <button
                       onClick={() => {
                         const currIdx = filteredProjects.findIndex(p => p.num === selectedProj.num);
                         const prevIdx = (currIdx - 1 + filteredProjects.length) % filteredProjects.length;
                         setSelectedProj(filteredProjects[prevIdx]);
                         setActiveIndex(prevIdx);
                       }}
                       className="group flex flex-col items-start gap-1 p-2 rounded-xl hover:bg-white/5 transition-all text-left"
                     >
                       <span className="text-white/40 text-[9px] font-mono tracking-widest uppercase flex items-center gap-2">
                         <FaChevronLeft className="text-[10px] group-hover:-translate-x-1 transition-transform" /> Previous
                       </span>
                       <span className="text-white/80 font-syne text-sm font-semibold tracking-tight line-clamp-1 w-[100px] md:w-[150px]">
                         {filteredProjects[(filteredProjects.findIndex(p => p.num === selectedProj.num) - 1 + filteredProjects.length) % filteredProjects.length]?.name}
                       </span>
                     </button>
                     <button
                       onClick={() => {
                         const currIdx = filteredProjects.findIndex(p => p.num === selectedProj.num);
                         const nextIdx = (currIdx + 1) % filteredProjects.length;
                         setSelectedProj(filteredProjects[nextIdx]);
                         setActiveIndex(nextIdx);
                       }}
                       className="group flex flex-col items-end gap-1 p-2 rounded-xl hover:bg-white/5 transition-all text-right"
                     >
                       <span className="text-white/40 text-[9px] font-mono tracking-widest uppercase flex items-center gap-2">
                         Next <FaChevronRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                       </span>
                       <span className="text-white/80 font-syne text-sm font-semibold tracking-tight line-clamp-1 w-[100px] md:w-[150px]">
                         {filteredProjects[(filteredProjects.findIndex(p => p.num === selectedProj.num) + 1) % filteredProjects.length]?.name}
                       </span>
                     </button>
                   </div>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
