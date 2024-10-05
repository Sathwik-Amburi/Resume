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
  experiences: [
    {
      id: '1',
      type: 'Experience',
      company: 'Siemens AG',
      location: 'München, Germany',
      jobTitle: 'Working Student, Cyber Security',
      date: 'April 2023 – Present',
      description:
        'Contributing to the development of an education platform for secure code writing, focusing on Rust. Conducting research on security vulnerabilities in Rust and identifying examples of Unsafe Rust code vulnerable to various attacks.',
    },
    {
      id: '2',
      type: 'Experience',
      company: 'Parloa',
      location: 'München, Germany',
      jobTitle: 'Frontend Developer (UI/UX)',
      date: 'October 2023 – February 2024',
      description:
        "Developed a Simulation Modal for streamlined simulations. Led design and implementation of user interfaces for Parloa's AI platform, focusing on dynamic interaction for monitoring and testing of self-improving LLM bots.",
    },
    {
      id: '3',
      type: 'Experience',
      company: 'Allianz GI',
      location: 'München, Germany',
      jobTitle: 'Software Developer',
      date: 'April 2023 – June 2023',
      description:
        'Contributed to the development of an application supporting investors in meeting their investment goals. Developed a web interface integrating state-of-art risklab services of Allianz GI.',
    },
    {
      id: '4',
      type: 'Experience',
      company: 'TUM - Lehrstuhl für Baurealisierung und Baurobotik',
      location: 'München, Germany',
      jobTitle: 'Student Research Assistant',
      date: 'March 2022 – March 2023',
      description:
        'Contributed to EU project ENSNARE. Developed a desktop application for generating JSON files with facade object positions from building images. Worked on a Python plugin for FreeCAD to generate BIM models from building images.',
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
      title:
        'May the Source Be with You: On ChatGPT, Cybersecurity, and Secure Coding',
      publisher: 'Information',
      date: '2024',
      description:
        'This paper explores the potential of ChatGPT in cybersecurity and secure coding. It discusses the challenges and opportunities of using large language models like ChatGPT for security applications, such as code analysis and vulnerability detection. The study provides insights into the capabilities and limitations of ChatGPT in identifying security issues in code, highlighting the need for further research and development in this area.',
      link: 'https://doi.org/10.3390/info15090572',
    },
    {
      title:
        'Can Secure Software be Developed in Rust? On Vulnerabilities and Secure Coding Guidelines',
      publisher: 'International Journal On Advances in Security',
      date: '2024',
      description:
        "The paper examines the security of software developed in the Rust programming language, comparing it to C, C++, and Java. It highlights Rust's strengths in memory safety and concurrency but notes that writing secure software is still challenging. The study identifies ten common security pitfalls in Rust and suggests that while Rust improves security, vulnerabilities are still possible.",
      link: 'https://www.thinkmind.org/articles/sec_v17_n12_2024_5.pdf',
    },
    {
      title:
        'I Think This is the Beginning of a Beautiful Friendship - On the Rust Programming Language and Secure Software Development in the Industry',
      publisher: 'CYBER 2023',
      date: '2023',
      description:
        "The paper examines the Rust programming language, highlighting its security benefits and comparing it to C, C++, and Java. It discusses Rust's strengths, like memory safety, while acknowledging that vulnerabilities can still exist. Despite its advantages, the research emphasizes that Rust isn't immune to security issues and encourages ongoing vigilance and further research.",
      link: 'https://personales.upv.es/thinkmind/CYBER/CYBER_2023/cyber_2023_1_40_80031.html',
    },
    {
      title:
        'Online Modelling and Prefab Layout definition for building Renovation',
      publisher:
        'The International Association for Automation and Robotics in Construction',
      date: '2023',
      description:
        'This paper introduces a powerful semi-automated tool that efficiently creates detailed 3D building models and layouts of prefabricated modules with solar panels from building images and Open Street Map floor plans. The tool permits the generation of the existing building model and the layout of the prefabricated panels in an average of 25 minutes, depending on the complexity of the building geometry.',
      link: 'https://doi.org/10.22260/ISARC2023/0083',
    },
    {
      title:
        'Transforming Native Epidemic Models by Using the Machine Learning Approach',
      publisher: 'Annals of the Romanian Society for Cell Biology',
      date: '2021',
      description:
        'This paper explores transforming traditional epidemic models using machine learning. Conventional models often fail to adapt to real-world complexities and evolving socio-environmental factors. By integrating machine learning, the paper proposes more dynamic models that can better forecast and respond to epidemic conditions, such as those seen during the COVID-19 pandemic.',
      link: 'http://annalsofrscb.ro/index.php/journal/article/view/2831',
    },
  ],
};

export default personalData;
