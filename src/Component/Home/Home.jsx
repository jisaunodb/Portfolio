// import React, { useState, useEffect } from 'react';
// import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Send, ChevronDown, Briefcase, Code2, Sparkles } from 'lucide-react';

// export default function Portfolio() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isVisible, setIsVisible] = useState({});

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);

//       const sections = ['home', 'experience', 'contact'];
//       const current = sections.find(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
//       if (current) setActiveSection(current);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           setIsVisible(prev => ({
//             ...prev,
//             [entry.target.id]: entry.isIntersecting
//           }));
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('section[id]').forEach((section) => {
//       observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const experiences = [
//     {
//       role: "Senior Frontend Developer",
//       company: "Tech Company Inc.",
//       period: "2022 - Present",
//       description: "Led development of customer-facing applications using React and Redux. Improved performance by 40% and mentored junior developers.",
//       skills: ["React", "Redux", "TypeScript", "Tailwind"],
//       color: "blue"
//     },
//     {
//       role: "Full Stack Developer",
//       company: "Startup Solutions",
//       period: "2020 - 2022",
//       description: "Built and maintained multiple web applications. Implemented CI/CD pipelines and collaborated with design teams.",
//       skills: ["Node.js", "MongoDB", "React", "AWS"],
//       color: "purple"
//     },
//     {
//       role: "Junior Developer",
//       company: "Web Agency Ltd.",
//       period: "2018 - 2020",
//       description: "Developed responsive websites and learned modern development practices. Worked with HTML, CSS, JavaScript, and React.",
//       skills: ["HTML", "CSS", "JavaScript", "React"],
//       color: "pink"
//     }
//   ];

//   const handleSubmit = () => {
//     if (formData.name && formData.email && formData.message) {
//       alert('Message sent successfully! 🎉');
//       setFormData({ name: '', email: '', message: '' });
//     }
//   };

//   return (
//     <div className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white min-h-screen">
//       {/* Animated Background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
//         <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
//       </div>

//       {/* Header */}
//       <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-blue-500/10' : 'bg-transparent'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex items-center space-x-2">
//               <Sparkles className="text-blue-400" size={28} />
//               <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 MyPortfolio
//               </span>
//             </div>

//             <nav className="hidden md:flex space-x-1">
//               {['home', 'experience', 'contact'].map(item => (
//                 <a
//                   key={item}
//                   href={`#${item}`}
//                   className={`px-4 py-2 rounded-lg capitalize transition-all duration-300 ${
//                     activeSection === item
//                       ? 'bg-blue-500/20 text-blue-400'
//                       : 'hover:bg-gray-800 hover:text-blue-400'
//                   }`}
//                 >
//                   {item}
//                 </a>
//               ))}
//             </nav>

//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
//             >
//               {menuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {menuOpen && (
//             <div className="md:hidden pb-4 space-y-2 animate-in slide-in-from-top">
//               {['home', 'experience', 'contact'].map(item => (
//                 <a
//                   key={item}
//                   href={`#${item}`}
//                   className="block py-2 px-4 hover:bg-gray-800 rounded-lg capitalize transition-colors"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Banner */}
//       <section id="home" className={`relative min-h-screen flex items-center justify-center px-4 pt-20 transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="text-center max-w-4xl relative z-10">
//           <div className="relative inline-block mb-8">
//             <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center text-6xl font-bold animate-pulse shadow-2xl shadow-blue-500/50">
//               A
//             </div>
//             <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-gray-900 animate-bounce"></div>
//           </div>

//           <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-in slide-in-from-bottom duration-700">
//             Your Name
//           </h1>

//           <div className="flex items-center justify-center space-x-2 mb-6">
//             <Code2 className="text-blue-400" size={24} />
//             <p className="text-2xl md:text-4xl text-gray-300 font-light">Full Stack Developer</p>
//           </div>

//           <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
//             Passionate developer creating elegant solutions with modern web technologies.
//             Turning ideas into reality, one line of code at a time.
//           </p>

//           <div className="flex justify-center space-x-4 mb-12">
//             <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
//               <span>Get In Touch</span>
//               <Send size={18} />
//             </a>
//             <a href="#experience" className="px-8 py-4 bg-gray-800 rounded-full font-semibold hover:bg-gray-700 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
//               <span>View Work</span>
//               <Briefcase size={18} />
//             </a>
//           </div>

//           <div className="flex justify-center space-x-4">
//             <a href="#" className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 group">
//               <Github size={24} className="group-hover:text-blue-400 transition-colors" />
//             </a>
//             <a href="#" className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 group">
//               <Linkedin size={24} className="group-hover:text-blue-400 transition-colors" />
//             </a>
//             <a href="#contact" className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 group">
//               <Mail size={24} className="group-hover:text-blue-400 transition-colors" />
//             </a>
//           </div>
//         </div>

//         <a href="#experience" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronDown size={32} className="text-blue-400" />
//         </a>
//       </section>

//       {/* Experience */}
//       <section id="experience" className={`relative py-32 px-4 transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="max-w-5xl mx-auto relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Work Experience
//             </h2>
//             <p className="text-gray-400 text-lg">My professional journey so far</p>
//           </div>

//           <div className="relative">
//             <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

//             <div className="space-y-12">
//               {experiences.map((exp, index) => (
//                 <div
//                   key={index}
//                   className={`relative transition-all duration-700 delay-${index * 100} ${
//                     isVisible.experience ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
//                   }`}
//                 >
//                   <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
//                     <div className="w-5/12"></div>
//                     <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-${exp.color}-500 border-4 border-gray-900 shadow-lg shadow-${exp.color}-500/50`}></div>
//                     <div className="w-5/12"></div>
//                   </div>

//                   <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
//                     <div className="w-5/12 px-6">
//                       <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-${exp.color}-500/20 hover:border-${exp.color}-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-${exp.color}-500/20 group hover:scale-105`}>
//                         <div className="flex items-start justify-between mb-3">
//                           <h3 className={`text-xl font-bold text-${exp.color}-400 group-hover:text-${exp.color}-300 transition-colors`}>
//                             {exp.role}
//                           </h3>
//                           <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
//                             {exp.period}
//                           </span>
//                         </div>
//                         <p className="text-purple-400 mb-3 font-medium">{exp.company}</p>
//                         <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>
//                         <div className="flex flex-wrap gap-2">
//                           {exp.skills.map((skill, idx) => (
//                             <span key={idx} className={`px-3 py-1 bg-${exp.color}-500/10 text-${exp.color}-400 rounded-full text-xs font-medium`}>
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="w-2/12"></div>
//                     <div className="w-5/12"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className={`relative py-32 px-4 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="max-w-4xl mx-auto relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Get In Touch
//             </h2>
//             <p className="text-gray-400 text-lg">Let's create something amazing together</p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
//               <div className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
//                   <input
//                     type="text"
//                     value={formData.name}
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//                     placeholder="Your name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
//                   <input
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//                     placeholder="your@email.com"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
//                   <textarea
//                     value={formData.message}
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     rows="5"
//                     className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all"
//                     placeholder="Your message..."
//                   ></textarea>
//                 </div>
//                 <button
//                   onClick={handleSubmit}
//                   className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
//                 >
//                   <span>Send Message</span>
//                   <Send size={18} />
//                 </button>
//               </div>
//             </div>

//             <div className="space-y-6">
//               <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group">
//                 <Mail className="mb-4 text-blue-400 group-hover:scale-110 transition-transform" size={40} />
//                 <p className="text-gray-400 text-sm mb-1">Email</p>
//                 <p className="text-white text-lg font-medium">your@email.com</p>
//               </div>

//               <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group">
//                 <Phone className="mb-4 text-purple-400 group-hover:scale-110 transition-transform" size={40} />
//                 <p className="text-gray-400 text-sm mb-1">Phone</p>
//                 <p className="text-white text-lg font-medium">+880 1234-567890</p>
//               </div>

//               <div className="bg-gradient-to-br from-pink-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 group">
//                 <MapPin className="mb-4 text-pink-400 group-hover:scale-110 transition-transform" size={40} />
//                 <p className="text-gray-400 text-sm mb-1">Location</p>
//                 <p className="text-white text-lg font-medium">Dhaka, Bangladesh</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative border-t border-gray-800 py-12 bg-gradient-to-b from-transparent to-black/50">
//         <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
//           <div className="flex items-center justify-center space-x-2 mb-6">
//             <Sparkles className="text-blue-400" size={24} />
//             <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//               MyPortfolio
//             </span>
//           </div>

//           <p className="text-gray-400 mb-6">Building the future, one project at a time.</p>

//           <div className="flex justify-center space-x-6 mb-6">
//             <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300">GitHub</a>
//             <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300">LinkedIn</a>
//             <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300">Twitter</a>
//           </div>

//           <p className="text-gray-500 text-sm">© 2025 Your Name. Crafted with ❤️ and React</p>
//         </div>
//       </footer>
//     </div>
//   );
// }