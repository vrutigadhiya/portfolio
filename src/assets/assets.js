import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaLaptopCode } from 'react-icons/fa';

import profileImg from '../assets/profile.jpg';
import projectImg1 from '../assets/project1.png';
import projectImg2 from '../assets/project2.png';
import projectImg3 from '../assets/project3.png';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];


export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern web technologies.",
    tags: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description:
      "Developing secure backend applications and RESTful APIs using modern frameworks.",
    tags: ["Node.js", "Express.js", "REST API", "Authentication"],
  },
  {
    title: "Database",
    icon: FaDatabase,
    description:
      "Managing and designing databases for efficient and scalable applications.",
    tags: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    title: "Programming",
    icon: FaCode,
    description:
      "Strong foundation in programming and problem-solving with multiple languages.",
    tags: ["JavaScript", "Java(Basic)", "C++"],
  },
  {
    title: "Tools",
    icon: FaTools,
    description:
      "Using industry-standard tools for development, testing, and version control.",
    tags: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Full Stack Development",
    icon: FaLaptopCode,
    description:
      "Building complete end-to-end web applications from frontend to backend with database integration.",
    tags: ["MERN Stack", "MVC", "JWT", "Cloudinary", "Multer"],
  },
];



export const projects = [
  {
    title: "Tastivo – Food Delivery App",
    description:
      "A full-stack MERN food delivery application with user authentication, cart management, online payments, order tracking, and an admin dashboard for managing food items and orders.",
    image: projectImg1,
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "#",
    code: "https://github.com/vrutigadhiya/Tastivo",
  },
  {
    title: "UrbanStay – Airbnb Clone",
    description:
      "A full-stack property rental platform where users can list, edit, and book properties with authentication, image uploads, and a responsive interface built using the MVC architecture.",
    image: projectImg2,
    tech: ["Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    icons: [FaNodeJs, FaDatabase, FaCloud],
    demo: "#",
    code: "https://github.com/vrutigadhiya/UrbanStay",
  },
  
];


export const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institute: "L.D. College of Engineering (LDCE), Ahmedabad",
    duration: "2023 - 2027",
    description:
      "Pursuing a B.E. in Computer Engineering under Gujarat Technological University (GTU), building a strong foundation in software development, data structures, databases, computer networks, and full-stack web development.",
    result: "CGPA: 8.57",
  },
  {
    degree: "Higher Secondary Certificate (HSC) - Science (PCM)",
    institute: "Shree Sharda Vidhya Mandir (SSVM), Surat",
    duration: "2023",
    description:
      "Completed Higher Secondary Education under GSEB with Physics, Chemistry, and Mathematics, achieving excellent academic performance and a strong analytical foundation.",
    result: "Percentile: 98.64 | GUJCET: 97.21 PR",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institute: "Shree Sharda Vidhya Mandir (SSVM), Surat",
    duration: "2021",
    description:
      "Completed Secondary Education under GSEB with an excellent academic record and a strong foundation in Mathematics, Science, and logical reasoning.",
    result: "Percentile: 98.35",
  },
];
