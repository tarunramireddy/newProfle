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
          <div className="text-[#64ffda] text-3xl font-bold">S</div>
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
          <h2 className="text-[#ccd6f6] text-6xl font-bold mb-4">SAI ROHITH VENNU.</h2>
          <h3 className="text-[#8892b0] text-5xl font-bold mb-6">I build cloud infrastructure.</h3>
          <p className="max-w-2xl text-xl mb-12">
            I'm a DevOps Engineer & IT Support Professional specializing in building and maintaining 
            cloud infrastructure and providing technical solutions. Currently, I'm focused on building 
            accessible, human-centered systems at{' '}
            <button 
              onClick={() => openGoogleSearch("Bectran Inc Chicago")}
              className="text-[#64ffda] hover:underline">
              Bectran, Inc
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
                Hello! I'm Sai, a DevOps Engineer and IT Support Professional with expertise in AWS cloud 
                infrastructure and system administration. My journey in tech started at{' '}
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
                </button>{' '}
                while working at{' '}
                <button 
                  onClick={() => openGoogleSearch("Bectran Inc Chicago")}
                  className="text-[#64ffda] hover:underline">
                  Bectran, Inc
                </button>, where I manage cloud infrastructure and provide IT support.
              </p>
              <p>Here are a few technologies I've been working with recently:</p>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> AWS Cloud Services
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> Linux/Unix
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> Docker/Kubernetes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> Jenkins
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> Azure Active Directory
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> Network Infrastructure
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
              Associate DevOps Engineer & IT Support
            </h3>
            <p className="text-[#64ffda] mb-4">
              <button 
                onClick={() => openGoogleSearch("Bectran Inc Chicago")}
                className="hover:underline">
                Bectran, Inc
              </button>{' '}
              · Chicago, Illinois
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-[#64ffda] mt-1">▹</span>
                <span>Managed AWS cloud infrastructure including EC2, S3, RDS, VPC, and IAM</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#64ffda] mt-1">▹</span>
                <span>Implemented security protocols and managed company-wide IT inventory</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#64ffda] mt-1">▹</span>
                <span>Provided technical support and maintained system security</span>
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
                Employee Information Database
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
              A comprehensive web application for managing employee records using AWS infrastructure, 
              featuring secure data storage and efficient retrieval systems.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-[#64ffda]">
              <span>AWS VPC</span>
              <span>EC2</span>
              <span>S3</span>
              <span>RDS</span>
              <span>Jenkins</span>
              <span>Datadog</span>
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
          <a href="mailto:vennusairohith@gmail.com" className="button-outline text-lg">
            Say Hello <Mail className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="mailto:vennusairohith@gmail.com" className="text-[#64ffda] hover:text-[#64ffda]/80">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/sai-rohith-vennu-437aaa22b/" 
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