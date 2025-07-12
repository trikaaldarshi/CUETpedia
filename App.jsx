import React, { useState, useEffect } from 'react';
import {
  Search, Home, BookOpen, GraduationCap, Users, Info, Menu, X, ArrowRight,
  CheckCircle, Lightbulb, TrendingUp, FileText, BellRing, ClipboardCheck,
  FileQuestion, Star, Eye, Award, MessageSquare, Library, Shield, ScrollText,
  CalendarDays, ClipboardList, FileBadge, LogIn, // Added LogIn icon
  // Social media icons - Corrected imports for Telegram and Whatsapp
  Send, Instagram // Removed X as TwitterX as it's no longer needed for the X icon
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchMessage, setSearchMessage] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonial data
  const testimonials = [
    {
      quote: "CUETpedia was a game-changer for my preparation. The syllabus breakdown and mock tests were incredibly helpful! I secured admission to my dream university.",
      author: "Ananya Sharma",
      university: "University of Delhi",
      image: "https://placehold.co/100x100/A78BFA/ffffff?text=AS" // Placeholder image
    },
    {
      quote: "The detailed notes and previous year questions on CUETpedia made my study routine so much more efficient. Highly recommend it to all aspirants!",
      author: "Rahul Kumar",
      university: "Banaras Hindu University",
      image: "https://placehold.co/100x100/60A5FA/ffffff?text=RK" // Placeholder image
    },
    {
      quote: "Thanks to CUETpedia, I felt confident and well-prepared for the CUET exam. The community support was an added bonus!",
      author: "Priya Singh",
      university: "Jawaharlal Nehru University",
      image: "https://placehold.co/100x100/F472B6/ffffff?text=PS" // Placeholder image
    },
    {
      quote: "The university insights provided by CUETpedia were invaluable in helping me choose the right course and college. A truly comprehensive platform.",
      author: "Vikramjeet Singh",
      university: "Aligarh Muslim University",
      image: "https://placehold.co/100x100/34D399/ffffff?text=VS" // Placeholder image
    }
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialInterval);
  }, [testimonials.length]);


  // Function to handle navigation
  const navigateTo = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
    setShowSearchModal(false); // Close search modal on navigation
  };

  // Handler for login button click
  const handleLogin = () => {
    setSearchMessage('Login functionality is coming soon!');
    setShowSearchModal(true);
  };

  // Custom CSS for the glass effect
  const glassEffectStyle = {
    backdropFilter: 'blur(10px) saturate(180%)',
    WebkitBackdropFilter: 'blur(10px) saturate(180%)', // For Safari compatibility
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slightly transparent white
    border: '1px solid rgba(255, 255, 255, 0.3)',
  };

  // Content for different sections (can be fetched dynamically in a real app)
  const sections = {
    home: {
      title: 'Welcome to CUETpedia!',
      content: (
        <>
          {/* Hero Section */}
          <div className="relative text-center py-16 md:py-24 rounded-3xl mb-12 overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, rgba(100, 150, 250, 0.8), rgba(150, 200, 255, 0.8))',
                 boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                 ...glassEffectStyle
               }}>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-up">
              Your Gateway to Top Universities
            </h2>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Comprehensive resources and expert guidance for the Common University Entrance Test.
            </p>
            <button
              onClick={() => navigateTo('syllabus')}
              // Changed rounded-full to rounded-3xl for less curve
              className="inline-flex items-center px-8 md:px-10 py-3 md:py-3.5 bg-white text-blue-700 font-bold text-lg rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out group"
            >
              Explore Syllabus <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>

          {/* Key Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-6 md:p-8 rounded-3xl shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 cursor-pointer group"
                 style={glassEffectStyle}>
              <BookOpen size={50} className="text-blue-600 mb-4 group-hover:text-blue-800 transition-colors" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">In-depth Syllabus</h3>
              <p className="text-base md:text-lg text-gray-700">Access detailed and up-to-date syllabus for all CUET subjects.</p>
              <button onClick={() => navigateTo('syllabus')} className="mt-4 inline-flex items-center px-5 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105">
                Learn More <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
            <div className="p-6 md:p-8 rounded-3xl shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 cursor-pointer group"
                 style={glassEffectStyle}>
              <GraduationCap size={50} className="text-green-600 mb-4 group-hover:text-green-800 transition-colors" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">University Insights</h3>
              <p className="text-base md:text-lg text-gray-700">Discover participating universities, courses, and admission criteria.</p>
              <button onClick={() => navigateTo('universities')} className="mt-4 inline-flex items-center px-5 py-2 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition-colors duration-300 transform hover:scale-105">
                View Universities <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
            <div className="p-6 md:p-8 rounded-3xl shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 cursor-pointer group"
                 style={glassEffectStyle}>
              <Users size={50} className="text-purple-600 mb-4 group-hover:text-purple-800 transition-colors" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Community Support</h3>
              <p className="text-base md:text-lg text-gray-700">Connect with peers and mentors in our vibrant student community.</p>
              <button onClick={() => navigateTo('contact')} className="mt-4 inline-flex items-center px-5 py-2 bg-purple-500 text-white font-semibold rounded-full shadow-md hover:bg-purple-600 transition-colors duration-300 transform hover:scale-105">
                Join Community <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
            {/* Mock Tests */}
            <div className="p-6 md:p-8 rounded-3xl shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 cursor-pointer group"
                 style={glassEffectStyle}>
              <ClipboardCheck size={50} className="text-orange-600 mb-4 group-hover:text-orange-800 transition-colors" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Mock Tests</h3>
              <p className="text-base md:text-lg text-gray-700">Practice with full-length mock tests to simulate exam conditions and track your progress.</p>
              <button onClick={() => { setSearchMessage('Mock Test functionality is coming soon!'); setShowSearchModal(true); }} className="mt-4 inline-flex items-center px-5 py-2 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105">
                Start Test <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
            {/* Study Notes */}
            <div className="p-6 md:p-8 rounded-3xl shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 cursor-pointer group"
                 style={glassEffectStyle}>
              <FileText size={50} className="text-teal-600 mb-4 group-hover:text-teal-800 transition-colors" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Study Notes</h3>
              <p className="text-base md:text-lg text-gray-700">Access concise and comprehensive study notes for quick revision of all subjects.</p>
              <button onClick={() => { setSearchMessage('Study Notes are being compiled and will be available soon!'); setShowSearchModal(true); }} className="mt-4 inline-flex items-center px-5 py-2 bg-teal-500 text-white font-semibold rounded-full shadow-md hover:bg-teal-600 transition-colors duration-300 transform hover:scale-105">
                View Notes <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
            {/* Announcements */}
            <div className="p-6 md:p-8 rounded-3xl shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 cursor-pointer group"
                 style={glassEffectStyle}>
              <BellRing size={50} className="text-red-600 mb-4 group-hover:text-red-800 transition-colors" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Announcements</h3>
              <p className="text-base md:text-lg text-gray-700">Stay updated with the latest CUET notifications, exam dates, and important news.</p>
              <button onClick={() => { setSearchMessage('Latest Announcements will be posted here regularly!'); setShowSearchModal(true); }} className="mt-4 inline-flex items-center px-5 py-2 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-600 transition-colors duration-300 transform hover:scale-105">
                Read News <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
            {/* Previous Year Questions (PYQ) */}
            <div className="p-6 md:p-8 rounded-3xl shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 cursor-pointer group"
                 style={glassEffectStyle}>
              <FileQuestion size={50} className="text-indigo-600 mb-4 group-hover:text-indigo-800 transition-colors" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Previous Year Questions (PYQ)</h3>
              <p className="text-base md:text-lg text-gray-700">Access a curated collection of past CUET papers to understand exam patterns.</p>
              <button onClick={() => { setSearchMessage('Previous Year Questions will be available soon for practice!'); setShowSearchModal(true); }} className="mt-4 inline-flex items-center px-5 py-2 bg-indigo-500 text-white font-semibold rounded-full shadow-md hover:bg-indigo-600 transition-colors duration-300 transform hover:scale-105">
                Practice PYQ <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
            {/* Exam Dates & Notifications */}
            <div className="p-6 md:p-8 rounded-3xl shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 cursor-pointer group"
                 style={glassEffectStyle}>
              <CalendarDays size={50} className="text-purple-600 mb-4 group-hover:text-purple-800 transition-colors" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Exam Dates & Notifications</h3>
              <p className="text-base md:text-lg text-gray-700">Stay informed about crucial CUET exam dates, registration deadlines, and official announcements.</p>
              <button onClick={() => { setSearchMessage('Exam dates and notifications will be updated regularly!'); setShowSearchModal(true); }} className="mt-4 inline-flex items-center px-5 py-2 bg-purple-500 text-white font-semibold rounded-full shadow-md hover:bg-purple-600 transition-colors duration-300 transform hover:scale-105">
                View Dates <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
            {/* Application Process Guide */}
            <div className="p-6 md:p-8 rounded-3xl shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 cursor-pointer group"
                 style={glassEffectStyle}>
              <ClipboardList size={50} className="text-pink-600 mb-4 group-hover:text-pink-800 transition-colors" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Application Process Guide</h3>
              <p className="text-base md:text-lg text-gray-700">A step-by-step guide to help you navigate the CUET application process seamlessly.</p>
              <button onClick={() => { setSearchMessage('Detailed application guide coming soon!'); setShowSearchModal(true); }} className="mt-4 inline-flex items-center px-5 py-2 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 transition-colors duration-300 transform hover:scale-105">
                Get Started <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
            {/* Admit Card & Result Info */}
            <div className="p-6 md:p-8 rounded-3xl shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 cursor-pointer group"
                 style={glassEffectStyle}>
              <FileBadge size={50} className="text-yellow-600 mb-4 group-hover:text-yellow-800 transition-colors" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Admit Card & Result Info</h3>
              <p className="text-base md:text-lg text-gray-700">Find all essential information regarding CUET admit cards and result declarations.</p>
              <button onClick={() => { setSearchMessage('Admit card and result information will be updated here!'); setShowSearchModal(true); }} className="mt-4 inline-flex items-center px-5 py-2 bg-yellow-500 text-white font-semibold rounded-full shadow-md hover:bg-yellow-600 transition-colors duration-300 transform hover:scale-105">
                Check Status <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
          </div>

          {/* Why Choose CUETpedia Section */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl mb-12" style={glassEffectStyle}>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-8 md:mb-10">Why Choose CUETpedia?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <div className="flex items-start">
                <CheckCircle size={32} className="text-teal-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Curated Content</h4>
                  <p className="text-base md:text-lg text-gray-700">Our experts meticulously curate study materials, ensuring accuracy and relevance to the CUET exam pattern.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Lightbulb size={32} className="text-yellow-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Strategic Preparation</h4>
                  <p className="text-base md:text-lg text-gray-700">Gain access to proven strategies, tips, and tricks to maximize your scores and ace the examination.</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp size={32} className="text-red-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Success-Oriented Approach</h4>
                  <p className="text-base md:text-lg text-gray-700">We are committed to your success, providing continuous support and updates to help you achieve your university dreams.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Info size={32} className="text-indigo-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Always Updated</h4>
                  <p className="text-base md:text-lg text-gray-700">Stay informed with the latest notifications, exam dates, and syllabus changes directly from official sources.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Vision Section */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl mb-12" style={glassEffectStyle}>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-8 md:mb-10">Our Vision</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex-shrink-0">
                <Eye size={80} className="text-blue-600 mx-auto md:mx-0" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  At CUETpedia, our vision is to empower every aspiring student with the knowledge, tools, and confidence needed to excel in the Common University Entrance Test. We aim to democratize access to high-quality educational resources, making university dreams a tangible reality for all.
                </p>
                <p className="text-base md:text-lg text-gray-700">
                  We strive to be the most trusted and comprehensive platform for CUET preparation, fostering a community where students can learn, grow, and achieve their full potential.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl mb-12 relative overflow-hidden" style={glassEffectStyle}>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-8 md:mb-10">What Our Students Say</h3>
            <div className="relative w-full max-w-2xl mx-auto h-48 flex items-center justify-center">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute w-full px-4 py-6 rounded-2xl transition-opacity duration-1000 ease-in-out ${
                    index === currentTestimonial ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  style={{ ...glassEffectStyle, backgroundColor: 'rgba(243, 244, 246, 0.7)' }}
                >
                  <p className="text-base md:text-lg text-gray-700 italic mb-4 text-center">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-center mt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-3 border-2 border-blue-400"
                      onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/100x100/A78BFA/ffffff?text=${testimonial.author.split(' ').map(n => n[0]).join('')}`; }}
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.university}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                ></button>
              ))}
            </div>
          </div>

          {/* Expert Guidance & Mentorship */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl mb-12" style={glassEffectStyle}>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-8 md:mb-10">Expert Guidance & Mentorship</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex-shrink-0 order-2 md:order-1">
                <MessageSquare size={80} className="text-purple-600 mx-auto md:mx-0" />
              </div>
              <div className="text-center md:text-left order-1 md:order-2">
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  Connect with experienced educators and mentors who can provide personalized guidance, clear your doubts, and offer strategic advice for your CUET journey.
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  Our experts are available to help you navigate through challenging topics and optimize your study plan.
                </p>
                <button onClick={() => { setSearchMessage('Connect with our expert mentors soon!'); setShowSearchModal(true); }} className="inline-flex items-center px-5 py-2 bg-purple-500 text-white font-semibold rounded-full shadow-md hover:bg-purple-600 transition-colors duration-300 transform hover:scale-105">
                  Get Mentorship <ArrowRight className="ml-2" size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Comprehensive Resource Library */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl" style={glassEffectStyle}>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-8 md:mb-10">Comprehensive Resource Library</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex-shrink-0">
                <Library size={80} className="text-cyan-600 mx-auto md:mx-0" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  Beyond syllabus and notes, access a rich collection of supplementary materials, including reference books, video lectures, and curated articles to deepen your understanding.
                </p>
                <p className="text-base md:text-lg text-gray-700">
                  Everything you need for holistic preparation, all in one place.
                </p>
                <button onClick={() => { setSearchMessage('Our extensive resource library is being populated!'); setShowSearchModal(true); }} className="inline-flex items-center px-5 py-2 bg-cyan-500 text-white font-semibold rounded-full shadow-md hover:bg-cyan-600 transition-colors duration-300 transform hover:scale-105">
                  Browse Resources <ArrowRight className="ml-2" size={18} />
                </button>
              </div>
            </div>
          </div>
        </>
      ),
    },
    syllabus: {
      title: 'CUET Syllabus: In-depth Guide',
      content: (
        <>
          <p className="text-base md:text-lg mb-4 text-gray-700">The Common University Entrance Test (CUET UG) 2024 is designed to provide a single-window opportunity for students to seek admission to various undergraduate programs across participating universities. The exam covers 61 subjects, and candidates can choose up to 10 subjects based on their desired course and university requirements.</p>

          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">Exam Structure & Marking Scheme</h3>
          <ul className="list-disc list-inside mb-6 pl-4 text-gray-700 text-base md:text-lg">
            <li><strong>Sections:</strong> The CUET (UG) exam is broadly divided into three sections:
              <ul className="list-circle list-inside ml-4 mt-2">
                <li>Section IA & IB: Languages (40 questions to be attempted out of 50)</li>
                <li>Section II: Domain-Specific Subjects (35/40 questions to be attempted out of 45/50)</li>
                <li>Section III: General Test (50 questions to be attempted out of 60)</li>
              </ul>
            </li>
            <li><strong>Marking:</strong> Each correct answer fetches +5 marks, while each incorrect answer results in a -1 mark deduction. Unattempted questions receive 0 marks.</li>
            <li><strong>Mode:</strong> The exam is conducted in Computer Based Test (CBT) mode.</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">General Test Syllabus</h3>
          <p className="text-base md:text-lg mb-4 text-gray-700">This section assesses general aptitude and awareness. Key areas include:</p>
          <ul className="list-disc list-inside mb-6 pl-4 text-gray-700 text-base md:text-lg">
            <li><strong>General Knowledge & Current Affairs:</strong> National and international current events, history, geography, Indian Polity, economic scene, general science, scientific research.</li>
            <li><strong>General Mental Ability & Numerical Ability:</strong> Analogies, similarities and differences, space visualization, problem solving, analysis, judgment, decision making, visual memory, discriminating observation, relationship concepts, arithmetical reasoning, verbal and figure classification, arithmetical number series, non-verbal series.</li>
            <li><strong>Reasoning:</strong> Simple application of basic mathematical concepts (arithmetic/algebra, geometry/mensuration/statistics).</li>
            <li><strong>Logical & Analytical Reasoning:</strong> Deductive and inductive reasoning, statement and assumptions, statement and arguments, cause and effect, assertions and reasons.</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-4">Domain-Specific Subjects</h3>
          <p className="mb-6 text-gray-700 text-base md:text-lg">The syllabus for each domain-specific subject is strictly based on the **NCERT Class XII curriculum**. This ensures a standardized and fair assessment. Some of the popular domain subjects include:</p>
          <ul className="list-disc list-inside pl-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 text-base md:text-lg">
            <li>Accountancy/Book Keeping</li>
            <li>Biology/Biological Studies/Biotechnology/Biochemistry</li>
            <li>Business Studies</li>
            <li>Chemistry</li>
            <li>Computer Science/Informatics Practices</li>
            <li>Economics/Business Economics</li>
            <li>Engineering Graphics</li>
            <li>Entrepreneurship</li>
            <li>Geography/Physical Geography/Geology</li>
            <li>History</li>
            <li>Home Science</li>
            <li>Legal Studies</li>
            <li>Mathematics/Applied Mathematics</li>
            <li>Physics</li>
            <li>Political Science</li>
            <li>Psychology</li>
            <li>Sociology</li>
            <li>Teaching Aptitude</li>
            <li>Agriculture</li>
            <li>Mass Media/Mass Communication</li>
            <li>Anthropology</li>
            <li>Fine Arts/Visual Arts (Sculpture/Painting)/Commercial Arts</li>
            <li>General AWARENESS</li>
            <li>Knowledge Tradition-Practices India</li>
            <li>Physical Education/NCC/Yoga</li>
            <li>Environmental Studies</li>
            <li>Performing Arts (Dance/Drama/Music)</li>
            <li>Sanskrit</li>
            <li>National Cadet Corps (NCC)</li>
            <li>Yoga</li>
          </ul>
          <p className="mt-8 text-sm md:text-base text-gray-600">For the most accurate and detailed subject-wise syllabus, always refer to the official CUET (NTA) website. Regularly attempting mock tests based on the latest syllabus is highly recommended for effective preparation.</p>
        </>
      ),
    },
    universities: {
      title: 'Participating Universities: Your Path to Higher Education',
      content: (
        <>
          <p className="text-base md:text-lg mb-4 text-gray-700">The CUET opens doors to a vast network of esteemed educational institutions across India. It is accepted by a wide range of Central, State, Deemed, and Private Universities, offering diverse undergraduate programs.</p>

          <h3 className="text-xl md:text-2xl font-bold text-purple-700 mb-4">Prominent Central Universities:</h3>
          <p className="text-base md:text-lg mb-4 text-gray-700">These are centrally funded universities known for their academic excellence and wide array of courses:</p>
          <ul className="list-disc list-inside mb-6 pl-4 text-gray-700 text-base md:text-lg">
            <li><strong>University of Delhi (DU):</strong> Offers a multitude of courses in Arts, Science, Commerce, and professional fields across its numerous colleges.</li>
            <li><strong>Banaras Hindu University (BHU), Varanasi:</strong> A prestigious institution with a rich history, offering diverse programs including Arts, Science, Commerce, Agriculture, and Law.</li>
            <li><strong>Jawaharlal Nehru University (JNU), New Delhi:</strong> Renowned for its focus on social sciences, international studies, and languages.</li>
            <li><strong>Aligarh Muslim University (AMU), Aligarh:</strong> A historic institution offering courses in various disciplines like Engineering, Medicine, Arts, Science, and Commerce.</li>
            <li><strong>Jamia Millia Islamia (JMI), New Delhi:</strong> A central university offering courses in Engineering, Architecture, Mass Communication, Arts, and Sciences.</li>
            <li><strong>University of Allahabad, Prayagraj:</strong> One of the oldest universities in India, offering traditional and modern courses.</li>
            <li><strong>Visva-Bharati University, Santiniketan:</strong> Founded by Rabindranath Tagore, known for its unique approach to education and arts.</li>
            <li><strong>Pondicherry University, Puducherry:</strong> A central university offering a wide range of postgraduate and undergraduate programs.</li>
            <li><strong>Central University of Haryana, Mahendragarh</strong></li>
            <li><strong>Mahatma Gandhi Central University, Motihari</strong></li>
            <li><strong>Central University of Rajasthan, Ajmer</strong></li>
          </ul>

          <h3 className="text-xl md:text-2xl font-bold text-orange-700 mb-4">Leading State, Private, and Deemed Universities:</h3>
          <p className="mb-6 text-gray-700 text-base md:text-lg">Beyond the central universities, many other reputable institutions across India are now accepting CUET scores. These include:</p>
          <ul className="list-disc list-inside pl-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 text-base md:text-lg">
            <li>Dr. B.R. Ambedkar University Delhi</li>
            <li>Guru Gobind Singh Indraprastha University (GGSIPU), Delhi</li>
            <li>Jamia Hamdard, New Delhi (Deemed University)</li>
            <li>Lovely Professional University (LPU), Punjab (Private University)</li>
            <li>Galgotias University, Uttar Pradesh (Private University)</li>
            <li>Amity University, Noida (Private University)</li>
            <li>Sharda University, Greater Noida (Private University)</li>
            <li>Manav Rachna International Institute of Research and Studies, Faridabad (Deemed University)</li>
            <li>Apex University, Jaipur (Private University)</li>
            <li>Tezpur University, Assam (Central University)</li>
            <li>Nagaland University, Nagaland (Central University)</li>
            <li>Tripura University, Tripura (Central University)</li>
            <li>And many more...</li>
          </ul>
          <p className="text-base md:text-lg mt-6 text-gray-700"><strong>Important Note:</strong> Each university has its own specific eligibility criteria, admission process, and course offerings. It is highly recommended to visit the official websites of the universities you are interested in and the official CUET (NTA) portal for the most up-to-date and accurate information regarding admissions and programs.</p>
          <p className="text-sm md:text-base text-gray-600 mt-4">This comprehensive list helps you explore various options and plan your applications effectively.</p>
        </>
      ),
    },
    contact: {
      title: 'Contact Us',
      content: (
        <>
          <p className="text-base md:text-lg mb-6 text-gray-700">Have questions or need assistance? Feel free to reach out to us!</p>
          <div className="p-6 md:p-8 rounded-3xl shadow-xl" style={glassEffectStyle}>
            <p className="mb-4 text-gray-800 text-base md:text-lg"><strong>Email:</strong> support@cuetpedia.com</p>
            <p className="mb-4 text-gray-800 text-base md:text-lg"><strong>Phone:</strong> +91-1234567890</p>
            <p className="mb-6 text-gray-800 text-base md:text-lg"><strong>Address:</strong> CUETpedia Headquarters, Knowledge City, New Delhi, India</p>
            <p className="mt-4 text-gray-700 text-base md:text-lg">You can also fill out the form below and we will get back to you shortly.</p>
            <form className="mt-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-gray-800 mb-1">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white bg-opacity-70 text-gray-800" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-800 mb-1">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white bg-opacity-70 text-gray-800" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-base font-medium text-gray-800 mb-1">Message</label>
                <textarea id="message" name="message" rows="5" className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white bg-opacity-70 text-gray-800" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="w-full md:w-auto px-8 md:px-10 py-3 md:py-3.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105">Send Message</button>
            </form>
          </div>
        </>
      ),
    },
    about: {
      title: 'About CUETpedia',
      content: (
        <>
          <p className="text-base md:text-lg mb-4 text-gray-700">
            CUETpedia was founded with a singular vision: to democratize access to high-quality CUET preparation resources for every aspiring student across India. We understand the challenges and anxieties that come with competitive examinations, and our platform is meticulously designed to alleviate these burdens and empower students to achieve their academic dreams.
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3 mt-6">Our Story</h3>
          <p className="mb-4 text-gray-700">
            Born from a collective passion for education and a recognition of the evolving landscape of university admissions, CUETpedia began as a small initiative by a group of experienced educators, subject matter experts, and technology innovators. We noticed the fragmentation of resources and the lack of a centralized, reliable platform for CUET aspirants. Our journey started with a commitment to bridge this gap, providing comprehensive, accurate, and accessible study materials.
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3 mt-6">Our Mission</h3>
          <p className="mb-4 text-gray-700">
            Our mission is to simplify the CUET preparation process by offering:
          </p>
          <ul className="list-disc list-inside pl-4 mb-4 text-gray-700">
            <li><strong>Comprehensive Content:</strong> Covering every aspect of the CUET syllabus with clarity and depth.</li>
            <li><strong>Innovative Tools:</strong> Providing mock tests, previous year questions, and progress trackers to enhance learning efficiency.</li>
            <li><strong>Expert Guidance:</strong> Connecting students with experienced mentors for personalized support and strategic advice.</li>
            <li><strong>Vibrant Community:</strong> Fostering a supportive environment where students can interact, share knowledge, and motivate each other.</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3 mt-6">Our Values</h3>
          <p className="mb-4 text-gray-700">
            We are driven by a core set of values that define our approach:
          </p>
          <ul className="list-disc list-inside pl-4 mb-4 text-gray-700">
            <li><strong>Excellence:</strong> Committed to providing the highest quality of educational content and user experience.</li>
            <li><strong>Accessibility:</strong> Ensuring our resources are available to students from diverse backgrounds, regardless of geographical or economic barriers.</li>
            <li><strong>Integrity:</strong> Upholding honesty and transparency in all our interactions and content.</li>
            <li><strong>Innovation:</strong> Continuously evolving our platform with the latest educational technologies and methodologies.</li>
            <li><strong>Student-Centricity:</strong> Placing the needs and success of our students at the heart of everything we do.</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3 mt-6">Our Commitment to Your Success</h3>
          <p className="mb-4 text-gray-700">
            We believe that every student possesses unique potential, and with the right resources and support, they can achieve remarkable success. CUETpedia is more than just a study platform; it's a partner in your academic journey, dedicated to helping you navigate the complexities of CUET and secure admission to your desired university. We are constantly updating our content and features to align with the latest exam patterns and educational trends, ensuring you always have the most relevant and effective tools at your disposal.
          </p>
          <p className="text-sm md:text-base text-gray-600 mt-4">
            Join the growing community of successful CUET aspirants and embark on your journey to higher education with confidence, powered by CUETpedia.
          </p>
        </>
      ),
    },
    privacyPolicy: {
      title: 'Privacy Policy',
      content: (
        <>
          <p className="text-base md:text-lg mb-4 text-gray-700">
            This Privacy Policy describes how CUETpedia collects, uses, and discloses your personal information when you visit or make a purchase from our website.
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3 mt-6">1. Information We Collect</h3>
          <p className="mb-4 text-gray-700">
            We collect personal information you provide to us directly, such as your name, email address, and contact number when you register for an account, subscribe to our newsletter, or fill out a contact form. We also collect certain information automatically when you visit our site, including your IP address, browser type, and browsing behavior.
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3 mt-6">2. How We Use Your Information</h3>
          <p className="mb-4 text-gray-700">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside pl-4 mb-4 text-gray-700">
            <li>Provide and maintain our services.</li>
            <li>Improve, personalize, and expand our services.</li>
            <li>Understand and analyze how you use our services.</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
            <li>Process your transactions and manage your orders.</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3 mt-6">3. Sharing Your Information</h3>
          <p className="mb-4 text-gray-700">
            We do not share your personal information with third parties except as necessary to provide our services, comply with legal obligations, or with your explicit consent.
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3 mt-6">4. Your Rights</h3>
          <p className="mb-4 text-gray-700">
            You have the right to access, correct, or delete your personal information. Please contact us to exercise these rights.
          </p>
          <p className="mt-8 text-sm md:text-base text-gray-600">
            This Privacy Policy is effective as of July 9, 2025, and will be updated periodically.
          </p>
        </>
      ),
    },
    termsAndConditions: {
      title: 'Terms and Conditions',
      content: (
        <>
          <p className="text-base md:text-lg mb-4 text-gray-700">
            Welcome to CUETpedia. These terms and conditions outline the rules and regulations for the use of CUETpedia's Website.
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3 mt-6">1. Acceptance of Terms</h3>
          <p className="mb-4 text-gray-700">
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use CUETpedia if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3 mt-6">2. Intellectual Property Rights</h3>
          <p className="mb-4 text-gray-700">
            Unless otherwise stated, CUETpedia and/or its licensors own the intellectual property rights for all material on CUETpedia. All intellectual property rights are reserved. You may access this from CUETpedia for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3 mt-6">3. Restrictions</h3>
          <p className="mb-4 text-gray-700">
            You are specifically restricted from all of the following:
          </p>
          <ul className="list-disc list-inside pl-4 mb-4 text-gray-700">
            <li>Publishing any website material in any other media.</li>
            <li>Selling, sublicensing and/or otherwise commercializing any website material.</li>
            <li>Publicly performing and/or showing any website material.</li>
            <li>Using this website in any way that is or may be damaging to this website.</li>
            <li>Using this website in any way that impacts user access to this website.</li>
            <li>Using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity.</li>
            <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this website.</li>
            <li>Using this website to engage in any advertising or marketing.</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3 mt-6">4. Disclaimer</h3>
          <p className="mb-4 text-gray-700">
            The information on this website is provided "as is," with all faults, and CUETpedia expresses no representations or warranties, of any kind related to this website or the materials contained on this website.
          </p>
          <p className="mt-8 text-sm md:text-base text-gray-600">
            These Terms and Conditions are effective as of July 9, 2025, and will be updated periodically.
          </p>
        </>
      ),
    },
  };

  const currentSection = sections[activeSection] || sections.home;

  // Custom Search Modal Component
  const SearchModal = ({ message, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full text-center" style={glassEffectStyle}>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Notification</h3> {/* Changed title to be more generic */}
          <p className="text-lg text-gray-700 mb-6">{message}</p>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md"
          >
            Got It!
          </button>
        </div>
      </div>
    );
  };

  // Simple search functionality (client-side for this example)
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    setSearchMessage(`Search functionality is under development. You searched for: "${searchTerm}"`);
    setShowSearchModal(true);
    setSearchTerm(''); // Clear search term after attempting search
  };

  return (
    <div className="min-h-screen flex flex-col font-inter bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
      {/* Google Fonts link for Delius Swash Caps and Montserrat */}
      <link href="https://fonts.googleapis.com/css2?family=Delius+Swash+Caps&family=Montserrat:wght@700&display=swap" rel="stylesheet" />

      {/* Background Circles for Liquid Effect */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Tailwind CSS Custom Animations (for blob effect) */}
      <style>
        {`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInScale 0.8s ease-out forwards;
          opacity: 0; /* Ensures it starts invisible */
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .font-delius-swash-caps {
            font-family: 'Delius Swash Caps', cursive;
        }
        .font-montserrat {
            font-family: 'Montserrat', sans-serif;
        }
        `}
      </style>

      {/* Header */}
      <header className="relative z-20 p-4 md:p-6" style={glassEffectStyle}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <GraduationCap size={36} className="mr-3 text-yellow-300 drop-shadow-lg" />
            {/* Applied Montserrat font to the main title */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-md font-montserrat">CUETpedia</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center"> {/* Reduced space-x further */}
            <button
              onClick={() => navigateTo('home')}
              className={`px-3 py-1 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out ${activeSection === 'home' ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-white hover:bg-opacity-30'}`}
              style={activeSection !== 'home' ? glassEffectStyle : {}}
            >
              <Home className="inline-block mr-1" size={16} /> Home {/* Reduced icon size further */}
            </button>
            <button
              onClick={() => navigateTo('syllabus')}
              className={`px-3 py-1 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out ${activeSection === 'syllabus' ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-white hover:bg-opacity-30'}`}
              style={activeSection !== 'syllabus' ? glassEffectStyle : {}}
            >
              <BookOpen className="inline-block mr-1" size={16} /> Syllabus
            </button>
            <button
              onClick={() => navigateTo('universities')}
              className={`px-3 py-1 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out ${activeSection === 'universities' ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-white hover:bg-opacity-30'}`}
              style={activeSection !== 'universities' ? glassEffectStyle : {}}
            >
              <GraduationCap className="inline-block mr-1" size={16} /> Universities
            </button>
            <button
              onClick={() => navigateTo('about')}
              className={`px-3 py-1 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out ${activeSection === 'about' ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-white hover:bg-opacity-30'}`}
              style={activeSection !== 'about' ? glassEffectStyle : {}}
            >
              <Info className="inline-block mr-1" size={16} /> About
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className={`px-3 py-1 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out ${activeSection === 'contact' ? 'bg-white text-blue-700 shadow-md' : 'text-white hover:bg-white hover:bg-opacity-30'}`}
              style={activeSection !== 'contact' ? glassEffectStyle : {}}
            >
              <Users className="inline-block mr-1" size={16} /> Contact
            </button>
            {/* Login Button for Desktop */}
            <button
              onClick={handleLogin}
              className="px-3 py-1 rounded-full font-semibold text-sm text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300 shadow-md flex items-center"
              style={glassEffectStyle}
            >
              <LogIn className="inline-block mr-1" size={16} /> Login
            </button>
          </nav>

          {/* Mobile Menu Button - Smaller size */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none p-1.5 rounded-md hover:bg-white hover:bg-opacity-20 transition-colors duration-200">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />} {/* Adjusted size */}
            </button>
          </div>
        </div>

        {/* Mobile Navigation (Conditional Render) */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full rounded-b-3xl shadow-inner p-4 z-10" style={glassEffectStyle}>
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => navigateTo('home')}
                className={`block w-full text-left px-5 py-3 rounded-xl font-semibold text-white transition-colors duration-300 ${activeSection === 'home' ? 'bg-white bg-opacity-40' : 'hover:bg-white hover:bg-opacity-20'}`}
              >
                <Home className="inline-block mr-3" size={20} /> Home
              </button>
              <button
                onClick={() => navigateTo('syllabus')}
                className={`block w-full text-left px-5 py-3 rounded-xl font-semibold text-white transition-colors duration-300 ${activeSection === 'syllabus' ? 'bg-white bg-opacity-40' : 'hover:bg-white hover:bg-opacity-20'}`}
              >
                <BookOpen className="inline-block mr-3" size={20} /> Syllabus
              </button>
              <button
                onClick={() => navigateTo('universities')}
                className={`block w-full text-left px-5 py-3 rounded-xl font-semibold text-white transition-colors duration-300 ${activeSection === 'universities' ? 'bg-white bg-opacity-40' : 'hover:bg-white hover:bg-opacity-20'}`}
              >
                <GraduationCap className="inline-block mr-3" size={20} /> Universities
              </button>
              <button
                onClick={() => navigateTo('about')}
                className={`block w-full text-left px-5 py-3 rounded-xl font-semibold text-white transition-colors duration-300 ${activeSection === 'about' ? 'bg-white bg-opacity-40' : 'hover:bg-white hover:bg-opacity-20'}`}
              >
                <Info className="inline-block mr-3" size={20} /> About
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className={`block w-full text-left px-5 py-3 rounded-xl font-semibold text-white transition-colors duration-300 ${activeSection === 'contact' ? 'bg-white bg-opacity-40' : 'hover:bg-white hover:bg-opacity-20'}`}
              >
                <Users className="inline-block mr-3" size={20} /> Contact
              </button>
              {/* Login Button for Mobile */}
              <button
                onClick={handleLogin}
                className="block w-full text-left px-5 py-3 rounded-xl font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300 shadow-md flex items-center"
              >
                <LogIn className="inline-block mr-3" size={20} /> Login
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-0 flex-grow container mx-auto p-4 md:p-8">
        <div className="rounded-3xl shadow-2xl p-6 md:p-10" style={glassEffectStyle}>
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-10 flex items-center border border-gray-300 rounded-full overflow-hidden shadow-md focus-within:ring-4 focus-within:ring-blue-400 transition-all duration-300 bg-white bg-opacity-50">
            <input
              type="text"
              placeholder="Search for syllabus, universities, topics..."
              className="flex-grow p-4 md:p-5 text-gray-800 focus:outline-none rounded-l-full bg-transparent text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="bg-blue-600 text-white p-4 md:p-5 hover:bg-blue-700 transition-colors duration-300 rounded-r-full flex items-center justify-center transform hover:scale-105">
              <Search size={28} />
              <span className="sr-only">Search</span>
            </button>
          </form>

          {/* Section Content */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 border-b-4 border-blue-500 pb-4">
            {currentSection.title}
          </h2>
          <div className="text-gray-700 leading-relaxed text-lg md:text-xl">
            {currentSection.content}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-4 md:p-6 mt-8" style={glassEffectStyle}>
        <div className="container mx-auto text-center text-sm md:text-base text-gray-800">
          <p>&copy; {new Date().getFullYear()} CUETpedia. All rights reserved.</p>
          {/* Footer Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <button onClick={() => navigateTo('home')} className="text-gray-800 hover:text-blue-700 transition-colors duration-300 text-sm md:text-base">Home</button>
            <button onClick={() => navigateTo('about')} className="text-gray-800 hover:text-blue-700 transition-colors duration-300 text-sm md:text-base">About Us</button>
            <button onClick={() => navigateTo('privacyPolicy')} className="text-gray-800 hover:text-blue-700 transition-colors duration-300 text-sm md:text-base">Privacy Policy</button>
            <button onClick={() => navigateTo('termsAndConditions')} className="text-gray-800 hover:text-blue-700 transition-colors duration-300 text-sm md:text-base">Terms and Conditions</button>
            <button onClick={() => navigateTo('contact')} className="text-gray-800 hover:text-blue-700 transition-colors duration-300 text-sm md:text-base">Support</button>
          </div>
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mt-6">
            <a href="https://t.me/cuetpedia_official" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 transition-colors duration-300" title="Join us on Telegram">
              <Send size={28} /> {/* Used Send icon for Telegram */}
            </a>
            <a href="https://instagram.com/cuetpedia_official" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-pink-600 transition-colors duration-300" title="Follow us on Instagram">
              <Instagram size={28} />
            </a>
            {/* WhatsApp icon removed */}
            <a href="https://x.com/cuetpedia_official" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black transition-colors duration-300" title="Follow us on X (Twitter)">
              {/* Unicode X icon */}
              <span style={{ fontSize: '28px', lineHeight: '1' }}>𝕏</span>
            </a>
          </div>
          <p className="mt-2">
            Designed with <span className="text-red-500">&hearts;</span> by{' '}
            <a
              href="https://www.sachinshukla.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-delius-swash-caps text-blue-700 hover:text-blue-900 transition-colors duration-300"
            >
              Sachin Shukla
            </a>
          </p>
        </div>
      </footer>

      {/* Search Modal */}
      {showSearchModal && (
        <SearchModal message={searchMessage} onClose={() => setShowSearchModal(false)} />
      )}
    </div>
  );
};

export default App;
