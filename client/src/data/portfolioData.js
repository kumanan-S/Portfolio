export const portfolioData = {
  personalInfo: {
    name: "Kumanan S",
    title: "Full Stack Developer",
    titles: ["Full Stack Developer", "Python Developer", "Data Analyst", "Problem Solver"],
    subtitle: "A recent MCA graduate passionate about Full Stack Development, software development, and Data Analytics. I build scalable web applications, develop efficient solutions, and leverage data-driven approaches to solve real-world problems through technology.",
    profileImage: "/profile.png", // Link to Kumanan's actual profile image
    resumeUrl: "/resume.pdf", // Link to Kumanan's actual resume
    whatsappNumber: "9751549141",
    whatsappLink: "https://wa.me/9751549141?text=Hi%20Kumanan,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect!",
    email: "skumanan9@gmail.com",
    phone: "9751549141",
    github: "https://github.com/kumanan-s", // Placeholder Github link
    linkedin: "https://www.linkedin.com/in/kumanan-s", // Placeholder LinkedIn link
    location: "Chengalpattu, Tamil Nadu, India",
    aboutText: [
      "I am Kumanan, a recent Master of Computer Applications (MCA) graduate passionate about Full Stack Development, Python programming, and Data Analytics. I enjoy building responsive web applications, developing efficient solutions, and analyzing data to generate meaningful insights.",
      "With a strong foundation in frontend, backend, databases, and data analysis, I focus on creating scalable applications and solving real-world problems through technology. I am continuously learning new tools and technologies to enhance my skills and contribute effectively as a Software Developer or Data Analyst."
    ],
    interests: [
      "Web Development",
      "Backend Development",
      "REST APIs",
      "Database Design",
      "Software Engineering",
      "AI/ML (Learning)"
    ]
  },
  statistics: [
    { value: "3+", label: "Internships Completed" },
    { value: "3+", label: "Projects Completed" },
    { value: "2", label: "Research Papers Published" },
    { value: "8.5", label: "MCA CGPA" }
  ],
  skills: {
    "Programming Languages": [
      { name: "Java", level: 75 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 80 }
    ],
    "Frontend": [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Tailwind CSS", level: 85 }
    ],
    "Backend": [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 }
    ],
    "Database": [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 75 }
    ],
    "Tools": [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Power BI", level: 90 },
      { name: "MS Excel", level: 90 }
    ],
    "Concepts": [
      { name: "OOP", level: 88 },
      { name: "REST APIs", level: 90 },
      { name: "Data Structures", level: 75 },
      { name: "DBMS", level: 85 },
      { name: "Operating Systems", level: 75 }
    ]
  },
  projects: [
    {
      id: 1,
      name: "E-Commerce Website Creation",
      category: "Full Stack",
      image: "/project-ecommerce.png", // Will use visual fallback if unavailable
      tech: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
      description: "A feature-rich full-stack e-commerce marketplace featuring product discovery, user accounts, and secure client-side checkouts.",
      features: [
        "User authentication and profile management",
        "Interactive shopping cart with local persistence sync",
        "Mock Stripe checkout flow",
        "Dynamic search, filtering, and sorting of catalog items"
      ],
      challenge: "Ensuring real-time state synchronization between the client-side cart and backend MySQL, and resolving race conditions during rapid quantity updates.",
      github: "https://github.com/kumanan-S/E-Commerce_Website_Creation",
      demo: "https://e-commerce-frontend-zn2j.onrender.com"
    },
    {
      id: 2,
      name: "Fake or Real News Headlines Identification Using real-time API Fetching System",
      category: "Backend",
      image: "/project-news.png",
      tech: ["Python", "Flask", "Machine Learning", "HTML", "CSS"],
      description: "An intelligent web application that detects whether an article is authentic or fake news based on text processing and NLP classification.",
      features: [
        "Advanced Natural Language Processing (NLP) text cleaner",
        "TF-IDF Vectorizer for word-weighting and feature extraction",
        "PassiveAggressive Classifier model backend with high accuracy",
        "Visual charts displaying confidence score and key matching terms"
      ],
      challenge: "Tuning the classifier to avoid false positives on satirical news sites, and resolving high latency during large body-of-text analyses.",
      github: "https://github.com/kumanan-S/Fake_or_Real_News_Headlines_Identification_using_Real-Time_API_Fetching_System",
      demo: "https://fake-or-real-news-headlines.onrender.com/"
    },
    {
      id: 3,
      name: "AI-Enabled Smart Service Booking And Technician Management System",
      category: "Full Stack",
      image: "/project-service.png",
      tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      description: "A digital service marketplace bridging local customers with certified home-care service experts (plumbers, electricians, cleaners).",
      features: [
        "Interactive geographical map search to locate nearby workers",
        "Flexible scheduler tool to book and cancel service appointments",
        "Real-time SMS alerts (simulated/mocked) for request approvals",
        "Worker rating and feedback submission panel",
        "Dashboard displaying booking history and receipt downloads"
      ],
      challenge: "Implementing a custom slot-allocation algorithm that prevents double-booking and accommodates worker shifts.",
      github: "https://github.com/kumanan-S/smart_service_booking_and_technician_management_system",
      demo: "https://smart-service-management-frontend.onrender.com/"
    }
  ],
  experience: [
    {
      company: "TVK Technology ",
      duration: "Jan 2026 - March 2026",
      role: "Full Stack Web Developer Intern",
      tech: ["Angular", "Java", "Spring boot"],
      description: [
        "Gained hands-on experience in developing web applications using Angular for frontend and Spring Boot with Java for backend development.",
        "Practiced building reusable Angular components, implementing UI designs, and integrating frontend applications with backend APIs.",
        "Worked with Core Java concepts, Spring Boot fundamentals, REST API development, and database connectivity using MySQL."
      ]
    },
    {
      company: "Retech Solutions Pvt.Ltd",
      duration: "July 2023",
      role: "Machine Learning Developer Intern",
      tech: ["Machine Learning", "Python", "Scikit-learn"],
      description: [
        "Gained theoretical knowledge of Machine Learning concepts, algorithms, and the overall machine learning workflow.",
        "Learned fundamental ML techniques including data preprocessing, feature selection, model training, and evaluation methods.",
        "Explored Python libraries used in Machine Learning such as Scikit-learn and understood their applications in building predictive models."
      ]
    },
    {
      company: "Vei Technology",
      duration: "Dec 2022",
      role: "Python Using Web Application Developer Intern",
      tech: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
      description: [
        "Gained hands-on experience with Python programming concepts, including variables, functions, object-oriented programming, and file handling.",
  "Practiced developing Python-based applications and improved problem-solving skills through coding exercises and practical tasks.",
  "Explored the fundamentals of Flask framework and learned how to create basic web applications, routes, and backend functionality."
      ]
    }
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "SRM Vallaimmai Engineering College",
      university: "Anna University",
      year: "2024 - 2026",
      gpa: "8.5 / 10 CGPA"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Lakshmi Bangaru Arts and Science College",
      university: "University of Madras",
      year: "2021 - 2024",
      gpa: "8.0 / 10 CGPA"
    }
  ],
  achievements: [
    {
      title: "Research Paper 1",
      detail: "Published 'Fake or Real News Headlines Identification Using real-time API Fetching System' in IJIRT Journal (International Journal of Innovative Research in Technology).",
      journal: "IJIRT Journal, Volume 11",
      icon: "file-text",
      image: "/real_fake_news_ijirt_paper.PNG"
    },
    {
      title: "Research Paper 2",
      detail: "Published 'AI-Enabled Smart Service Booking and Technician Management System' in IJIRT Journal.",
      journal: "IJIRT Journal, Volume 12",
      icon: "file-text",
      image: "/smart_service_ijirt_paper.jpeg"
    }
  ],
  certificates: [
    {
      name: "Introduction to Machine Learning",
      issuer: "Microsoft",
      image: "/ms_ML_Certificate.png",
      date: "2023"
    },
    {
      name: "Get Started Building with Power BI",
      issuer: "Microsoft",
      image: "/ms_PowerBI.png",
      date: "2023"
    },
     {
      name: "Microsoft Advance Excel",
      issuer: "Microsoft",
      image: "/ms_excel.jpeg",
      date: "2023"
    },
   {
      name: "Introduction to Artifical Intelligence",
      issuer: "Infosys",
      image: "/info_ai.jpeg",
      date: "2023"
    },
      {
      name: "Introduction to Deep Learning",
      issuer: "Infosys",
      image: "/info_dl.jpeg",
      date: "2023"
    },
      {
      name: "Prompt Engineering",
      issuer: "Infosys",
      image: "/info_pe.jpeg",
      date: "2023"
    },
    
      {
      name: "Java-Soft Skill",
      issuer: "CISCO",
      image: "/cisco.jpeg",
      date: "2024"
    },
    {
      name: "Full Stack Web Development",
      issuer: "NoviTech",
      image: "/noviTech_full_stack.jfif",
      date: "2024"
    },
    {
      name: "Java",
      issuer: "IIT Bombay",
      image: "/iit_bombay.jpeg",
      date: "2025"
    }

  ]
};
