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
    shopify,
    
    p1,p2,p3,p4,p5,
    
    threejs,
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
      title: "C++ App Development",
      company_name: "BDU",
      icon: shopify,
      iconBg: "#383E56",
      date: "Sep 2022 - feb 2023",
      points: [
        "Teaching C++ and other related technologies about its applications.",
        "Collaborating with other people including senior students and other teachers to ensure better-quality services.",
        "Ensuring inclusive and supportive environment for maximum success rate.",
        "Learning the process of teaching and the art behind it.",
      ],
    },
    {
      title: "Java App Development",
      company_name: "BDU",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Dec 2023 - feb 2024",
      points: [
        "Developing and maintaining web applications' security and authentication using Java and other related technologies.",
        "Collaborating with cross-functional teams including product managers, and other developers to ensure better-quality services.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Fullstack Development",
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
      company_name: "Private Training",
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
      company_name: "Private Training",
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
      name: "GYM Gang",
      description:
        "Web-based platform that is a model UI for a gym website. Providing a convenient and efficient solution for advertisment of a good responsive website.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Vite",
          color: "pink-text-gradient",
        },
      ],
      image: p3,
      source_code_link: "https://github.com/stellarIV",
    },
    {
      name: "Chat App",
      description:
        "Web application that enables users to chat with each other. Allowing users to communicate securely, configured with different themes and respinsive design.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Convex",
          color: "green-text-gradient",
        },
        {
          name: "NextJs",
          color: "pink-text-gradient",
        },
      ],
      image: p5,
      source_code_link: "https://github.com/stellarIV",
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
      name: "Secret Project",
      description:
        "A project I am working on private, to come up with eazier way to manage some stuff which is to be released soon.",
      tags: [
        {
          name: "Unknown",
          color: "blue-text-gradient",
        },
        
      ],
      image: p2,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };