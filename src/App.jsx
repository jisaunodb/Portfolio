
import './App.css'
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Send, ChevronDown, Briefcase, Code2, Sparkles } from 'lucide-react';
import { FaCode } from "react-icons/fa";
import profilepic from "./assets/Foyjur-rahman.png"
// import Home from './Component/Home/Home'
import {
    FaBootstrap,
    FaReact,
    FaJs,
    FaNodeJs,
    FaGitAlt,
    FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiExpress } from "react-icons/si";
import { TbBrandCpp, TbBrandPython } from "react-icons/tb";
import { HiOutlineDatabase } from "react-icons/hi";
function App() {

   const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'Work','Skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const Work = [
    {
      role: "Petroil",
      company: "Practice Site.",
      period: "2025",
      description: "Led the development of customer-facing applications using React and Tailwind CSS. Improved performance by 40% and mentored senior developer.",
      Work: ["React", "Javasrcipt", "Tailwind"],
      livelink:"https://petroil-inmo.vercel.app/",
      githublink: "https://github.com/jisaunodb/Petroil",
      color: "blue"
    },
    {
      role: "nexcent",
      company: "Creative IT",
      period: "2025",
      description: "Led the development of customer-facing applications using React and Tailwind CSS. Improved performance by 40% and mentored senior developer.",
      Work: ["React", "Javasrcipt", "Tailwind"],
      livelink:"https://nexcent-b6eo.vercel.app/",
      githublink: "https://github.com/jisaunodb/Nexcent",
      color: "purple"
    },
    {
      role: "Postman",
      company: "Creative IT",
      period: "2025-2026",
      description: "Built a feature-rich web application with real-time functionality using React and Redux for efficient state management. Integrated Firebase for authentication and database operations, while crafting a responsive UI with Tailwind CSS for enhanced user experience",
      Work: ["React", "Redux", "JavaScript", "Firebase","Tailwind"],
      livelink:"https://postman-ashen-mu.vercel.app",
      githublink: "https://github.com/jisaunodb/Postman",
      color: "green"
    },
    {
      role: "number guessing ",
      company: "Creative IT",
      period: "2025-2026",
      description: "Developed an interactive number guessing game using vanilla JavaScript featuring dynamic difficulty levels, real-time input validation, and visual feedback..",
      Work: ["JavaScript","Tailwind"],
      livelink:"https://jisaunodb.github.io/count-game-addtodo/",
      githublink: "https://github.com/jisaunodb/count-game-addtodo",
      color: "pink"
    }
  ];

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Message sent successfully! 🎉');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const skills = [
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300 " /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-red-400 " /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
];


  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-blue-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <FaCode className="text-blue-400" size={28}/>
              <a href="#home" className="text-2xl cursor-pointer font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                FOYJUR RAHMAN
              </a>
            </div>

            <nav className="hidden md:flex space-x-1">
              {['home', 'Work','Skills', 'contact'].map(item => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`px-4 text-[20px] py-2 rounded-lg capitalize transition-all duration-300 ${
                    activeSection === item
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'hover:bg-gray-800 hover:text-blue-400'
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden pb-4 space-y-2 animate-in slide-in-from-top">
              {['home', 'Work', 'Skills','contact'].map(item => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="block py-2 px-4 hover:bg-gray-800 rounded-lg capitalize transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Banner */}
      <section id="home" className={`relative min-h-screen flex items-center justify-center px-4 pt-20 transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center max-w-4xl relative z-10">
          <div className="relative inline-block mb-8">
            <div className="w-[200px] h-[200px] mx-auto rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center text-6xl font-bold animate-pulse shadow-2xl shadow-blue-500/50">
              <img src={profilepic} className='rounded-full' alt="" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-gray-900 animate-bounce"></div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-in slide-in-from-bottom duration-700">
            FOYJUR RAHMAN
          </h1>

          <div className="flex items-center justify-center space-x-2 mb-6">
            <Code2 className="text-blue-400" size={24} />
            <p className="text-2xl md:text-4xl text-gray-300 font-light">Font End Developer</p>
          </div>

          <p className="text-[20px] text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Hi, I'm FOYJUR RAHMAN
            I am a Front-End Developer with 1 year of experience specializing in React, Redux, JavaScript, and Tailwind CSS. I focus on building responsive, dynamic web applications with clean code and modern development practices. Skilled in creating intuitive user interfaces, managing application state efficiently, and integrating Firebase for real-time functionality. I am passionate about continuous learning, problem-solving, and delivering exceptional digital Skills.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>Get In Touch</span>
              <Send size={18} />
            </a>
            <a href="#Work" className="px-8 py-4 bg-gray-800 rounded-full font-semibold hover:bg-gray-700 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>View Work</span>
              <Briefcase size={18} />
            </a>
          </div>

          <div className="flex justify-center space-x-4">
            <a href="https://www.github.com/jisaunodb" className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 group">
              <Github size={24} className="group-hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/foyjur-rahman-749275390/" className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 group">
              <Linkedin size={24} className="group-hover:text-blue-400 transition-colors" />
            </a>
            <a href="#contact" className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 group">
              <Mail size={24} className="group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>

        <a href="#Work" className="z-10 cursor-pointer absolute bottom-15 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className=" text-blue-400 " />
        </a>
      </section>

      {/* Work */}
      <section id="Work" className={`relative py-32 px-4 transition-all duration-1000 ${isVisible.Work ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Work
            </h2>
            <p className="text-gray-400 text-lg">Also, I have completed 5+ other projects. My professional journey so far.</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

            <div className="space-y-12">
              {Work.map((Work, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 delay-${index * 100} ${
                    isVisible.Work ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
                  }`}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-5/12"></div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-${Work.color}-500 border-4 border-gray-900 shadow-lg shadow-${Work.color}-500/50`}></div>
                    <div className="w-5/12"></div>
                  </div>

                  <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-5/12 px-6">
                      {/* <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-${Work.color}-500/20  hover:border-${Work.color}-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-${Work.color}-500/20 group hover:scale-105`}> */}
                        <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-${Work.color}-500/20 hover:border-${Work.color}-500/50 transition-all duration-300 hover:shadow-xl group hover:scale-105 ${
                        Work.color === 'purple' ? 'hover:shadow-purple-500/20' :
                        Work.color === 'blue' ? 'hover:shadow-blue-500/20' :
                        Work.color === 'green' ? 'hover:shadow-green-500/20' :
                        'hover:shadow-pink-500/20'
                        }`}>
                        <div className="flex items-start justify-between mb-3">
                          <h3 className={`text-xl font-bold text-${Work.color}-400 group-hover:text-${Work.color}-300 transition-colors`}>
                            {Work.role}
                          </h3>
                          <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                            {Work.period}
                          </span>
                        </div>
                        <p className="text-purple-400 mb-3 font-medium">{Work.company}</p>
                        <p className="text-gray-400 mb-4 leading-relaxed">{Work.description}</p>
                        <div className="flex gap-2 mb-4">
                        <a
                        href={Work.livelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        Work.color === 'purple' ? 'bg-purple-500/10 text-purple-400 hover:bg-purple-500/20' :
                        Work.color === 'blue' ? 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20' :
                        Work.color === 'green' ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20' :
                        'bg-pink-500/10 text-pink-400 hover:bg-pink-500/20'
                        }`}
                        >
                        Live Demo →
                        </a>
                        <a
                        href={Work.githublink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700 transition-all"
                        >
                        View Code
                        </a>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {Work.Work.map((Work, idx) => (
                            <span key={idx} className={`px-3 py-1 bg-${Work.color}-500/10 text-${Work.color}-400 rounded-full text-xs font-medium`}>
                              {Work}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                    <div className="w-2/12"></div>
                    <div className="w-5/12"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
     <section id="Skills" className={`mt-[50px] py-20 relative min-h-screen flex items-center justify-center px-4 pt-20 transition-all duration-1000 ${isVisible.Skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div>

            <div className="max-w-5xl mx-auto">
                <h2 className="text-center text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</h2>

                <p className="text-gray-400 text-lg text-center mb-[30px]">A summary of my technical skills and tools I use for development.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-5 rounded-xl text-center shadow-lg hover:shadow-teal-500/20 hover:scale-105 transition flex flex-col items-center gap-3"
                        >
                            <div className="text-3xl">{skill.icon}</div>
                            <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
            <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <div className="text-gray-400 text-sm">Technologies</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
            <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
              4+
            </div>
            <div className="text-gray-400 text-sm">Projects</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
            <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">
              1+
            </div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/20">
            <div className="text-4xl font-black bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-2">
              90%
            </div>
            <div className="text-gray-400 text-sm">Dedication</div>
          </div>
        </div>
      </div>
        </section>



      <section id="contact" className={`relative py-32 px-4 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contact
            </h2>
            <p className="text-gray-400 text-lg">Let's create something amazing together</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group">
                <Mail className="mb-4 text-blue-400 group-hover:scale-110 transition-transform" size={40} />
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <a href='mailto:mdjisaun86@gmail.com' className="text-white text-lg font-medium">mdjisaun86@gmail.com</a>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group">
                <Phone className="mb-4 text-purple-400 group-hover:scale-110 transition-transform" size={40} />
                <p className="text-gray-400 text-sm mb-1">Phone</p>
                <a href='tel:01923564348' className="text-white text-lg font-medium">+880 1923564348</a>
              </div>

              <div className="bg-gradient-to-br from-pink-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 group">
                <MapPin className="mb-4 text-pink-400 group-hover:scale-110 transition-transform" size={40} />
                <p className="text-gray-400 text-sm mb-1">Location</p>
                <p className="text-white text-lg font-medium">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-800 py-12 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <FaCode className="text-blue-400" size={24} />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              FOYJUR RAHMAN
            </span>
          </div>

          <p className="text-gray-400 mb-6">Building the future, one project at a time.</p>

          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com/jisaunodb" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300">GitHub</a>
            <a href="https://www.linkedin.com/in/foyjur-rahman-749275390/" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300">LinkedIn</a>
            <a href="https://www.facebook.com/md.jisaun.3" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300">Facebook</a>
          </div>

          <p className="text-gray-500 text-sm">© 2025 FOYJUR RAHMAN.All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App
