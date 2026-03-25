"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt, FaAward, FaChevronLeft, FaChevronRight, FaTimes, FaLinkedin } from "react-icons/fa";
import { trainings, education, certs, extracurriculars } from "@/data/portfolio";

// Helper for count-up animation
const CountUp = ({ to, duration = 0.8, startCount = false }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (startCount) {
      const end = parseInt(to);
      if (isNaN(end)) return;
      const startTime = performance.now();
      const animate = (currentTime) => {
        const elapsed = (currentTime - startTime) / (duration * 1000);
        const progress = Math.min(elapsed, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [startCount, to, duration]);
  return <span>{count}</span>;
};

const SectionDivider = ({ label, isVisible }) => (
  <div className="flex items-center gap-[12px] mb-10 mt-14 first:mt-0">
    <div className="w-[12px] h-[1px] bg-white/[0.08]" />
    <span className="font-mono text-[13px] md:text-[14px] uppercase tracking-[0.14em] text-white/40 whitespace-nowrap">
      {label}
    </span>
    <div className="h-[1px] flex-1 bg-white/[0.07]" />
    <motion.div
      initial={{ scale: 1 }}
      animate={isVisible ? { scale: [1, 1.8, 1], transition: { duration: 0.6 } } : {}}
      className="w-[6px] h-[6px] rounded-full bg-[#c8a96e] shadow-[0_0_8px_rgba(200,169,110,0.6)]"
    />
  </div>
);

export default function Training() {
  const [certIndex, setCertIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [timer, setTimer] = useState(0);
  const [selectedTraining, setSelectedTraining] = useState(null);
  const featured = trainings[0];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.01 });

  // Auto-advance carousel & Timer logic
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCertIndex((prev) => (prev + 1) % certs.length);
      setTimer(0);
    }, 4000);

    const timerInterval = setInterval(() => {
      setTimer(prev => Math.min(prev + 10, 4000));
    }, 10);

    return () => {
      clearInterval(interval);
      clearInterval(timerInterval);
    };
  }, [isHovered, certIndex]);

  const handleManualNav = (index) => {
    setCertIndex(index);
    setTimer(0);
  };

  const getCardTransform = (index) => {
    const total = certs.length;
    let position = (index - certIndex + total) % total;
    if (position > total / 2) position -= total;

    if (position === 0) {
      return { zIndex: 20, scale: 1, x: 0, z: 0, rotateY: 0, opacity: 1, boxShadow: "0 8px 32px rgba(200,169,110,0.15), 0 2px 8px rgba(200,169,110,0.10)" };
    } else if (position === -1 || (position === total - 1 && total > 2)) {
      return { zIndex: 10, scale: 0.78, x: -140, z: -80, rotateY: 25, opacity: 0.5, boxShadow: "0 0 0 rgba(0,0,0,0)" };
    } else if (position === 1) {
      return { zIndex: 10, scale: 0.78, x: 140, z: -80, rotateY: -25, opacity: 0.5, boxShadow: "0 0 0 rgba(0,0,0,0)" };
    } else {
      return { zIndex: 1, scale: 0.58, x: position < 0 ? -220 : 220, z: -160, rotateY: position < 0 ? 45 : -45, opacity: 0.2, boxShadow: "0 0 0 rgba(0,0,0,0)" };
    }
  };

  return (
    <>
    <section id="training" ref={sectionRef} className="py-24 pb-[48px] bg-[#0d0d0d] font-sans relative overflow-hidden">
      <style>{`
        .cert-card-fog::before {
           content: ''; position: absolute; left: 0; top: 0; height: 100%; width: 80px;
           background: linear-gradient(to right, #0d0d0d 0%, transparent 100%); z-index: 2; pointer-events: none;
        }
        .cert-card-fog::after {
           content: ''; position: absolute; right: 0; top: 0; height: 100%; width: 80px;
           background: linear-gradient(to left, #0d0d0d 0%, transparent 100%); z-index: 2; pointer-events: none;
        }
        .training-shimmer::after {
          content: ''; position: absolute; top: 0; left: 0; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent 0%, rgba(200,169,110,0.08) 50%, transparent 100%);
          transform: translateX(-100%);
        }
        .animate-shimmer::after {
          animation: shimmerSweep 0.9s ease forwards;
          animation-delay: 0.8s;
        }
        @keyframes shimmerSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
        .hover-trail::after {
          content: ''; position: absolute; bottom: 0; left: 0; height: 2px; width: 0;
          background: #c8a96e; transition: width 0.35s ease;
        }
        .hover-trail:hover::after {
          width: 100%;
        }
        .hover-trail:not(:hover)::after {
          width: 0; right: 0; left: auto; transition: width 0.25s ease;
        }
        .edu-card {
          position: relative;
          overflow: hidden;
        }
        .edu-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 3px;
          height: 0%;
          background: #c8a96e;
          transition: height 0.4s ease;
          border-radius: 0 0 2px 2px;
        }
        .edu-card:hover::before {
          height: 100%;
        }
      `}</style>

      <div className="container px-6 mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 relative">
          <div className="text-[clamp(32px,5vw,56px)] font-extrabold font-syne tracking-tighter leading-[1.3] flex justify-center items-center gap-[0.2em] py-2 overflow-visible">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
              className="text-[#f5f5f0] inline-block"
            >
              Education
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="text-[#f5f5f0] inline-block"
            >
              &
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="text-[#c8a96e] inline-block"
            >
              Training
            </motion.span>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="font-mono text-[13px] uppercase tracking-[0.18em] text-white/35 mt-4 pointer-events-none relative z-10"
          >
            ACADEMIC JOURNEY · CERTIFICATIONS · EXTRACURRICULARS
          </motion.div>
        </div>

        <div className="max-w-[1100px] mx-auto flex flex-col gap-14">
          {/* Row 1: Academic vs Specialized */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             {/* Academic Foundation */}
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="flex flex-col gap-0"
             >
                <SectionDivider label="ACADEMIC FOUNDATION" isVisible={isInView} />
                <div className="flex flex-col gap-0">
                   {education.map((edu, idx) => (
                     <React.Fragment key={idx}>
                       <motion.div
                         initial={{ opacity: 0, y: 16 }}
                         animate={isInView ? { opacity: 1, y: 0 } : {}}
                         transition={{ duration: 0.5, delay: 0.5 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                         className="px-6 py-6 bg-white/[0.03] border border-white/[0.08] rounded-xl group transition-all duration-300 edu-card hover:border-white/[0.15] hover:bg-white/[0.05]"
                       >
                          <div className="flex justify-between items-start mb-3 gap-4">
                            <h4 className="text-[#c8a96e] font-bold text-[18px] group-hover:text-[#f5f5f0] transition-colors duration-300 font-syne tracking-tight leading-tight">
                              {edu.school}
                            </h4>
                            <span className="font-mono text-[11px] text-white/40 whitespace-nowrap mt-0.5 uppercase tracking-[0.12em] bg-white/[0.04] px-2 py-0.5 rounded">{edu.date}</span>
                          </div>
                          <p className="text-white text-[15px] font-semibold mb-2 opacity-85 leading-relaxed">{edu.degree}</p>
                          <p className="text-white/30 font-mono text-[12px] uppercase tracking-widest">{edu.location}</p>

                          
                       </motion.div>
                       {idx < education.length - 1 && (
                         <div className="flex justify-center h-8 items-center">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={isInView ? { height: 32 } : {}}
                              transition={{ duration: 0.4, delay: 0.9 + idx * 0.1 }}
                              className="w-[1px] bg-[#c8a96e]/20 relative"
                            >
                               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
                            </motion.div>
                         </div>
                       )}
                     </React.Fragment>
                   ))}
                </div>
             </motion.div>

             {/* Specialized Training */}
             <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="flex flex-col"
             >
                <SectionDivider label="SPECIALIZED TRAINING" isVisible={isInView} />
                <motion.div
                  className={`relative group bg-white/[0.03] border rounded-xl overflow-hidden training-shimmer cursor-pointer ${isInView ? 'animate-shimmer' : ''}`}
                  style={{ borderColor: "rgba(200, 169, 110, 0.25)" }}
                  whileHover={{ borderColor: "rgba(200,169,110,0.5)", backgroundColor: "rgba(255,255,255,0.04)" }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedTraining(featured)}
                >
                  <div className="p-8 pb-10 relative">
                     <div className="flex gap-5 items-start mb-6">
                        <div className="w-14 h-14 rounded-xl bg-[#c8a96e]/10 flex items-center justify-center shrink-0 border border-[#c8a96e]/20 group-hover:bg-[#c8a96e]/15 transition-colors duration-300">
                          <FaCertificate className="text-[#c8a96e] text-[20px]" />
                        </div>
                        <div className="max-w-[calc(100%-40px)]">
                           <div className="font-mono text-[12px] uppercase tracking-widest text-[#c8a96e] font-bold mb-2">
                             {featured.type} · {featured.organization} · {featured.date}
                           </div>
                           <h3 className="text-[26px] font-bold font-syne text-white tracking-tight leading-tight">{featured.name}</h3>
                        </div>
                     </div>
                     <p className="text-white/50 text-[15px] md:text-[16px] leading-relaxed mb-6">{featured.desc}</p>
                     
                     <div className="flex justify-between items-end mt-2">
                        <div className="flex flex-wrap gap-2 max-w-[70%]">
                           {featured.techArray.map((tech, i) => (
                             <motion.span
                               key={tech}
                               initial={{ opacity: 0, scale: 0.8 }}
                               animate={isInView ? { opacity: 1, scale: 1 } : {}}
                               transition={{ delay: 0.6 + (i * 0.06) }}
                               className="px-3 py-1 bg-white/[0.04] border border-white/[0.1] text-white/50 font-mono text-[9px] uppercase tracking-wider rounded-md"
                             >
                               {tech}
                             </motion.span>
                           ))}
                        </div>

                        {/* Interaction Prompt - Bottom Left of the bottom row */}
                        <motion.div 
                          animate={{ x: [0, 4, 0] }} 
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="opacity-40 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        >
                           <div className="flex items-center gap-2 px-3 py-1 bg-[#c8a96e]/10 border border-[#c8a96e]/30 rounded-full font-mono text-[9px] uppercase tracking-widest text-[#c8a96e] whitespace-nowrap">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e] animate-pulse" />
                              Show Details
                           </div>
                        </motion.div>
                     </div>
                  </div>
                </motion.div>
             </motion.div>
          </div>

          {/* Row 2: Extracurriculars vs Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pt-6">
             {/* Extracurriculars */}
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="flex flex-col"
             >
                <SectionDivider label="EXTRACURRICULARS" isVisible={isInView} />
                <div className="flex flex-col gap-5">
                   {extracurriculars.map((item, idx) => (
                     <motion.div
                       key={idx}
                       initial={{ opacity: 0, y: 16 }}
                       animate={isInView ? { opacity: 1, y: 0 } : {}}
                       transition={{ duration: 0.5, delay: 0.6 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                       whileHover={{ x: 5, transition: { duration: 0.2 } }}
                       className="px-6 py-5 bg-white/[0.03] border border-white/[0.08] rounded-xl flex gap-6 items-start group hover:border-[#c8a96e]/35 hover-trail transition-colors duration-300 relative cursor-default"
                     >
                       <div className="font-syne text-[20px] font-black text-[#c8a96e]/55 pt-0.5 min-w-[32px]">
                         {item.num}
                       </div>
                       <div className="flex-1">
                          <h4 className="text-white font-bold text-[16px] mb-1.5 font-syne tracking-tight group-hover:text-[#c8a96e] transition-colors leading-tight">{item.name}</h4>
                          <p className="text-white/40 text-[14px] leading-relaxed mb-4">{item.organization} — {item.desc}</p>
                          <span className="inline-block px-3 py-1 bg-white/[0.04] border border-white/[0.08] text-[#c8a96e]/80 font-mono text-[11px] uppercase tracking-[0.12em] rounded font-bold">
                             {item.val ? (
                               <><CountUp to={item.val} startCount={isInView} /> Days</>
                             ) : item.date}
                          </span>
                       </div>
                     </motion.div>
                   ))}
                </div>
             </motion.div>

             {/* Certifications Coverflow */}
             <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="flex flex-col items-center"
             >
                <SectionDivider label="CERTIFICATES & CERTIFICATIONS" isVisible={isInView} />
                <motion.div
                   className="relative w-full overflow-visible flex flex-col items-center mt-[12px] cert-card-fog pb-8"
                   onMouseEnter={() => setIsHovered(true)}
                   onMouseLeave={() => setIsHovered(false)}
                >
                   {/* Carousel Container */}
                   <div className="relative w-full h-[280px] flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
                      {/* Left Click Zone (Covers exactly everything left of the center card) */}
                      <div 
                        className="absolute left-0 top-0 h-full z-30 cursor-pointer w-[calc(50%-150px)]" 
                        onClick={() => handleManualNav((certIndex - 1 + certs.length) % certs.length)} 
                      />
                      {/* Right Click Zone (Covers exactly everything right of the center card) */}
                      <div 
                        className="absolute right-0 top-0 h-full z-30 cursor-pointer w-[calc(50%-150px)]" 
                        onClick={() => handleManualNav((certIndex + 1) % certs.length)} 
                      />
                      
                      {certs.map((cert, idx) => (
                        <motion.div
                          key={idx}
                          initial={false}
                          animate={getCardTransform(idx)}
                          transition={{
                            duration: 0.55,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                          className="absolute w-[300px] h-[200px] cursor-pointer"
                          onClick={() => handleManualNav(idx)}
                        >
                           <div className={`w-full h-full rounded-xl overflow-hidden flex flex-col transition-all duration-400 ${idx === certIndex ? 'border border-[#c8a96e]/60 translate-y-[-4px] shadow-[0_8px_32px_rgba(200,169,110,0.2)]' : 'border border-white/[0.07]'}`}>
                              {/* Top Section (52%) */}
                               <div className="h-[52%] bg-black flex flex-col items-center justify-center relative overflow-hidden group/img">
                                  {cert.image ? (
                                     <img 
                                       src={cert.image} 
                                       alt={cert.name} 
                                       className="w-full h-full object-cover opacity-60 group-hover/img:scale-110 group-hover/img:opacity-100 transition-all duration-700" 
                                     />
                                  ) : (
                                     <div className="flex flex-col items-center justify-center w-full h-full p-3 text-center">
                                       <div className="text-[#c8a96e] font-mono text-[10px] uppercase tracking-[0.1em] absolute top-4 w-full px-4 truncate leading-none">
                                         {cert.issuer}
                                       </div>
                                       <div className="w-[50px] h-[50px] rounded-full border border-[#c8a96e]/70 flex items-center justify-center mt-2 bg-[#c8a96e]/5">
                                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                                       </div>
                                     </div>
                                  )}
                               </div>
                              {/* Divider */}
                              <div className="h-[1px] w-full bg-[#c8a96e]/20" />
                              {/* Bottom Section (48%) */}
                              <div className="flex-1 p-[14px_16px] flex flex-col justify-between bg-black/40">
                                 <div>
                                    <h5 className="text-white text-[14px] font-bold font-syne leading-[1.3] line-clamp-2">{cert.name}</h5>
                                    <p className="font-mono text-[10px] text-white/50 mt-1.5">{cert.date}</p>
                                 </div>
                                 <div className="text-right">
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-[#c8a96e] uppercase tracking-widest inline-flex items-center gap-1 hover:underline relative z-40">
                                      View →
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                      ))}
                   </div>

                   {/* Active cert name below carousel */}
                   <AnimatePresence mode="wait">
                     <motion.div
                       key={certIndex}
                       initial={{ opacity: 0, y: 6 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -6 }}
                       transition={{ duration: 0.25 }}
                       className="text-center mb-5 px-4"
                     >
                       <p className="text-white/70 text-[14px] font-syne font-semibold leading-tight line-clamp-1">
                         {certs[certIndex]?.name}
                       </p>
                     </motion.div>
                   </AnimatePresence>

                   {/* Controls */}
                   <div className="flex flex-col items-center gap-5 mt-2">
                      <div className="flex items-center gap-8">
                         <button
                            onClick={() => handleManualNav((certIndex - 1 + certs.length) % certs.length)}
                            className="w-[48px] h-[48px] rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10 flex items-center justify-center text-[#c8a96e] shadow-[0_0_15px_rgba(200,169,110,0.15)] hover:bg-[#c8a96e]/20 hover:border-[#c8a96e]/60 hover:shadow-[0_0_20px_rgba(200,169,110,0.3)] hover:-translate-y-0.5 transition-all duration-300 relative z-30"
                         >
                            <FaChevronLeft className="text-[15px] ml-[-2px]" />
                         </button>

                         {/* Dot Indicators */}
                         <div className="flex gap-4 items-center">
                            {certs.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => handleManualNav(i)}
                                className="relative flex items-center justify-center w-[20px] h-[20px]"
                              >
                                {i === certIndex && (
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
                                <div className={`rounded-full transition-all duration-300 relative z-10 ${i === certIndex ? 'w-[12px] h-[12px] bg-[#c8a96e]' : 'w-[8px] h-[8px] border border-white/20 hover:border-white/50'}`} />
                              </button>
                            ))}
                         </div>

                         <button
                            onClick={() => handleManualNav((certIndex + 1) % certs.length)}
                            className="w-[48px] h-[48px] rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10 flex items-center justify-center text-[#c8a96e] shadow-[0_0_15px_rgba(200,169,110,0.15)] hover:bg-[#c8a96e]/20 hover:border-[#c8a96e]/60 hover:shadow-[0_0_20px_rgba(200,169,110,0.3)] hover:-translate-y-0.5 transition-all duration-300 relative z-30"
                         >
                            <FaChevronRight className="text-[15px] mr-[-2px]" />
                         </button>
                      </div>
                   </div>
                </motion.div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>

      {/* Training Detail Modal */}
      <AnimatePresence>
        {selectedTraining && (
          <motion.div 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }} 
             exit={{ opacity: 0 }}
             transition={{ duration: 0.3 }}
             className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-bg-base/80 backdrop-blur-md"
             onClick={() => setSelectedTraining(null)}
          >
             <motion.div 
                initial={{ scale: 0.95, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 30, opacity: 0 }}
                transition={{ type: "spring", bounce: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl bg-[#0d0d0d] rounded-3xl overflow-hidden shadow-2xl relative border border-[#c8a96e]/30 flex flex-col md:flex-row"
             >
                {/* Close Button UI */}
                <button 
                  onClick={() => setSelectedTraining(null)} 
                  className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all z-20 shadow-sm"
                >
                  <FaTimes className="w-4 h-4" />
                </button>

                {/* Left Side: Visual/Icon */}
                <div className="w-full md:w-2/5 bg-[#c8a96e]/5 relative h-48 md:h-auto border-b md:border-b-0 md:border-r border-[#c8a96e]/20 flex flex-col items-center justify-center p-8">
                   <div className="w-24 h-24 rounded-2xl bg-[#c8a96e]/10 flex items-center justify-center border border-[#c8a96e]/20 mb-6">
                      <FaCertificate className="text-[#c8a96e] text-4xl" />
                   </div>
                   <div className="text-center">
                      <div className="text-[#c8a96e] text-[10px] font-mono font-bold tracking-[0.2em] mb-2 uppercase">
                        {selectedTraining.type}
                      </div>
                      <h2 className="text-2xl text-white font-syne font-bold leading-tight">
                        {selectedTraining.organization}
                      </h2>
                   </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto max-h-[70vh] md:max-h-none">
                   <div className="mb-6">
                      <span className="font-mono text-[11px] text-[#c8a96e] uppercase tracking-widest border border-[#c8a96e]/30 px-3 py-1 rounded-full">
                        {selectedTraining.date}
                      </span>
                   </div>

                   <h3 className="text-3xl text-[#f5f5f0] font-syne font-bold mb-6 leading-tight">
                     {selectedTraining.name}
                   </h3>

                   <div className="mb-8">
                      <h4 className="text-white text-[10px] font-mono tracking-[0.2em] font-bold uppercase mb-4 border-b border-white/10 pb-2">Full Description</h4>
                      <p className="text-white/60 text-[15px] leading-relaxed">
                        {selectedTraining.fullDesc}
                      </p>
                   </div>

                   <div className="mb-8">
                      <h4 className="text-white text-[10px] font-mono tracking-[0.2em] font-bold uppercase mb-4 border-b border-white/10 pb-2">Core Competencies</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                         {selectedTraining.features.map((feat, i) => (
                           <div key={i} className="flex items-start gap-3 text-white/50 text-sm">
                              <span className="text-[#c8a96e] mt-1.5 text-[8px]">■</span>
                              <span>{feat}</span>
                           </div>
                         ))}
                      </div>
                   </div>

                   {selectedTraining.certificateLink && (
                      <a 
                        href={selectedTraining.certificateLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mt-4 flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#c8a96e] text-[#0d0d0d] font-bold font-mono text-xs uppercase tracking-[0.2em] hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg group"
                      >
                        <FaLinkedin className="w-5 h-5 group-hover:-translate-y-1 transition-transform"/> 
                        View Certificate on LinkedIn
                      </a>
                   )}
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
