"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Calendar,
  MapPin,
  Award,
  Code,
  Database,
  Globe,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ]

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80 // Height of fixed navigation
      const elementPosition = element.offsetTop - navHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const navHeight = 80

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop - navHeight - 100
          if (window.scrollY >= sectionTop) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div
              className="text-xl font-bold text-slate-800 cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => scrollToSection("about")}
            >
              Bandi Ashok
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-blue-100 text-blue-700 shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 bg-white/95 backdrop-blur-md">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-3 text-left rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-blue-100 text-blue-700"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              BA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">Bandi Ashok</h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Backend Developer | Full Stack Developer | AI Engineer
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover:scale-105 transition-transform bg-transparent"
              >
                <a href="https://github.com/Ashok11342" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover:scale-105 transition-transform bg-transparent"
              >
                <a href="https://linkedin.com/in/ashok-bandi-bb7529283" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover:scale-105 transition-transform bg-transparent"
              >
                <a href="mailto:bandiashok2004@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </div>

          <Card className="max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <div className="w-2 h-8 bg-blue-500 rounded-full mr-3"></div>
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed text-lg">
                I'm a final-year student at Vardhaman College of Engineering, holding a 9.23 CGPA, and I'm super excited
                about jumping into a career as a Backend Developer, Full Stack Developer, or AI Engineer. I love
                building cool tech solutions and have hands-on experience with software development and machine
                learning. My goal is to create user-friendly, impactful systems while growing my skills and making a
                real difference.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-blue-500" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Python", "C", "HTML", "CSS", "JavaScript"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-blue-100 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2 text-green-500" />
                  Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "Git", "GitHub", "React.js", "TensorFlow", "Selenium"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-green-100 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-purple-500" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Self-learning", "Leadership", "Problem Solving", "Team Collaboration"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-purple-100 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <CardTitle className="text-xl">EverNorth Apprenticeship</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">Cigna Healthcare</CardDescription>
                  </div>
                  <div className="text-sm text-slate-500 md:text-right">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      Nov 2024 – Feb 2025
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      Online
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Designed responsive membership profile pages using HTML, CSS, JavaScript, and React.js, enhancing user
                  interface for 10,000+ users; collaborated with backend team to integrate APIs.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "React.js"].map((tech) => (
                    <Badge key={tech} variant="outline" className="hover:bg-blue-50 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <CardTitle className="text-xl">Web Automation Intern</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">IIIT Hyderabad</CardDescription>
                  </div>
                  <div className="text-sm text-slate-500 md:text-right">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      May 2024 – Jun 2024
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      Offline
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Developed Python scripts using Selenium and Pytesseract to automate data extraction from district
                  court websites, creating datasets for ML-based judgment prediction models; improved data collection
                  efficiency by 30%.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Selenium", "Pytesseract", "Python"].map((tech) => (
                    <Badge key={tech} variant="outline" className="hover:bg-green-50 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="group-hover:text-blue-600 transition-colors">Kidney Health Risk Prediction</span>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">ML Project</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-slate-700 mb-4 flex-grow leading-relaxed">
                  Developed a deep learning model using ResNet50 and DQN reinforcement learning on kidney CT scan
                  images, classifying them into four categories (Normal, Cyst, Stone, Tumor) with 92% accuracy;
                  implemented real-time image processing and a Streamlit-based interactive dashboard for result
                  visualization.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Python", "TensorFlow", "ResNet50", "Streamlit", "NumPy", "scikit-learn"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs hover:bg-purple-50 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="hover:bg-blue-50 hover:border-blue-300 transition-colors bg-transparent"
                >
                  <a
                    href="https://github.com/Ashok11342/Kidney-Health-Risk-Prediction"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="group-hover:text-blue-600 transition-colors">CPU Scheduling Visualizer</span>
                  <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">Web Project</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-slate-700 mb-4 flex-grow leading-relaxed">
                  Built a React.js-based web application to visualize CPU scheduling algorithms (FCFS, SJF, SRTF, Round
                  Robin, Priority); implemented dynamic graphs for process execution, reducing comprehension time for
                  users by 40%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React.js", "JavaScript", "HTML", "CSS"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs hover:bg-blue-50 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="hover:bg-blue-50 hover:border-blue-300 transition-colors bg-transparent"
                >
                  <a
                    href="https://github.com/Ashok11342/CPU-Scheduling-Visualizer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">B.Tech in Computer Science Engineering (AIML)</h3>
                    <p className="text-slate-600 mb-2">Vardhaman College, Hyderabad | JNTUH</p>
                    <p className="text-sm text-slate-500">
                      Relevant Coursework: Data Structures and Algorithms, Operating Systems, Object-Oriented
                      Programming, Computer Networks, Database Management System
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-2xl text-green-600">9.23 CGPA</p>
                    <p className="text-sm text-slate-500">2022–2026</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Intermediate (MPC)</h3>
                    <p className="text-slate-600">Delta Junior College, Hyderabad | TGBIE</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-2xl text-green-600">95%</p>
                    <p className="text-sm text-slate-500">2020–2022</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Class X</h3>
                    <p className="text-slate-600">M V Raman High School, Wanaparthy | CBSE</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-2xl text-green-600">86%</p>
                    <p className="text-sm text-slate-500">2019–2020</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Achievements & Certifications</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-500" />
                  Coding Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    HackerRank Gold Badge (Problem Solving)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    5★ Java on HackerRank
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    LeetCode 1400+ rating
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    CodeChef 1200+ rating
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Global Rank 5745/50,000 in Smart Interview batch
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-500" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Smart Coder - Smart Interviews (Apr 2025)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    AWS Cloud Foundation - AWS (Sep 2024)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Cloud Computing - NIELIT
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    DBMS - NPTEL
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="pt-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-4 text-blue-500 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:bandiashok2004@gmail.com" className="text-blue-600 hover:underline break-all">
                  bandiashok2004@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="pt-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-4 text-green-500 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+917989645220" className="text-green-600 hover:underline">
                  +91-7989645220
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="pt-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-red-500 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-slate-600">Hyderabad, India</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="hover:scale-105 transition-transform">
              <a href="mailto:bandiashok2004@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </a>
            </Button>
            <Button variant="outline" asChild className="hover:scale-105 transition-transform bg-transparent">
              <a href="https://linkedin.com/in/ashok-bandi-bb7529283" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 mb-4">© 2025 Bandi Ashok. Built with Next.js and Tailwind CSS.</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Ashok11342"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ashok-bandi-bb7529283"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:bandiashok2004@gmail.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => scrollToSection("about")}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  )
}
