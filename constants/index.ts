import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaFileCode } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { TbCloudComputing } from "react-icons/tb";

// Updated skill categories with your actual tech stack
export const LANGUAGES = [
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C",
    image: "c.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C++",
    image: "cpp.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C#",
    image: "csharp.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PHP",
    image: "php.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Dart",
    image: "dart.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Solidity",
    image: "solidity.png",
    width: 80,
    height: 80,
  },
] as const;

export const FRAMEWORKS = [
  {
    skill_name: "jQuery",
    image: "jquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Bootstrap",
    image: "bootstrap.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React.js",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Laravel",
    image: "laravel.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Flutter",
    image: "flutter.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Electron.js",
    image: "electron.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Django",
    image: "django.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Flask",
    image: "flask.png",
    width: 80,
    height: 80,
  },
] as const;

export const DATABASES = [
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 80,
    height: 80,
  },
] as const;

export const COMPONENT_LIBRARIES = [
  {
    skill_name: "ShadCN",
    image: "shadcn.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
] as const;

export const DEVELOPER_TOOLS = [
  {
    skill_name: "VS Code",
    image: "vscode.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Android Studio",
    image: "androidstudio.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Postman",
    image: "postman.png",
    width: 80,
    height: 80,
  },
] as const;

export const CLOUD_PLATFORMS = [
  {
    skill_name: "Azure",
    image: "azure.png",
    width: 80,
    height: 80,
  },
] as const;

export const DEVSECOPS = [
  {
    skill_name: "Git",
    image: "git.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Kubernetes",
    image: "kubernetes.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Jenkins",
    image: "jenkins.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Jira",
    image: "jira.png",
    width: 80,
    height: 80,
  },
] as const;

export const AI_ML_LIBRARIES = [
  {
    skill_name: "NumPy",
    image: "numpy.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Pandas",
    image: "pandas.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Matplotlib",
    image: "matplotlib.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Scikit-Learn",
    image: "sklearn.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TensorFlow",
    image: "tensorflow.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Keras",
    image: "keras.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PyTorch",
    image: "pytorch.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "NLTK",
    image: "nltk.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "SpaCy",
    image: "spacy.png",
    width: 80,
    height: 80,
  },
] as const;

export const OTHER_TECHNOLOGIES = [
  {
    skill_name: "Apache Kafka",
    image: "kafka.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Nginx",
    image: "nginx.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Kali Linux",
    image: "kali.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Android OS",
    image: "android.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 80,
    height: 80,
  },
] as const;

// Skill categories for organized display
export const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    skills: LANGUAGES,
    gradient: "from-blue-500 to-purple-600",
    icon: TbCloudComputing,
  },
  {
    title: "Frameworks & Libraries",
    skills: FRAMEWORKS,
    gradient: "from-green-500 to-teal-600",
    icon: TbCloudComputing,
  },
  {
    title: "Databases",
    skills: DATABASES,
    gradient: "from-orange-500 to-red-600",
    icon: FaDatabase,
  },
  {
    title: "Component Libraries",
    skills: COMPONENT_LIBRARIES,
    gradient: "from-pink-500 to-rose-600",
    icon: TbCloudComputing,
  },
  {
    title: "Developer Tools",
    skills: DEVELOPER_TOOLS,
    gradient: "from-indigo-500 to-blue-600",
    icon: TbCloudComputing,
  },
  {
    title: "Cloud Platforms",
    skills: CLOUD_PLATFORMS,
    gradient: "from-cyan-500 to-blue-600",
    icon: TbCloudComputing,
  },
  {
    title: "DevSecOps",
    skills: DEVSECOPS,
    gradient: "from-emerald-500 to-green-600",
    icon: TbCloudComputing,
  },
  {
    title: "AI/ML Libraries",
    skills: AI_ML_LIBRARIES,
    gradient: "from-purple-500 to-pink-600",
    icon: TbCloudComputing,
  },
  {
    title: "Other Technologies",
    skills: OTHER_TECHNOLOGIES,
    gradient: "from-amber-500 to-orange-600",
    icon: TbCloudComputing,
  },
] as const;

// Keep existing exports for backward compatibility
export const SOCIALS = [
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/neerajv1",
  },
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/blackhathckr",
  },
  {
    name: "X",
    icon: RxTwitterLogo,
    link: "https://x.com/blackhathckr",
  },
] as const;

// Updated with your real projects
export const PROJECTS = [
  {
    title: "AgriTwin",
    description:
      "A comprehensive SAAS platform implementing Digital Twin technology for agriculture. Every agricultural process is digitized, simulated, and automated through integrated software and hardware solutions. Features microservices architecture for scalability and real-time data processing.",
    image: "/projects/agritwin.png",
    link: "https://github.com/blackhathckr",
    type: "SAAS Platform",
    technologies: ["React.js", "ShadCN", "Tailwind CSS", "Node.js", "MongoDB", "Azure", "Microservices", "Kafka", "Docker", "Kubernetes", "Jenkins"],
    category: "full-stack"
  },
  {
    title: "Hotel Food Ordering App",
    description:
      "A complete full-stack mobile and web application for hotel food ordering. Features React Native mobile app with Razorpay integration, real-time order tracking with WebSockets, and comprehensive admin panel for analytics, order management, and menu control.",
    image: "/projects/hotel-food-app.png",
    link: "https://github.com/blackhathckr",
    type: "Mobile & Web App",
    technologies: ["React Native", "MERN Stack", "Node.js", "Express.js", "MongoDB", "WebSockets", "Razorpay"],
    category: "full-stack"
  },
  {
    title: "ARDrobe",
    description:
      "An innovative virtual wardrobe using Augmented Reality technology. Integrated ecommerce platform where users can try on accessories like watches, shoes, sunglasses, and clothing in real-time AR using their phone camera. Built with React.js and Three.js for immersive 3D experiences.",
    image: "/projects/ardrobe.png",
    link: "https://github.com/blackhathckr",
    type: "AR E-commerce",
    technologies: ["React.js", "Three.js", "WebGL", "AR", "3D Modeling"],
    category: "ar-vr"
  },
  {
    title: "CognitivEye",
    description:
      "Advanced AI-powered workplace safety monitoring system using computer vision and deep learning. Real-time object detection and tracking with YOLOv8, worker movement analysis, and integrated risk assessment. Features LLM-powered analytics dashboard and automated alert system deployed on Raspberry Pi.",
    image: "/projects/cognitiveeye.png",
    link: "https://github.com/blackhathckr",
    type: "AI Safety System",
    technologies: ["Python", "TensorFlow", "Keras", "PyTorch", "OpenCV", "YOLOv8", "HuggingFace", "Twilio", "Raspberry Pi"],
    category: "ai-ml"
  },
  {
    title: "Neuro Quant",
    description:
      "Full-stack web application integrated with CNN Deep Learning Model for Alzheimer's prediction. Built with advanced Convolutional Neural Network using TensorFlow and Keras, featuring Conv2D and MaxPooling2D layers for high accuracy. Includes TensorBoard visualization for model training analysis.",
    image: "/projects/neuro-quant.png",
    link: "https://github.com/blackhathckr",
    type: "Medical AI",
    technologies: ["Python", "Flask", "Streamlit", "TensorFlow", "Keras", "CNN", "TensorBoard"],
    category: "ai-ml"
  },
  {
    title: "Apex Arcade",
    description:
      "Modern full-stack Ecommerce web application featuring Node.js REST API backend with React frontend. Comprehensive CRUD operations on MongoDB NoSQL database, implementing modern React hooks (useState, useEffect) and Express.js framework for robust server development.",
    image: "/projects/apex-arcade.png",
    link: "https://github.com/blackhathckr",
    type: "Web Application",
    technologies: ["Node.js", "Express.js", "React.js", "MongoDB", "REST API", "React Hooks"],
    category: "full-stack"
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/neerajv1",
      },
      {
        name: "Github",
        icon: RxGithubLogo,
        link: "https://github.com/blackhathckr",
      },
      {
        name: "X",
        icon: RxTwitterLogo,
        link: "https://x.com/blackhathckr",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:neerajvn1@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/blackhathckr/portfolio",
};