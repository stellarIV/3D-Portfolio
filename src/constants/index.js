import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    insa,
    shopify,
    
    p1,p2,p3,p4,p5,
    
    threejs,
    sk,
    p6,
    p7,
    p8,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "#about",
      title: "About",
    },
    {
      id: "#work",
      title: "Work",
    },
    {
      id: "#contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Flutter App Development",
      icon: mobile,
    },
    {
      title: "Backend Development",
      icon: backend,
    },
    {
      title: "Java App Development",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "full stack Developer Intern",
      company_name: "Skillbridge Institute of Technology",
      icon: sk,
      iconBg: "#383E56",
      date: "Apr 2026 - july 2026",
      points: [
        "Demonstrated absolute ownership and resilience by single-handedly completing the application despite team transitions, successfully balancing full-stack delivery with rigorous preparation for university exit exams.",
        "Built the application using React and Node.js, delivering a functional, responsive solution under challenging circumstances.",
        "Collaborating with other people including senior students and other teachers to ensure better-quality services.",
        "Ensuring inclusive and supportive environment for maximum success rate.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Bebe technologies Startup",
      icon: redux,
      iconBg: "#383E56",
      date: "Dec 2025 - feb 2026",
      points: [
        "Developed and maintained full-stack applications using NestJS (backend), React/Next.js, and modern databases, implementing security measures and performance optimizations.",
        "Streamlined project workflows and team processes, boosting overall efficiency and ensuring on-time delivery of engineering projects.",
      ],
    },
    {
      title: "AI/ML engineer and Data Scientist",
      company_name: "INSA",
      icon: insa,
      iconBg: "#E6DEDD",
      date: "Mar 2025 - Aug 2025",
      points: [
        "Analysed and pre-processed 500MB of sensitive legal documents using custom-engineered algorithms for efficient data cleaning, chunking, and embedding preparation.",
        "Contributed to an anomaly detection system for monitoring employee browsing patterns to identify security threats.",
        "Engineered the full retrieval pipeline using TensorFlow, Hugging Face Transformers, semantic",
        "sentence-based chunking, and Chroma vector database, managing end-to-end lifecycle from data ingestion to response generation. ",
      ],
    },
    {
      title: "Fullstack Development Trainee",
      company_name: "Minab Tech",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jun 2024 - Aug 2024",
      points: [
        "Developing and maintaining mobile web and mobile applications using vue,graphql, golang and Flutter and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create a product.",
        "Implementing responsive design and ensuring cross-platform compatibility.",
        "Earning a Cirteficate for my participation and dedication while  performs all the tasks.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Freelance",
      icon: meta,
      iconBg: "#383E56",
      date: "Aug 2024 - Present",
      points: [
        "Developing web applications using React.js and other related technologies.",
        "Collaborating with teams including designers, and other developers to create high-quality products.",
        "Implementing responsive, vibrant theme design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Freelance",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jul 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js, mongoDB and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Michael Lemma",
      designation: "CTO",
      company: "Minab Tech",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Belayneh Damte",
      designation: "MAnager",
      company: "Wachamo Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Biruk optimized our website, our traffic increased by 20%. We can't thank them enough!",
      name: "Asaye Marew",
      designation: "CTO",
      company: "Abisinya Employee",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "RAG Based Amharic Legal Chatbot",
      description:
        "Extended the INSA RAG system into a production-ready legal chatbot for Ethiopian context, providing accurate, cited responses on legal queries using domain-specific documents. Integrated advanced retrieval techniques and guardrails for reliability and compliance.",
      tags: [
        {
          name: "NextJs",
          color: "blue-text-gradient",
        },
        {
          name: "FastAPI",
          color: "green-text-gradient",
        },
        {
          name: "Jupyter Notebook",
          color: "pink-text-gradient",
        },
      ],
      image: p6,
      source_code_link: "https://github.com/stellarIV/Zufan",
    },
    {
      name: "Finance Management System",
      description:
        "Led full SDLC development of a secure, role-based web application for school financial operations (invoicing, budgeting, reporting). Automated manual processes, improving administrative efficiency by 60% through payment gateway integration, automated payroll and data synchronization.",
      tags: [
        {
          name: "NextJs",
          color: "blue-text-gradient",
        },
        {
          name: "Postgresql",
          color: "green-text-gradient",
        },
        {
          name: "BetterAuth",
          color: "pink-text-gradient",
        },
      ],
      image: p7,
      source_code_link: "https://fms-red.vercel.app/presentation",
    },
    {
      name: "Naney E-learning Platform",
      description:
        "Building an offline-first AI tutoring platform inspired by LM Studio, targeting accessible education in low connectivity areas. Implemented core features including instructor/student roles, rate limiting, input validation, CAPTCHA, and secure authentication. Currently enhancing with AI assistance bot for personalized lessons and discussion forums; integrating local LLM capabilities for fully functional offline tutoring.",
      tags: [
        {
          name: "NextJs",
          color: "blue-text-gradient",
        },
        {
          name: "Postgresql",
          color: "green-text-gradient",
        },
        {
          name: "Cloudfare",
          color: "pink-text-gradient",
        },
      ],
      image: p8,
      source_code_link: "https://naneylms.vercel.app",
    },
    {
      name: "Watch Movie",
      description:
        "A comprehensive movie website dedicated to test the ability of using some frameworks and databases. using creative design styles and cradient coloring to get to a standard oriented movie website.",
      tags: [
        {
          name: "Vue",
          color: "blue-text-gradient",
        },
        {
          name: "GraphQL",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: p4,
      source_code_link: "https://github.com/stellarIV",
    },
    {
      name: "Clothing Store",
      description:
        "A UI design based on figma and as theey say learn from the best to get to be the best so i modeled this web by studying different webs standards to get to designing this website",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
      ],
      image: p1,
      source_code_link: "https://www.figma.com/proto/3LeLTop30ZcBmgzd3JHoZ1/Untitled?node-id=7-360&node-type=canvas&t=fEmWqCWWfwwERMyE-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    },
    {
      name: "E-commerce Website",
      description:
        "Designed and launched a full-stack e-commerce solution (MERN/Next.js) to empower independent sellers in Ethiopia. Successfully scaled to 50+ active sellers and buyers before platform limitations (MongoDB free-tier constraints) forced a pivot; gained deep insights into production scaling, cost management, and real-user feedback.",
      tags: [
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
        
      ],
      image: p2,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };