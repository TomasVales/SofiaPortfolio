import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SofiaPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Color palette from the image
  const colors = {
    black: '#292421',
    copper: '#A75F37',
    tan: '#D9B99F',
    blush: '#F2D6CE',
    vanilla: '#F2E7DD', // Background color
    green: '#7A958F',
    mint: '#BAEDDA'
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);


  // Updated skills based on CV
  const skills = [
    { name: 'ASP.NET/C#', level: 85 },
    { name: 'SQL Databases', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'HTML/CSS', level: 70 },
    { name: 'C++', level: 65 },
    { name: 'Linux/Windows', level: 70 }
  ];

  if (isLoading) {
    return (
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-50"
        style={{ backgroundColor: colors.black }}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.9, 1, 0.9]
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ color: colors.vanilla }}
          className="text-3xl font-light"
        >
          Loading...
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen font-sans antialiased overflow-x-hidden" style={{ backgroundColor: colors.vanilla, color: colors.black }}>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-opacity-90 backdrop-blur-sm border-b" style={{ backgroundColor: colors.vanilla, borderColor: colors.tan }}>
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-light tracking-tight"
            style={{ color: colors.copper }}
          >
            <span className="font-medium">SV</span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.ul
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {['home', 'projects', 'skills', 'contact'].map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item}`}
                  className={`text-sm uppercase tracking-wider transition-colors ${activeSection === item ? 'font-medium' : 'opacity-70 hover:opacity-100'}`}
                  style={{ color: activeSection === item ? colors.copper : colors.black }}
                  onClick={() => setActiveSection(item)}
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </motion.ul>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className={`w-6 flex flex-col space-y-1.5 ${menuOpen ? 'transform rotate-45' : ''}`}>
              <span className={`h-px w-full transition-transform ${menuOpen ? 'transform translate-y-2' : ''}`} style={{ backgroundColor: colors.black }}></span>
              <span className={`h-px w-full ${menuOpen ? 'opacity-0' : 'opacity-100'}`} style={{ backgroundColor: colors.black }}></span>
              <span className={`h-px w-full transition-transform ${menuOpen ? 'transform -translate-y-2 -rotate-90' : ''}`} style={{ backgroundColor: colors.black }}></span>
            </div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 flex items-center justify-center"
            style={{ backgroundColor: colors.vanilla }}
          >
            <motion.ul
              className="text-center space-y-8"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
            >
              {['home', 'projects', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item}`}
                    className="text-3xl font-light block py-2"
                    style={{ color: colors.copper }}
                    onClick={() => {
                      setActiveSection(item);
                      setMenuOpen(false);
                    }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-20"
        onMouseEnter={() => setActiveSection('home')}
      >
        <div className="container mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6">
              Hi, I'm <span className="font-medium" style={{ color: colors.copper }}>Sofía Vitalevi</span><br />
              Full Stack Developer
            </h1>
            <p className="text-xl opacity-80 mb-10 max-w-2xl">
              Final year student at UTN looking for opportunities to apply my technical skills in web development and database management.
            </p>
            <motion.a
              href="#projects"
              className="inline-block px-8 py-3 text-sm uppercase tracking-wider"
              style={{
                border: `1px solid ${colors.copper}`,
                color: colors.copper
              }}
              whileHover={{
                backgroundColor: colors.copper,
                color: colors.vanilla
              }}
              transition={{ duration: 0.3 }}
            >
              View My Projects
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20"
        style={{ backgroundColor: colors.vanilla }}
        onMouseEnter={() => setActiveSection('projects')}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light mb-4" style={{ color: colors.copper }}>
              My Projects
            </h2>
            <div className="w-20 h-0.5 mx-auto" style={{ backgroundColor: colors.copper }}></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proyecto 1 - Sistema de Clínica */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all h-full flex flex-col border"
                style={{
                  backgroundColor: colors.vanilla,
                  borderColor: colors.tan
                }}
              >
                <div
                  className="aspect-[4/3] relative overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: colors.green }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <svg className="w-16 h-16" fill="none" stroke={colors.vanilla} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm uppercase tracking-wider" style={{ color: colors.copper }}>
                      2025
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full" style={{
                      backgroundColor: colors.mint,
                      color: colors.black
                    }}>
                      Java
                    </span>
                  </div>
                  <h3 className="text-xl font-medium mb-3" style={{ color: colors.black }}>
                    Clinical Management System
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Complete system for clinic administration: patient records, medical appointments,
                    user roles (admins/doctors), and reporting modules.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-2 py-1 rounded-full" style={{
                      backgroundColor: colors.mint,
                      color: colors.black
                    }}>
                      Group Project
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full" style={{
                      backgroundColor: colors.mint,
                      color: colors.black
                    }}>
                      University
                    </span>
                  </div>
                  <div className="mt-auto">
                    <motion.a
                      href="https://github.com/MartinGSerafini/Laboratorio-IV/tree/main/TP5_GRUPO_02"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium"
                      style={{ color: colors.copper }}
                      whileHover={{ x: 5 }}
                    >
                      View on Github
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Proyecto 2 - Veterinaria */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div
                className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all h-full flex flex-col border"
                style={{
                  backgroundColor: colors.vanilla,
                  borderColor: colors.tan
                }}
              >
                <div
                  className="aspect-[4/3] relative overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: colors.copper }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <svg className="w-16 h-16" fill="none" stroke={colors.vanilla} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm uppercase tracking-wider" style={{ color: colors.copper }}>
                      2023
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full" style={{
                      backgroundColor: colors.mint,
                      color: colors.black
                    }}>
                      C++
                    </span>
                  </div>
                  <h3 className="text-xl font-medium mb-3" style={{ color: colors.black }}>
                    Veterinary File System
                  </h3>
                  <p className="mb-4 text-gray-700">
                    File management system for pet-oriented businesses with client records,
                    appointment scheduling, and administrative functions.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-2 py-1 rounded-full" style={{
                      backgroundColor: colors.mint,
                      color: colors.black
                    }}>
                      Group Project
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full" style={{
                      backgroundColor: colors.mint,
                      color: colors.black
                    }}>
                      University
                    </span>
                  </div>
                  <div className="mt-auto">
                    <motion.a
                      href="https://github.com/Piiily/TP-Final-Lab2-Grupo-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium"
                      style={{ color: colors.copper }}
                      whileHover={{ x: 5 }}
                    >
                      View on GitHub
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Proyecto 3 - Laboratorio IV */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all h-full flex flex-col border"
                style={{
                  backgroundColor: colors.vanilla,
                  borderColor: colors.tan
                }}
              >
                <div
                  className="aspect-[4/3] relative overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: colors.black }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <svg className="w-16 h-16" fill="none" stroke={colors.vanilla} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm uppercase tracking-wider" style={{ color: colors.copper }}>
                      2025
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full" style={{
                      backgroundColor: colors.mint,
                      color: colors.black
                    }}>
                      C# / .NET
                    </span>
                  </div>
                  <h3 className="text-xl font-medium mb-3" style={{ color: colors.black }}>
                    Laboratory IV Projects
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Collection of academic projects covering advanced programming concepts,
                    design patterns, and software architecture in .NET environment.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-2 py-1 rounded-full" style={{
                      backgroundColor: colors.mint,
                      color: colors.black
                    }}>
                      Group Project
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full" style={{
                      backgroundColor: colors.mint,
                      color: colors.black
                    }}>
                      Public Repo
                    </span>
                  </div>
                  <div className="mt-auto">
                    <motion.a
                      href="https://github.com/MartinGSerafini/Laboratorio-IV"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium"
                      style={{ color: colors.copper }}
                      whileHover={{ x: 5 }}
                    >
                      View on GitHub
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-28"
        style={{ backgroundColor: colors.blush }}
        onMouseEnter={() => setActiveSection('skills')}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light mb-4" style={{ color: colors.copper }}>
              My Expertise
            </h2>
            <div className="w-20 h-0.5 mx-auto mb-8" style={{ backgroundColor: colors.copper }}></div>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: colors.black }}>
              Combining technical proficiency with strong problem-solving abilities to create effective solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* About Me Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="p-8 rounded-xl" style={{ backgroundColor: colors.vanilla }}>
                <h3 className="text-2xl font-light mb-6" style={{ color: colors.copper }}>
                  About Me
                </h3>
                <div className="space-y-6 text-gray-700">
                  <p>
                    I'm Sofía Vitalevi, a final year Programming Technician student at UTN (National Technological University)
                    with a passion for backend development and database systems. My academic journey has equipped me with
                    strong foundations in multiple programming paradigms and software development methodologies.
                  </p>
                  <p>
                    Beyond coding, I bring excellent organizational skills from my current role as a receptionist, where I
                    manage multiple responsibilities including cash handling, client advising, and employee coordination.
                  </p>
                  <p>
                    I'm particularly interested in opportunities that allow me to combine my technical skills with my
                    interpersonal abilities to create solutions that make a real impact.
                  </p>
                </div>
              </div>

              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 rounded-xl"
                style={{ backgroundColor: colors.vanilla }}
              >
                <h3 className="text-2xl font-light mb-6" style={{ color: colors.copper }}>
                  Education
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-1">Programming Technician</h4>
                    <p className="text-sm opacity-80 mb-2">UTN FRGP • 2021-2023</p>
                    <p className="text-gray-700">
                      Specialized in web development with ASP.NET and database administration.
                      Completed 16/21 courses with honors.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Licenciate in Physical Sciences</h4>
                    <p className="text-sm opacity-80 mb-2">UTN FRGP • 2019-2022 (incomplete)</p>
                    <p className="text-gray-700">
                      Developed strong analytical and problem-solving skills through physics studies.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Skills Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Technical Skills Card */}
              <div className="p-8 rounded-xl" style={{ backgroundColor: colors.vanilla }}>
                <h3 className="text-2xl font-light mb-6" style={{ color: colors.copper }}>
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm opacity-80">{skill.level}%</span>
                      </div>
                      <div className="w-full rounded-full h-2" style={{ backgroundColor: colors.tan }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: colors.copper }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 rounded-xl"
                style={{ backgroundColor: colors.vanilla }}
              >
                <h3 className="text-2xl font-light mb-6" style={{ color: colors.copper }}>
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Teamwork', 'Communication', 'Problem Solving',
                    'Time Management', 'Adaptability', 'Critical Thinking',
                    'Attention to Detail', 'Customer Service', 'Stress Management'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full"
                      style={{
                        backgroundColor: colors.mint,
                        color: colors.black
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Languages Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-8 rounded-xl"
                style={{ backgroundColor: colors.vanilla }}
              >
                <h3 className="text-2xl font-light mb-6" style={{ color: colors.copper }}>
                  Languages
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Spanish</span>
                      <span className="text-sm opacity-80">Native</span>
                    </div>
                    <div className="w-full rounded-full h-2" style={{ backgroundColor: colors.tan }}>
                      <div className="h-full rounded-full" style={{ backgroundColor: colors.copper, width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">English</span>
                      <span className="text-sm opacity-80">B2 (Intermediate)</span>
                    </div>
                    <div className="w-full rounded-full h-2" style={{ backgroundColor: colors.tan }}>
                      <div className="h-full rounded-full" style={{ backgroundColor: colors.copper, width: '70%' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-28 relative overflow-hidden"
        style={{ backgroundColor: colors.mint }}
        onMouseEnter={() => setActiveSection('contact')}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full" style={{ backgroundColor: colors.copper }}></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full" style={{ backgroundColor: colors.green }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ color: colors.black }}>
                Let's Connect
              </h2>
              <div className="w-20 h-0.5 mx-auto mb-6" style={{ backgroundColor: colors.copper }}></div>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto" style={{ color: colors.black }}>
                Interested in my work? Reach out directly via email or LinkedIn.
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Email Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
                style={{ backgroundColor: colors.vanilla }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: colors.mint }}>
                    <svg className="w-8 h-8" fill="none" stroke={colors.copper} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-light mb-3" style={{ color: colors.copper }}>Email</h3>
                <a
                  href="mailto:sofiapilarvitalevi@gmail.com"
                  className="text-lg hover:underline break-all"
                  style={{ color: colors.black }}
                >
                  sofiapilarvitalevi@gmail.com
                </a>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
                style={{ backgroundColor: colors.vanilla }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: colors.mint }}>
                    <svg className="w-8 h-8" fill="none" stroke={colors.copper} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-light mb-3" style={{ color: colors.copper }}>Phone</h3>
                <a
                  href="tel:+5491141998340"
                  className="text-lg hover:underline"
                  style={{ color: colors.black }}
                >
                  +54 9 11 4199-8340
                </a>
              </motion.div>

              {/* LinkedIn Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
                style={{ backgroundColor: colors.vanilla }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: colors.mint }}>
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-light mb-3" style={{ color: colors.copper }}>LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/sof%C3%ADa-pilar-vitalevi-26281a228/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:underline break-all"
                  style={{ color: colors.black }}
                >
                  in/sofia-pilar-vitalevi
                </a>
              </motion.div>
            </div>

            {/* Location at bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16 flex flex-col items-center"
            >
              <div className="flex items-center mb-2">
                <svg className="w-6 h-6 mr-2" fill="none" stroke={colors.copper} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <p className="text-lg" style={{ color: colors.black }}>
                  Based in Don Torcuato, Buenos Aires, Argentina
                </p>
              </div>
              <motion.a
                href="https://github.com/Piiily"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-sm font-medium"
                style={{ color: colors.copper }}
                whileHover={{ scale: 1.05 }}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Visit my GitHub
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t" style={{ borderColor: colors.tan }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <motion.a
                href="#home"
                className="text-xl font-light inline-block mb-4"
                style={{ color: colors.copper }}
                whileHover={{ y: -2 }}
              >
                SV
              </motion.a>
              <p className="text-sm opacity-80" style={{ color: colors.black }}>
                © {new Date().getFullYear()} Sofía Vitalevi. All rights reserved.
              </p>
              <motion.a
                href="https://kiad.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs mt-2 opacity-60 hover:opacity-100 inline-block"
                style={{ color: colors.black }}
                whileHover={{ y: -2 }}
              >
                Developed by KIAD
              </motion.a>
            </div>

            <div className="flex flex-col items-center md:items-end space-y-4">
              <div className="flex space-x-6">
                {[
                  {
                    name: 'Email',
                    url: 'mailto:sofiapilarvitalevi@gmail.com',
                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  },
                  {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/sof%C3%ADa-pilar-vitalevi-26281a228/',
                    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  },
                  {
                    name: 'GitHub',
                    url: 'https://github.com/Piiily',
                    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1"
                    style={{ color: colors.copper }}
                    whileHover={{ y: -2 }}
                  >
                    {social.icon}
                    <span className="text-sm uppercase tracking-wider hidden sm:inline-block">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
              <motion.a
                href="#home"
                className="text-xs uppercase tracking-wider flex items-center"
                style={{ color: colors.copper }}
                whileHover={{ y: -2 }}
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
                Back to top
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SofiaPortfolio;