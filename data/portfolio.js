export const basics = {
  name: "Allen Lenoy",
  label: "Full-Stack Developer & AI Engineer",
  location: "Punjab, India",
  email: "lenoyallen3@gmail.com",
  url: "https://allenlenoy.dev", // placeholder
  summary:
    "I'm a Full-Stack Developer and AI Enthusiast—which basically means I love experimenting, breaking things, and figuring out how to build them better. Whether it's wiring up APIs or designing sleek UIs, I'm all about turning abstract ideas into tools people actually use. Currently powered by curiosity and way too much coffee. ☕",
  profiles: {
    github: "https://github.com/AllenLenoy",
    linkedin: "https://www.linkedin.com/in/allen-lenoy-5ab794202/",
  },
};

export const skills = {
  languages: [
    { name: "JavaScript", icon: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: "typescript", url: "https://www.typescriptlang.org/" },
    { name: "Python", icon: "python", url: "https://www.python.org/" },
    { name: "C++", icon: "cplusplus", url: "https://isocpp.org/" },
    { name: "Go", icon: "go", url: "https://go.dev/" },
    { name: "SQL", icon: "mysql", url: "https://www.mysql.com/" },
    { name: "PHP", icon: "php", url: "https://www.php.net/" },
    { name: "HTML5", icon: "html5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS3", icon: "css", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  ],
  frameworks: [
    { name: "React.js", icon: "react", url: "https://react.dev/" },
    { name: "Next.js", icon: "nextdotjs", url: "https://nextjs.org/" },
    { name: "Node.js", icon: "nodedotjs", url: "https://nodejs.org/" },
    { name: "Express.js", icon: "express", url: "https://expressjs.com/" },
    { name: "FastAPI", icon: "fastapi", url: "https://fastapi.tiangolo.com/" },
    { name: "Django", icon: "django", url: "https://www.djangoproject.com/" },
    { name: "Tailwind CSS", icon: "tailwindcss", url: "https://tailwindcss.com/" },
    { name: "Framer Motion", icon: "framer", url: "https://www.framer.com/motion/" },
    { name: "PyTorch", icon: "pytorch", url: "https://pytorch.org/" },
    { name: "TensorFlow", icon: "tensorflow", url: "https://www.tensorflow.org/" },
    { name: "Streamlit", icon: "streamlit", url: "https://streamlit.io/" },
  ],
  tools: [
    { name: "MongoDB", icon: "mongodb", url: "https://www.mongodb.com/" },
    { name: "PostgreSQL", icon: "postgresql", url: "https://www.postgresql.org/" },
    { name: "MySQL", icon: "mysql", url: "https://www.mysql.com/" },
    { name: "Redis", icon: "redis", url: "https://redis.io/" },
    { name: "Docker", icon: "docker", url: "https://www.docker.com/" },
    { name: "AWS", icon: "amazonwebservices", url: "https://aws.amazon.com/" },
    { name: "Firebase", icon: "firebase", url: "https://firebase.google.com/" },
    { name: "Git", icon: "git", url: "https://git-scm.com/" },
    { name: "Vercel", icon: "vercel", url: "https://vercel.com/" },
    { name: "LangChain", icon: "langchain", url: "https://www.langchain.com/" },
    { name: "Hugging Face", icon: "huggingface", url: "https://huggingface.co/" },
    { name: "Postman", icon: "postman", url: "https://www.postman.com/" },
    { name: "Figma", icon: "figma", url: "https://www.figma.com/" },
    { name: "GitHub Actions", icon: "githubactions", url: "https://github.com/features/actions" },
  ],
  softSkills: [
    { name: "Communication", icon: "💬" },
    { name: "Team Leadership", icon: "👥" },
    { name: "Problem Solving", icon: "🧩" },
    { name: "Adaptability", icon: "🔄" },
    { name: "Critical Thinking", icon: "🧠" },
  ],
};

export const projects = [
  {
    title: "Wellness Bot — AI Health Assistant",
    role: "NLP & Application Developer",
    date: "August 2025",
    description:
      "A smart health chatbot engineered to orchestrate stateful, multi-turn workflows for symptom analysis and wellness tracking.",
    highlights: [
      "Implemented intelligent tool routing to autonomously switch between 5+ modules, integrating OCR for prescription scanning and Geolocation APIs.",
      "Built a functional Streamlit prototype featuring local session persistence and structured intent recognition.",
      "Engineered the AI assistant using Python, LangChain, and structured API calls to ensure accurate medical context retention.",
    ],
    tech: ["Python", "Streamlit", "LangChain", "EasyOCR", "ReportLab"],
    github: "https://github.com/AllenLenoy",
    demo: "",
    image: "/wellnessbot.png",
  },
  {
    title: "ExamGenie — AI Assessment Engine",
    role: "Full-Stack Developer",
    date: "November 2025",
    description:
      "An intelligent examination platform that transforms how educators create, deploy, and grade assessments. Built with a robust role-based architecture.",
    highlights: [
      "Engineered 15+ secure REST APIs to power real-time exam attempts and 100% automated grading.",
      "Integrated the Mistral 7B LLM to dynamically generate complex exam questions, cutting manual creation time by over 60%.",
      "Designed a scalable backend framework to handle concurrent student submissions without breaking a sweat.",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/AllenLenoy",
    demo: "",
    image: "/examgenie.png",
  },
  {
    title: "SKILLINDIA — End-to-End EdTech Engine",
    role: "Full-Stack Developer",
    date: "May 2025",
    description:
      "A complete Learning Management System architected from scratch to unify course delivery and career placement into a single, high-performance platform.",
    highlights: [
      "Engineered a scalable relational database (MySQL) and PHP backend to handle courses, users, and job data seamlessly.",
      "Built and deployed secure authentication workflows to protect user progress across the entire student lifecycle.",
      "Developed a custom video streaming UI integrated directly alongside a rapid 1-click job application portal.",
    ],
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    github: "https://github.com/AllenLenoy",
    demo: "",
    image: "/skillindia.png",
  },
];

export const trainings = [
  {
    num: "01",
    name: "AI & NLP Specialization",
    organization: "AlgoTutor",
    date: "June 2025",
    type: "SPECIALIZED TRAINING",
    category: "AI / NLP",
    desc: "A comprehensive deep dive into Generative AI, focusing on transformer architectures, Large Language Models (LLMs), and advanced prompt engineering to build context-aware AI applications.",
    fullDesc: "This intensive specialized training covered the theoretical and practical foundations of modern Artificial Intelligence and Natural Language Processing. The curriculum spanned building robust pipelines using LangChain, leveraging Mistral and other LLMs for text generation and reasoning, and deploying stateful conversational agents locally and in the cloud. Significant emphasis was placed on prompt tuning constraints, context-window management, and structuring autonomous agent frameworks.",
    techArray: ["LLMs", "Prompt Engineering", "LangChain", "Transformers"],
    features: [
      "Mastered intricate prompt-engineering for complex reasoning tasks",
      "Designed and implemented custom RAG pipelines",
      "Structured stateful interactions with Python and LLMs"
    ],
    certificateLink: "https://www.linkedin.com/posts/allen-lenoy-5ab794202_ai-nlp-naturallanguageprocessing-activity-7363263443811905538--G-1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADO6q1MBhfMaLzpUtek66R6gSjAOo1pqmt0",
    pills: ["Python", "AI", "NLP"]
  }
];

export const certs = [
  {
    name: "Oracle OCI Generative AI Professional",
    issuer: "Oracle University",
    date: "Sep 2025",
    link: "https://drive.google.com/file/d/1xoa-1ev7AJ00-HQA5nTVk3_k4GjngTuB/view",
    image: "/certs/oracle-oci.png"
  },
  {
    name: "AI Powered NLP",
    issuer: "AlgoTutor",
    date: "Aug 2025",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7363263443811905538/",
    image: "/certs/algotutor-nlp.png"
  },
  {
    name: "Fundamentals of Network Communication",
    issuer: "University of Colorado",
    date: "Sep 2024",
    link: "https://coursera.org/verify/CGIJTQSKH5QP",
    image: "/certs/coursera-network-comm.png"
  },
  {
    name: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "Sep 2024",
    link: "https://coursera.org/verify/OIJ9ESY4PGU6",
    image: "/certs/coursera-networking.png"
  },
  {
    name: "Introduction to Hardware and OS",
    issuer: "IBM",
    date: "Sep 2024",
    link: "https://coursera.org/verify/UULLIBW4Y49T",
    image: "/certs/coursera-hardware.png"
  },
  {
    name: "Mastering in C: Basic to Beyond",
    issuer: "CSE Pathshala",
    date: "Mar 2024",
    link: "https://drive.google.com/file/d/16C2MpYlPFUyPt_8m-uaVTILVe36iy4vL/view",
    image: "/certs/cse-c.png"
  },
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Nov 2023",
    link: "https://drive.google.com/file/d/1znVxZzSHSMQZOo9mFPJitY9ZaYx23yEt/view",
    image: "/certs/fcc-web.png"
  },
];

export const extracurriculars = [
  {
    num: "01",
    name: "Binary Blitz & Codeathon Hackathons",
    organization: "Binary Blitz / Codeathon",
    date: "2024–2025",
    desc: "Collaborative agile solving of complex algorithmic challenges in competitive teams."
  },
  {
    num: "02",
    name: "Cybersecurity Intensive",
    organization: "CTF & Security Training",
    date: "12 Days",
    val: 12,
    desc: "Attended a specialized cybersecurity program, participated in various CTF challenges, and learned advanced safeguard methods for network defense."
  },
  {
    num: "03",
    name: "Community Development Program",
    organization: "Sevabharathi Kulanada",
    date: "20 Days",
    val: 20,
    desc: "Social welfare initiatives and team-based community service."
  }
];

export const education = [
  {
    degree: "B.Tech · Computer Science & Engineering",
    school: "Lovely Professional University",
    location: "Punjab, India",
    date: "Aug 2023 — Present",
  },
  {
    degree: "Intermediate · 70%",
    school: "Mar Dionysius Sr Sec School",
    location: "Mallapally, Kerala",
    date: "Apr 2021 — Mar 2022",
  },
  {
    degree: "Matriculation · 87%",
    school: "Gulf Indian School",
    location: "Fahaheel, Kuwait",
    date: "Apr 2019 — Mar 2020",
  },
];
