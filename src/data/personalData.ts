import { PersonalData } from '@/types/types';

const personalData: PersonalData = {
  name: 'Sathwik Amburi',
  jobTitle: 'Software Engineer',
  location: 'München, Germany',
  phone: '+49 XXXXXXXXXXXX',
  email: 'sathwik.amburi@tum.de',
  avatar: '/avatar.png',
  programmingLanguages: [
    {
      name: 'Python',
      proficiency: 'Expert',
      projects: [
        'ASE Delivery',
        'Data Privacy - Differential Privacy in NLP',
        'COVID-19 Forecasting Models',
      ],
      certifications: ['Python Professional Certification'],
      yearsOfExperience: 5,
    },
    {
      name: 'JavaScript',
      proficiency: 'Advanced',
      projects: [
        'GYMVAULT',
        'Parloa AI Platform',
        'Allianz GI Investment Application',
      ],
      certifications: ['JavaScript ES6 Certification'],
      yearsOfExperience: 4,
    },
    {
      name: 'Rust',
      proficiency: 'Intermediate',
      projects: ['Siemens Cyber Security Education Platform'],
      certifications: [],
      yearsOfExperience: 2,
    },
    {
      name: 'R',
      proficiency: 'Intermediate',
      projects: ['COVID-19 Forecasting Models'],
      certifications: [],
      yearsOfExperience: 3,
    },
    {
      name: 'C++',
      proficiency: 'Advanced',
      projects: ['FreeCAD Plugin Development'],
      certifications: [],
      yearsOfExperience: 4,
    },
    {
      name: 'Java',
      proficiency: 'Intermediate',
      projects: ['Android App Development'],
      certifications: [],
      yearsOfExperience: 3,
    },
    {
      name: 'HTML',
      proficiency: 'Advanced',
      projects: ['Personal Portfolio', 'GYMVAULT', 'Parloa AI Platform'],
      certifications: [],
      yearsOfExperience: 5,
    },
    {
      name: 'CSS',
      proficiency: 'Advanced',
      projects: ['Personal Portfolio', 'GYMVAULT', 'Parloa AI Platform'],
      certifications: [],
      yearsOfExperience: 5,
    },
  ],
  technologies: [
    {
      name: 'React.js',
      proficiency: 'Advanced',
      projects: ['GYMVAULT', 'Parloa AI Platform', 'ASE Delivery'],
      certifications: ['React Developer Certification'],
      yearsOfExperience: 3,
    },
    {
      name: 'Next.js',
      proficiency: 'Intermediate',
      projects: ['Personal Portfolio'],
      certifications: [],
      yearsOfExperience: 2,
    },
    {
      name: 'Express.js',
      proficiency: 'Advanced',
      projects: ['ASE Delivery', 'GYMVAULT'],
      certifications: [],
      yearsOfExperience: 3,
    },
    {
      name: 'Node.js',
      proficiency: 'Advanced',
      projects: ['ASE Delivery', 'GYMVAULT'],
      certifications: [],
      yearsOfExperience: 3,
    },
    {
      name: 'SQL',
      proficiency: 'Intermediate',
      projects: ['GYMVAULT', 'Allianz GI Investment Application'],
      certifications: [],
      yearsOfExperience: 3,
    },
    {
      name: 'NoSQL (MongoDB)',
      proficiency: 'Intermediate',
      projects: ['ASE Delivery'],
      certifications: [],
      yearsOfExperience: 2,
    },
    {
      name: 'Git/GitHub',
      proficiency: 'Advanced',
      projects: ['All projects'],
      certifications: [],
      yearsOfExperience: 5,
    },
    {
      name: 'Docker',
      proficiency: 'Intermediate',
      projects: ['ASE Delivery'],
      certifications: [],
      yearsOfExperience: 2,
    },
    {
      name: 'PyQt5',
      proficiency: 'Intermediate',
      projects: ['FreeCAD Plugin Development'],
      certifications: [],
      yearsOfExperience: 1,
    },
    {
      name: 'Mapbox GL JS',
      proficiency: 'Intermediate',
      projects: ['Forsailors Route Planner'],
      certifications: [],
      yearsOfExperience: 1,
    },
    {
      name: 'Dash',
      proficiency: 'Advanced',
      projects: ['COVID-19 Patient Dashboard'],
      certifications: [],
      yearsOfExperience: 2,
    },
    {
      name: 'Plotly',
      proficiency: 'Advanced',
      projects: ['COVID-19 Patient Dashboard'],
      certifications: [],
      yearsOfExperience: 2,
    },
  ],
  softSkills: [
    {
      name: 'Leadership',
      proficiency: 'Advanced',
      projects: ['ASE Delivery', 'Parloa AI Platform'],
      certifications: ['Leadership Development Program'],
      yearsOfExperience: 5,
    },
    {
      name: 'Teamwork',
      proficiency: 'Expert',
      projects: ['All projects'],
      certifications: [],
      yearsOfExperience: 6,
    },
    {
      name: 'Problem Solving',
      proficiency: 'Expert',
      projects: ['All projects'],
      certifications: [],
      yearsOfExperience: 6,
    },
    {
      name: 'Adaptability',
      proficiency: 'Advanced',
      projects: ['All projects'],
      certifications: [],
      yearsOfExperience: 5,
    },
  ],
  experiences: [
    {
      type: 'Experience',
      company: 'Siemens AG',
      location: 'München, Germany',
      jobTitle: 'Working Student, Cyber Security',
      date: 'April 2023 – Present',
      description:
        'Contributing to the development of an education platform for secure code writing, focusing on Rust. Conducting research on security vulnerabilities in Rust and identifying examples of Unsafe Rust code vulnerable to various attacks.',
    },
    {
      type: 'Experience',
      company: 'Parloa',
      location: 'München, Germany',
      jobTitle: 'Frontend Developer (UI/UX)',
      date: 'October 2023 – February 2024',
      description:
        "Developed a Simulation Modal for streamlined simulations. Led design and implementation of user interfaces for Parloa's AI platform, focusing on dynamic interaction for monitoring and testing of self-improving LLM bots.",
    },
    {
      type: 'Experience',
      company: 'Allianz GI',
      location: 'München, Germany',
      jobTitle: 'Software Developer',
      date: 'April 2023 – June 2023',
      description:
        'Contributed to the development of an application supporting investors in meeting their investment goals. Developed a web interface integrating state-of-art risklab services of Allianz GI.',
    },
    {
      type: 'Experience',
      company: 'TUM - Lehrstuhl für Baurealisierung und Baurobotik',
      location: 'München, Germany',
      jobTitle: 'Student Research Assistant',
      date: 'March 2022 – March 2023',
      description:
        'Contributed to EU project ENSNARE. Developed a desktop application for generating JSON files with facade object positions from building images. Worked on a Python plugin for FreeCAD to generate BIM models from building images.',
    },
    {
      type: 'Experience',
      company: 'MEIIPORUL SOLUTIONS PRIVATE LIMITED',
      location: 'Chennai, India',
      jobTitle: 'Intern',
      date: 'April 2020 – May 2020',
      description:
        'Implemented epidemic models to forecast COVID-19 spread. Designed a patient dashboard using Dash and Plotly. Developed deep learning models for categorizing chest X-ray and CT scans for early COVID-19 detection.',
    },
  ],
  education: [
    {
      type: 'Education',
      institution: 'Technische Universität München',
      degree: 'MSc. Informatics',
      date: 'October 2021 – Present',
      location: 'München, Germany',
      description:
        'Focusing on advanced topics in software engineering, artificial intelligence, and cyber security.',
    },
    {
      type: 'Education',
      institution: 'SRM Institute of Science and Technology',
      degree: 'B.Tech in Computer Science and Engineering',
      date: 'July 2017 – May 2021',
      location: 'Chennai, India',
      description:
        'Graduated with a CGPA of 9.17/10. Focused on core computer science subjects and software development.',
    },
  ],
  projects: [
    {
      name: 'ASE Delivery',
      description:
        'Implemented a pick-up/packstation delivery service using IoT, React, Spring, Python, and Docker.',
      date: 'October 2022 – February 2023',
      technologies: ['React', 'Spring', 'Python', 'Docker', 'IoT'],
      role: 'Full Stack Developer',
    },
    {
      name: 'Data Privacy - Differential Privacy in NLP',
      description:
        'Developed an educational user interface for exploring word-level Differential Privacy in textual data.',
      date: 'October 2022 – February 2023',
      technologies: ['Python', 'NLP', 'Differential Privacy'],
      role: 'Machine Learning Engineer',
    },
    {
      name: 'GYMVAULT',
      description:
        'Created an online platform connecting gym owners and potential clients, allowing digital browsing and flexible payment options.',
      date: 'May 2022 – July 2022',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      role: 'Full Stack Developer',
    },
    {
      name: 'Forsailors Route Planner',
      description:
        'Designed and implemented a route planner for sailors using Mapbox GL JS and React.',
      date: 'October 2022 – April 2023',
      technologies: ['React', 'Mapbox GL JS'],
      role: 'Frontend Developer',
    },
    {
      name: 'COVID-19 Patient Dashboard',
      description:
        'Designed a patient dashboard for effective communication and monitoring of patient health during the COVID-19 pandemic.',
      date: 'April 2020 – May 2020',
      technologies: ['Dash', 'Plotly', 'Python'],
      role: 'Data Visualization Specialist',
    },
  ],
  publications: [
    {
      title: 'Rust Programming Language and Secure Software Development',
      publisher: 'IARIA : CYBER 2023',
      date: 'April 2023 – September 2023',
      description:
        'Explored the security features of Rust and their implications for secure software development.',
      link: 'https://www.example.com/rust-security-paper',
    },
    {
      title:
        'Online Modelling and Prefab Layout definition for building Renovation',
      publisher: '2023 Proceedings of the 40th ISARC',
      date: 'March 2021 – March 2022',
      description:
        'Presented a novel approach to online modelling and prefab layout definition for efficient building renovation processes.',
      link: 'https://www.example.com/building-renovation-paper',
    },
    {
      title:
        'Transforming Native Epidemic Models by Using the Machine Learning Approach',
      publisher: 'Annals of the Romanian Society for Cell Biology',
      date: 'December 2020 – May 2021',
      description:
        'Proposed a machine learning approach to enhance traditional epidemic models for improved disease spread prediction.',
      link: 'https://www.example.com/epidemic-models-ml-paper',
    },
  ],
};

export default personalData;
