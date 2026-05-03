export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Malaysia Government Services Chatbot',
      desc: 'An NLP-powered chatbot that helps citizens navigate Malaysian government services — from ministry queries to public programme eligibility checks.',
      subdesc:
        "Built using LangChain and fine-tuned transformer models, this chatbot simulates a citizen-facing government assistant for Malaysia's digital public service ecosystem. It handles multi-turn conversations about government programmes, processes, and eligibility — demonstrating how AI can reduce friction between citizens and state institutions. Designed with Malaysia's MyDigital Blueprint goals in mind, the project reflects my direct interest in e-governance and the MTCP programme.",
      href: 'https://huggingface.co/spaces/ShaikhTaiba/malaysia-gov-chatbot',
      texture: 'textures/project/project1.mp4',
      logo: 'assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: 'assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'langchain',
          path: 'assets/langchain.png',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/huggingface.png',
        },
        {
          id: 3,
          name: 'MongoDB',
          path: 'assets/python.png',
        },
        {
          id: 4,
          name: 'Socket.IO',
          path: 'assets/nlp-logo.png',
        },
        {
          id: 5,
          name: 'Node.js',
          path: 'assets/transformers.png',
        },
      ],
    },
    
    {
      title: 'RenalTech - AI-Powered Kidney Disease Classifier',
      desc: 'RenalTech is a groundbreaking AI tool that uses deep learning to classify kidney diseases based on medical imaging. It assists healthcare professionals by providing accurate predictions across multiple disease categories.',
      subdesc:
        'Developed as a full-stack solution using Python, TensorFlow (VGG16 model), and Flask for the backend, along with a Tailwind CSS-powered front-end. RenalScan is optimized for performance with augmentation, adaptive learning rates, and advanced callback methods.',
      href: 'https://github.com/ShaikhTaiba/Kidney-Disease-Image-Classifier',
      texture: 'textures/project/project2.mp4',
      logo: 'assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: 'public/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: 'assets/python.png',
        },
        {
          id: 2,
          name: 'Tensorflow',
          path: 'assets/tensorflow.png',
        },
        {
          id: 3,
          name: 'MLflow',
          path: 'assets/mlflow.png',
        },
        {
          id: 4,
          name: 'Keras',
          path: 'assets/keras.png',
        },
      ],
    },
    {
      title: 'SummarizeAI - Intelligent Text Summarization Tool',
      desc: 'SummarizeAI is an advanced tool leveraging AI to condense lengthy articles, research papers, and other textual content into concise summaries. It empowers users to quickly grasp key points without sifting through large amounts of information.',
      subdesc:
        'Built as an end-to-end project with Python, Flask, and NLP libraries like SpaCy and Hugging Face Transformers. The platform ensures high accuracy and usability through responsive web design and real-time processing.',
      href: 'https://github.com/ShaikhTaiba/Text-Summarization-Project',
      texture: 'textures/project/project3.mp4',
      logo: 'assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: 'assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: 'assets/python.png',
        },
        {
          id: 2,
          name: 'Hugging-face Transformers',
          path: 'assets/huggingface.png',
        },
        {
          id: 3,
          name: 'Github',
          path: 'assets/github.png',
        },
        {
          id: 4,
          name: 'AWS',
          path: 'assets/aws.png',
        },
      ],
    },
    {
      title: 'Financial Fraud Detection Dashboard',
      desc: "An interactive Power BI dashboard analysing ATM transaction patterns and detecting fraudulent activity using statistical anomaly detection — contributing to financial security for everyday banking customers.",
      subdesc:
        'Protects ordinary citizens from financial fraud through data-driven anomaly detection in banking systems.',
      href: 'https://drive.google.com/file/d/1Dea4MHc4rBb_vBTpHcK_a3YYnLF2L0LL/view?usp=sharing',
      texture: 'textures/project/project4.mp4',
      logo: 'assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: 'assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: 'assets/powerbi.png',
        },
        {
          id: 2,
          name: 'Tensorflow',
          path: 'assets/sql.png',
        },
        {
          id: 3,
          name: 'MLflow',
          path: 'assets/statistics.png',
        },
        {
          id: 4,
          name: 'Keras',
          path: 'assets/visualization.png',
        },
      ],
    },
    {
      title: 'Syncronus Chat App - Real Time Chat Application',
      desc: 'Syncronus Chat App is a feature-rich chat application that allows users to communicate seamlessly in real time. Its robust architecture supports synchronous messaging, ensuring instant delivery and user engagement.',
      subdesc:
        'Created with Node.js, Socket.IO, and React, ChatterSync integrates a modern Material-UI interface and backend scalability for a smooth, real-time chatting experience.',
      href: 'https://github.com/ShaikhTaiba/Chat-App',
      texture: 'textures/project/project5.mp4',
      logo: 'assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: 'assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'assets/react.svg',
        },
        {
          id: 3,
          name: 'MongoDB',
          path: 'assets/mongo.png',
        },
        {
          id: 4,
          name: 'Socket.IO',
          path: 'assets/socketio.png',
        },
        {
          id: 5,
          name: 'Node.js',
          path: 'assets/nodejs.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -6, -10] : isMobile ? [-9, -6, -10] : isTablet ? [-11, 4, -10] : [-13, -8, -10],
    };
  };
  
  export const workExperiences = [
  // SUBSECTION A — Professional Experience
  {
    id: 1,
    name: 'Edunet Foundation',
    pos: 'AI Engineer Intern',
    duration: 'Jan 2025 – Feb 2025',
    title: "Designed AI-driven solutions to optimise renewable energy efficiency for sustainable development initiatives. Developed a CNN-based model for plastic waste classification, improving waste sorting accuracy by 25% — supporting municipal solid waste management and environmental public policy goals.",
    icon: 'assets/edunet.png',
    animation: 'salute',
    subsection: 'professional',
  },
  {
    id: 2,
    name: 'Aavaaz Internationals',
    pos: 'AI Intern',
    duration: 'Dec 2024 – Jan 2025',
    title: "Developed and optimised AI-powered speech and language processing models to improve accessibility for underserved multilingual communities. Achieved a 30% improvement in processing efficiency — enabling faster, more accurate responses across South Asian languages.",
    icon: 'assets/aavaaz.png',
    animation: 'clapping',
    subsection: 'professional',
  },
  // SUBSECTION B — Volunteering & Community Leadership
  {
    id: 3,
    name: 'Google Developer Group (GDG)',
    pos: 'AI/ML Lead',
    duration: 'Sep 2024 – May 2025',
    title: "Lead the AI/ML vertical of the campus Google Developer Group — mentoring 50+ student developers through workshops, study jams, and project collaborations in machine learning and LLM fine-tuning. Organise community events that expand access to AI education beyond formal curriculum.",
    icon: 'assets/gdg.png',
    animation: 'victory',
    subsection: 'volunteering',
  },
  {
    id: 4,
    name: 'LetsUpgrade',
    pos: 'Student Ambassador',
    duration: '2024 – 2025',
    title: "Promote technology education and upskilling opportunities to 200+ undergraduate students across campus and online communities. Coordinate events and campaigns that bridge the gap between student learning and industry-ready AI and cloud skills.",
    icon: 'assets/letsupgrade.png',
    animation: 'idle',
    subsection: 'volunteering',
  },
  ];