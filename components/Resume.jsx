"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { basics } from "@/data/portfolio";

export default function Resume() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const SplitHeading = ({ text, highlight }) => {
    const words = text.split(" ");
    return (
      <h2 className="text-[clamp(36px,5vw,56px)] font-extrabold font-syne tracking-tighter leading-[1.1] mb-4">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ clipPath: "inset(0 100% 0 0)", y: 20, opacity: 0 }}
            whileInView={{ clipPath: "inset(0 0% 0 0)", y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            className="inline-block mr-[0.25em] last:mr-0 text-[#f5f5f0]"
          >
            {word}
          </motion.span>
        ))}
        <motion.span
          initial={{ clipPath: "inset(0 100% 0 0)", y: 20, opacity: 0 }}
          whileInView={{ clipPath: "inset(0 0% 0 0)", y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: words.length * 0.1 + 0.1 }}
          className="inline-block text-[#c8a96e]"
        >
          {highlight}
        </motion.span>
      </h2>
    );
  };

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="py-32 bg-[#0d0d0d] font-sans relative overflow-hidden"
    >
      <style>{`
        .resume-preview-container {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          background: #1a1a1a;
        }
        .resume-preview-container iframe {
          width: 100%;
          height: 700px;
          border: none;
          display: block;
        }
        .resume-fade-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 55%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(13,13,13,0.3) 25%,
            rgba(13,13,13,0.7) 50%,
            rgba(13,13,13,0.92) 75%,
            #0d0d0d 100%
          );
          pointer-events: none;
          z-index: 2;
        }
        .resume-open-btn {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          background: #f5f5f0;
          color: #0d0d0d;
          font-family: var(--font-syne), sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.02em;
          padding: 14px 32px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 24px rgba(0,0,0,0.3);
        }
        .resume-open-btn:hover {
          background: #c8a96e;
          color: #0d0d0d;
          transform: translateX(-50%) translateY(-2px);
          box-shadow: 0 8px 32px rgba(200,169,110,0.3);
        }
        .action-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 28px;
          display: flex;
          align-items: center;
          gap: 20px;
          transition: all 0.3s ease;
        }
        .action-card:hover {
          border-color: rgba(200,169,110,0.25);
          background: rgba(255,255,255,0.05);
        }
        .action-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(200,169,110,0.08);
          border: 1px solid rgba(200,169,110,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #c8a96e;
          font-size: 20px;
        }
        .action-card-content {
          flex: 1;
          min-width: 0;
        }
        .action-card-title {
          font-family: var(--font-syne), sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #f5f5f0;
          margin-bottom: 4px;
        }
        .action-card-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          line-height: 1.5;
        }
        .action-card-btn {
          flex-shrink: 0;
          font-family: var(--font-syne), sans-serif;
          font-weight: 600;
          font-size: 12px;
          padding: 10px 20px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.12);
          background: transparent;
          color: #f5f5f0;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          white-space: nowrap;
        }
        .action-card-btn:hover {
          background: #c8a96e;
          border-color: #c8a96e;
          color: #0d0d0d;
        }
        @media (max-width: 1024px) {
          .resume-layout {
            flex-direction: column !important;
          }
          .resume-sidebar {
            flex-direction: row !important;
            width: 100% !important;
          }
          .resume-preview-container iframe {
            height: 550px;
          }
        }
        @media (max-width: 640px) {
          .resume-sidebar {
            flex-direction: column !important;
          }
          .resume-preview-container iframe {
            height: 420px;
          }
        }
      `}</style>

      <div className="container px-6 mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span
              className="inline-block font-mono text-[10px] uppercase tracking-[0.18em] text-[#c8a96e] border border-[#c8a96e]/30 rounded-full px-5 py-1.5"
            >
              Professional
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SplitHeading text="Resume /" highlight="CV." />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/40 text-[15px] md:text-[17px] max-w-xl mx-auto leading-relaxed font-mono"
          >
            A detailed overview of my technical skills, professional experience,
            and academic background.
          </motion.p>
        </div>

        {/* Main Content — Two Column */}
        <div className="resume-layout flex gap-8 items-start">
          {/* Left: Resume Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex-[1.5] min-w-0"
          >
            <div className="resume-preview-container">
              <iframe
                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                title="Allen Lenoy Resume"
              />
              <div className="resume-fade-overlay" />
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-open-btn"
              >
                Open Full Resume
              </a>
            </div>
          </motion.div>

          {/* Right: Action Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="resume-sidebar flex flex-col gap-5"
            style={{ width: "340px", flexShrink: 0 }}
          >
            {/* Direct Download Card */}
            <div className="action-card">
              <div className="action-card-icon">
                <FiDownload />
              </div>
              <div className="action-card-content">
                <div className="action-card-title">Direct Download</div>
                <div className="action-card-desc">
                  Get a PDF copy for your records.
                </div>
              </div>
              <a
                href="/resume.pdf"
                download="Allen_Lenoy_Resume.pdf"
                className="action-card-btn"
              >
                Download
              </a>
            </div>

            {/* LinkedIn Profile Card */}
            <div className="action-card">
              <div className="action-card-icon">
                <FaLinkedinIn />
              </div>
              <div className="action-card-content">
                <div className="action-card-title">LinkedIn Profile</div>
                <div className="action-card-desc">
                  Connect and view endorsement skills.
                </div>
              </div>
              <a
                href={basics.profiles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="action-card-btn"
              >
                View Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
