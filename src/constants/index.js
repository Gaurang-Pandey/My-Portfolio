import {
    mobile,
    backend,
    editing,
    web,
    javascript,
    express,
    html,
    css,
    reactjs,
    cpp,
    tailwind,
    nodejs,
    mongodb,
    git,
    python,
    docker,
    meta,
    bugamers,
    tesla,
    shopify,
    newswala,
    goFood,
    fitFusion,
    threejs,
    java,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Video     Editor",
      icon: editing,
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
      name: "Java",
      icon: java,
    },
    {
      name: "Express",
      icon: express,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "C++",
      icon: cpp,
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
      name: "Python",
      icon: python,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Senior Core Member",
      company_name: "BU Gamers",
      icon: bugamers,
      iconBg: "#383E56",
      date: "September 2023 - April 2024",
      points: [
        "Organized and managed multiple gaming tournaments and events.",
        "Collaborated with brands like Skoar and HyperX for sponsorships and partnerships.",
        "Coordinated with teams to ensure smooth event execution and participant engagement.",
      ],
    // },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Go Food",
      description:
        "A dynamic food delivery application that allows users to explore a wide range of restaurants and cuisines, place orders, and track deliveries in real-time. The app provides personalized recommendations based on user preferences and past orders, enhancing the overall food discovery and delivery experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: goFood,
      source_code_link: "https://github.com/Gaurang-Pandey/GoFood",
    },
    {
      name: "Fit Fusion",
      description:
        "A comprehensive fitness application aimed at helping users achieve their health and fitness goals. The app includes features such as personalized workout plans, progress tracking, and goal-setting functionalities. Users can access a variety of exercises, track their workouts, and monitor their progress over time.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: fitFusion,
      source_code_link: "https://github.com/Gaurang-Pandey/Fit-Fusion",
    },
    // {
    //   name: "Eatables",
    //   description:
    //     "A website that allows users to easily search for and discover a diverse range of recipes. Features include a robust search function to filter recipes by ingredients, cuisine, or dietary preferences, and detailed cooking instructions with tips. The site aims to provide an intuitive and enjoyable experience for users seeking to find and try new dishes.",
    //   tags: [
    //     {
    //       name: "html",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "javascript",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: eatables,
    //   source_code_link: "https://github.com/Gaurang-Pandey/Eatables",
    // },
    {
      name: "NewsWala",
      description:
        "Programmed a real-time news aggregation platform for mobile devices that delivers the latest news articles across various categories. Configured the News API to fetch and display news dynamically, enabling seamless access to 6 different categories of breaking news ranging from sports to entertainment. ",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: newswala,
      source_code_link: "https://github.com/Gaurang-Pandey/Newswala",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };