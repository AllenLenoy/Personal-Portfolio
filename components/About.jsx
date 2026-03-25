"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function About() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" ref={targetRef} className="relative h-[300vh] bg-bg-base">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center border-t border-bg-border pt-16">
        
        <div className="absolute top-0 left-0 w-full h-[1px] bg-bg-border z-10">
          <motion.div style={{ width: lineWidth }} className="h-full bg-brand"></motion.div>
        </div>

        <motion.div style={{ x }} className="flex gap-16 lg:gap-32 w-[270vw] px-6 lg:px-24 items-center h-full">
          
          {/* Slide 1 */}
          <div className="flex-shrink-0 w-[80vw] lg:w-[50vw] flex flex-col sm:flex-row gap-8 items-center">
            <div className="relative w-48 h-64 sm:w-64 sm:h-80 rounded-2xl overflow-hidden border border-bg-border grayscale hover:grayscale-0 transition-all duration-500 shrink-0 shadow-2xl">
              <Image 
                src="/profile.jpg" 
                alt="Allen Lenoy" 
                fill 
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-syne text-5xl lg:text-6xl font-bold mb-3 text-text-base">Who I am</h2>
              <p className="text-[#c8a96e] font-mono text-[13px] uppercase tracking-[0.18em] mb-6">
                Turning ideas into polished digital products.
              </p>
              <div className="text-text-muted text-[15px] leading-relaxed font-mono max-w-sm space-y-4">
                <p>
                  I am <span className="text-text-base font-bold">Allen Lenoy</span>, a Full-Stack Developer and AI Engineer currently pursuing my B.Tech in Computer Science at <span className="text-[#c8a96e]">Lovely Professional University (LPU), Jalandhar</span>. I specialize in building modern applications that bridge the gap between complex AI architectures and intuitive user experiences.
                </p>
                <p>
                  My focus is on <span className="text-text-base">Natural Language Processing (NLP) and Large Language Models (LLMs)</span>. I have hands-on experience engineering intelligent conversational agents and assessment engines using tools like <span className="text-[#c8a96e]">LangChain and Mistral 7B</span>. 
                </p>
                <p>
                  Working with technologies like <span className="text-[#c8a96e]">React, Next.js, Node.js, and Python</span>, I thrive on pushing the boundaries of what's possible on the web, ensuring every line of code contributes to a premium user experience.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="flex-shrink-0 w-[80vw] lg:w-[45vw] flex items-center justify-center p-8">
            <div className="relative bg-[#f0ece4] dark:bg-[#1a1a1a] p-12 rounded-lg rotate-2 shadow-xl border border-[#c8a96e]/30 max-w-md w-full hover:-rotate-1 transition-transform duration-300">
               <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-4 bg-yellow-500/20 shadow-sm -rotate-3"></div>
               <p className="font-caveat text-3xl md:text-4xl text-[#b08e50] dark:text-[#c8a96e] leading-relaxed text-center">
                 "I build things that actually work — and look good doing it."
               </p>
            </div>
          </div>

          {/* Slide 3: Values with Animation */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.3 } }
            }}
            className="flex-shrink-0 w-[80vw] lg:w-[45vw] flex flex-col justify-center gap-4 text-center lg:text-left"
          >
             {["Resilient", "Iterative", "Obsessive"].map((word, i) => (
               <motion.h2 
                 key={word}
                 variants={{
                   hidden: { opacity: 0, x: 50 },
                   show: { opacity: 1, x: 0, transition: { duration: 0.8, type: "spring" } }
                 }}
                 className={`font-syne text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tighter hover:text-text-base transition-colors duration-300 ${i === 2 ? 'text-brand' : 'text-bg-border/60'}`}
               >
                 {word}
               </motion.h2>
             ))}
          </motion.div>

          {/* Slide 4: Strategic Utilization of Space */}
          <div className="flex-shrink-0 w-[80vw] lg:w-[45vw] flex flex-col justify-center px-12 border-l border-white/5 relative h-[60%]">
            <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-[#c8a96e]/30 to-transparent" />
            <h3 className="font-syne text-4xl lg:text-5xl font-bold text-text-base mb-6 leading-tight">
              Let's build the <span className="text-[#c8a96e]">future</span> together.
            </h3>
            <p className="font-mono text-[14px] text-text-muted leading-relaxed max-w-sm mb-10">
              Currently architecting AI-driven assessment tools and next-gen interfaces. If you have a vision that needs high-fidelity execution, let's talk.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="#contact" 
                className="group flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.2em] text-[#c8a96e] font-bold"
              >
                Initiate Connection
                <motion.span 
                  animate={{ x: [0, 5, 0] }} 
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-lg"
                >
                  →
                </motion.span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
