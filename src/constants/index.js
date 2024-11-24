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
      title: 'Syncronus Chat App - Real Time Chat Application',
      desc: 'Syncronus Chat App is a feature-rich chat application that allows users to communicate seamlessly in real time. Its robust architecture supports synchronous messaging, ensuring instant delivery and user engagement.',
      subdesc:
        'Created with Node.js, Socket.IO, and React, ChatterSync integrates a modern Material-UI interface and backend scalability for a smooth, real-time chatting experience.',
      href: 'https://github.com/ShaikhTaiba/Chat-App',
      texture: 'textures/project/project1.mp4',
      logo: 'assets/project-logo1.png',
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
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
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
    {
      title: 'RenalTech - AI-Powered Kidney Disease Classifier',
      desc: 'RenalTech is a groundbreaking AI tool that uses deep learning to classify kidney diseases based on medical imaging. It assists healthcare professionals by providing accurate predictions across multiple disease categories.',
      subdesc:
        'Developed as a full-stack solution using Python, TensorFlow (VGG16 model), and Flask for the backend, along with a Tailwind CSS-powered front-end. RenalScan is optimized for performance with augmentation, adaptive learning rates, and advanced callback methods.',
      href: 'https://github.com/ShaikhTaiba/Kidney-Disease-Image-Classifier',
      texture: 'textures/project/project2.mp4',
      logo: 'assets/project-logo2.png',
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
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
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
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Freelance',
      pos: 'Math and Physics Tutor',
      duration: '2022 - 2024',
      title: "I am a skilled and passionate tutor with a strong background in Mathematics and Physics. My expertise includes teaching students in both subjects, ensuring they excel in their studies.",
      icon: 'assets/freelance.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Google Developer Group (GDG)',
      pos: 'AI/ML Lead',
      duration: '2024 - present',
      title: "Specializing in AI/ML, I lead a team of passionate developers, contributing to cutting-edge projects and fostering innovation in the field of Artificial Intelligence and Machine Learning.",
      icon: 'assets/gdg.png',
      animation: 'clapping',
    },
  ];