"use client";

import { motion } from "framer-motion";
import { basics } from "@/data/portfolio";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactDetails = [
  { icon: FiMail, label: "Email", value: basics.email, href: `mailto:${basics.email}`, isLink: true },
  { icon: FiMapPin, label: "Location", value: basics.location, href: null, isLink: false },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-[#0d0d0d] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-[#c8a96e]/4 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="container px-6 mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-[#c8a96e] border border-[#c8a96e]/30 rounded-full px-5 py-1.5 mb-6"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-[clamp(32px,5vw,56px)] font-extrabold font-syne tracking-tighter leading-[1.1] mb-4">
            <motion.span
              initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
              whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-3 text-[#f5f5f0]"
            >
              Initiate
            </motion.span>
            <motion.span
              initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
              whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
              className="inline-block text-[#c8a96e]"
            >
              Connection.
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-white/40 text-[15px] max-w-2xl mx-auto leading-relaxed font-mono"
          >
            Whether you have a project in mind, an opportunity, or just want to chat about AI and tech — my inbox is always open.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            {contactDetails.map(({ icon: Icon, label, value, href, isLink }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-4 px-5 py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl group hover:border-[#c8a96e]/30 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#c8a96e]/10 border border-[#c8a96e]/15 flex items-center justify-center shrink-0 text-[#c8a96e] group-hover:bg-[#c8a96e]/18 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/30 mb-1">{label}</p>
                  {isLink ? (
                    <a href={href} className="text-[#f5f5f0] text-[13px] font-semibold hover:text-[#c8a96e] transition-colors font-syne">
                      {value}
                    </a>
                  ) : (
                    <p className="text-[#f5f5f0] text-[13px] font-semibold font-syne">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="flex gap-4 mt-2">
               <motion.a
                href={basics.profiles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(200, 169, 110, 0.2)", borderColor: "rgba(200, 169, 110, 0.6)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#c8a96e] transition-all"
               >
                 <FaLinkedin className="w-5 h-5" />
               </motion.a>
               <motion.a
                href={basics.profiles.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(200, 169, 110, 0.2)", borderColor: "rgba(200, 169, 110, 0.6)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#c8a96e] transition-all"
               >
                 <FaGithub className="w-5 h-5" />
               </motion.a>
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 px-5 py-4 bg-[#c8a96e]/[0.06] border border-[#c8a96e]/20 rounded-xl mt-2"
            >
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-[#c8a96e] shrink-0"
              />
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#c8a96e]">Open to new opportunities</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="md:col-span-3 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8"
          >
            <form action="https://formspree.io/f/xbjnrvnq" method="POST" className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-[#f5f5f0] text-[13px] placeholder:text-white/20 focus:outline-none focus:border-[#c8a96e]/50 focus:bg-white/[0.05] transition-all duration-200 font-mono"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-[#f5f5f0] text-[13px] placeholder:text-white/20 focus:outline-none focus:border-[#c8a96e]/50 focus:bg-white/[0.05] transition-all duration-200 font-mono"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-[#f5f5f0] text-[13px] placeholder:text-white/20 focus:outline-none focus:border-[#c8a96e]/50 focus:bg-white/[0.05] transition-all duration-200 font-mono resize-none"
                  placeholder="How can we collaborate?"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.015, backgroundColor: "#c8a96e", color: "#0d0d0d" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-xl bg-[#f5f5f0] text-[#0d0d0d] font-syne font-bold text-[14px] tracking-wide transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FiSend className="text-[15px]" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
