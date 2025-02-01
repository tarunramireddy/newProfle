import React from 'react';
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';

function App() {
  const openGoogleSearch = (query: string) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#8892b0]">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#0a192f]/90 backdrop-blur-sm z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-[#64ffda] text-3xl font-bold">T</div>
          <div className="flex items-center gap-8">
            <a href="#about" className="nav-link"><span className="nav-number">01.</span>About</a>
            <a href="#experience" className="nav-link"><span className="nav-number">02.</span>Experience</a>
            <a href="#work" className="nav-link"><span className="nav-number">03.</span>Work</a>
            <a href="#contact" className="nav-link"><span className="nav-number">04.</span>Contact</a>
            <a href="/resume.pdf" className="button-outline">
              Resume <FileText className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[#64ffda] font-mono mb-5">Hi, my name is</h1>
          <h2 className="text-[#ccd6f6] text-6xl font-bold mb-4">TARUN RAMIREDDY.</h2>
          <h3 className="text-[#8892b0] text-5xl font-bold mb-6">I build scalable web applications and systems.</h3>
          <p className="max-w-2xl text-xl mb-12">
            I'm a Full-Stack Developer specializing in backend technologies and system integration. Currently, I'm working on building robust systems and cloud-based applications at{' '}
            <button 
              onClick={() => openGoogleSearch("University of Cincinnati")}
              className="text-[#64ffda] hover:underline">
              University of Cincinnati
            </button>.
          </p>
          <a href="#work" className="button-outline text-lg">
            Check out my work!
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">
            <span className="heading-number">01.</span> About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p>
                Hello! I'm Tarun, a Full-Stack Developer with a focus on backend technologies and cloud systems. My journey in tech started at{' '}
                <button 
                  onClick={() => openGoogleSearch("Tudi Ram Reddy Institute of Technology & Science")}
                  className="text-[#64ffda] hover:underline">
                  Tudi Ram Reddy Institute of Technology & Science
                </button>, where I earned my Bachelor's in Information Technology.
              </p>
              <p>
                Currently, I'm pursuing my Master's in Information Technology at the{' '}
                <button 
                  onClick={() => openGoogleSearch("University of Cincinnati")}
                  className="text-[#64ffda] hover:underline">
                  University of Cincinnati
                </button>, while working on full-stack web applications and system architecture.
              </p>
              <p>Here are a few technologies I've been working with recently:</p>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> JavaScript/Node.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> React
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> Java
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> SQL/NoSQL Databases
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> C#
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> DevOps (CI/CD)
                </li>
              </ul>
            </div>
            <div className="relative group">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?auto=format&fit=crop&w=800"
                  alt="Profile"
                  className="rounded grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute inset-0 border-2 border-[#64ffda] rounded translate-x-5 translate-y-5 -z-10 
                            group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-[#112240]">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">
            <span className="heading-number">02.</span> Experience
          </h2>
          <div className="bg-[#0a192f] p-6 rounded-lg shadow-xl">
            <h3 className="text-[#ccd6f6] text-xl font-semibold mb-2">
              Automation Engineer
            </h3>
            <p className="text-[#64ffda] mb-4">
              <button 
                onClick={() => openGoogleSearch("Cognizant")}
                className="hover:underline">
                Cognizant
              </button>{' '}· Hyderabad, India
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-[#64ffda] mt-1">▹</span>
                <span>Automated test scripts for web applications using Selenium and Java</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#64ffda] mt-1">▹</span>
                <span>Implemented continuous integration and deployment using Jenkins</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#64ffda] mt-1">▹</span>
                <span>Worked with MySQL databases to optimize and maintain data storage</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">
            <span className="heading-number">03.</span> Some Things I've Built
          </h2>
          <div className="bg-[#112240] p-6 rounded-lg shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-[#ccd6f6] text-xl font-semibold">
                Bearcat Guardian Application
              </h3>
              <div className="flex gap-4">
                <a href="#" className="text-[#64ffda] hover:text-[#64ffda]/80">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#64ffda] hover:text-[#64ffda]/80">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            <p className="mb-4">
              A web-based application for safety and security, developed as part of my research project for the University of Cincinnati.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-[#64ffda]">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express</span>
              <span>JavaScript</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="section-heading justify-center">
            <span className="heading-number">04.</span> What's Next?
          </h2>
          <h3 className="text-[#ccd6f6] text-4xl font-bold mb-4">Get In Touch</h3>
          <p className="max-w-lg mx-auto mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          <a href="mailto:ramireddytarun@gmail.com" className="button-outline text-lg">
            Say Hello <Mail className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="mailto:ramireddytarun@gmail.com" className="text-[#64ffda] hover:text-[#64ffda]/80">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/tarun-ramireddy" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-[#64ffda] hover:text-[#64ffda]/80">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-[#64ffda] hover:text-[#64ffda]/80">
            <Github className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm">Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
