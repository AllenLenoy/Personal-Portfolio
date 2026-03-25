"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const experienceData = [
  { title: "B.Tech Computer Science", entity: "CSE Pathshala", date: "2021 - 2025", type: "Education" },
  { title: "Cybersecurity Workshop", entity: "Kerala Police Dome", date: "12 Days", type: "Training" },
  { title: "Community CDP", entity: "Sevabharathi", date: "20 Days", type: "Extracurricular" },
];

const certs = [
  "Oracle OCI Foundations", 
  "AlgoTutor NLP", 
  "FreeCodeCamp Responsive Web"
];

export default function Experience() {
  const containerRef = useRef(null);
  
  // Drives the timeline drawing logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="experience" ref={containerRef} className="py-24 bg-bg-base border-t border-bg-border overflow-hidden">
      <div className="container px-6 mx-auto max-w-5xl">
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="font-syne text-[18px] font-extrabold text-brand mb-2">06</div>
          <h2 className="font-syne text-4xl font-bold text-text-base">Experience & Certs</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Timeline Column */}
          <div className="flex-1 relative pl-8">
            {/* The actual background line (dim) */}
            <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-bg-border"></div>
            {/* The drawn scroll line (brand) */}
            <motion.div 
               style={{ scaleY: scrollYProgress }} 
               className="absolute left-0 top-2 bottom-0 w-[1px] bg-brand origin-top"
            ></motion.div>

            {experienceData.map((item, i) => (
              <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                 key={i} 
                 className="mb-12 relative group last:mb-0"
              >
                {/* Timeline Dot */}
                <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="absolute -left-[37px] top-1 w-[9px] h-[9px] rounded-full bg-bg-base border-2 border-[#888] group-hover:border-brand group-hover:bg-brand transition-colors shadow-[0_0_0_4px_var(--bg-base)] z-10"
                ></motion.div>
                
                <div className="font-mono text-[10px] text-brand uppercase tracking-widest mb-2">{item.date} • {item.type}</div>
                <h3 className="font-syne text-xl font-bold text-text-base mb-1">{item.title}</h3>
                <p className="text-text-muted font-mono text-xs">{item.entity}</p>
              </motion.div>
            ))}
          </div>

          {/* Certs Grid */}
          <div className="flex-1 flex flex-col gap-6">
             <h3 className="font-mono text-[10px] text-text-muted uppercase tracking-widest border-b border-bg-border pb-4">Certifications</h3>
             <motion.div 
               variants={{
                 hidden: { opacity: 0 },
                 show: { opacity: 1, transition: { staggerChildren: 0.2 } }
               }}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, margin: "-50px" }}
               className="grid grid-cols-1 sm:grid-cols-2 gap-4"
             >
               {certs.map((cert) => (
                 <motion.div 
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      show: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.4 } }
                    }}
                    key={cert} 
                    className="bg-bg-card border border-bg-border p-6 rounded-xl hover:border-brand transition-colors aspect-square flex flex-col justify-center items-center text-center group cursor-default"
                 >
                    <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="font-syne font-bold text-sm text-text-base leading-tight">{cert}</span>
                 </motion.div>
               ))}
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
