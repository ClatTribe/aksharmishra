"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, Target, Briefcase, Heart, Users, Award, BookOpen, TrendingUp, Globe, Medal, Video } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [counts, setCounts] = useState({ activities: 0, certificates: 0, donations: 0, empowerment: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert('Message sent! (Demo only)');
    setFormData({ name: '', email: '', message: '' });
  };

  // Counter animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = {
      activities: 100,
      certificates: 10,
      donations: 200,
      empowerment: 1000
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        activities: Math.floor(targets.activities * progress),
        certificates: Math.floor(targets.certificates * progress),
        donations: Math.floor(targets.donations * progress),
        empowerment: Math.floor(targets.empowerment * progress)
      });

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, stepDuration);
  };

  const skills = [
    { name: 'Leadership', percentage: 90 },
    { name: 'Team Management', percentage: 85 },
    { name: 'Public Speaking', percentage: 80 },
    { name: 'Research', percentage: 75 },
    { name: 'Data Analysis', percentage: 70 },
    { name: 'Food Entrepreneurship', percentage: 85 },
    { name: 'Shooting (Rifle)', percentage: 95 }
  ];

  const academicScores = [
    { subject: 'Mathematics', score: '95%' },
    { subject: 'Science', score: '92%' },
    { subject: 'English', score: '90%' },
    { subject: 'Social Studies', score: '88%' },
    { subject: 'Hindi', score: '85%' }
  ];

  const experiences = [
    {
      title: 'Campaign Volunteer',
      organization: 'Samajwadi Party',
      period: 'Jan 2022 - Mar 2022',
      description: 'Contributed to the parliament election campaign, managing teams and communicating with stakeholders.'
    },
    {
      title: 'Fundraising and Donation Campaigns',
      organization: 'YATAN NGO',
      period: 'Jun 2021 - Dec 2021',
      description: 'Organized fundraising events and donation campaigns for underprivileged children.'
    },
    {
      title: 'Yoga and Meditation Instructor',
      organization: 'Prana Wellness Institute',
      period: 'Jan 2020 - May 2021',
      description: 'Taught yoga and meditation to children and youngsters.'
    },
    {
      title: 'Founder',
      organization: 'Food Business',
      period: 'Mar 2019 - Dec 2019',
      description: 'Founded and managed a food business, offering delicious cuisine.'
    },
    {
      title: 'National-Level Rifle Shooter',
      organization: 'State Team',
      period: '2017 - 2019',
      description: 'Represented the state in national shooting competitions.',
      achievements: 'Silver medal in National Championship, Ranked 5th nationally in junior category'
    }
  ];

  const communityWork = [
    {
      title: 'YATAN NGO',
      activities: ['Fundraising', 'Teaching children', 'Donation drives']
    },
    {
      title: 'Gomti Action Parivar',
      activities: ['River cleaning', 'Environmental campaigns']
    },
    {
      title: 'Prana Wellness Institute',
      activities: ['Teaching yoga and meditation benefits to youth']
    }
  ];

  const blogPosts = [
    {
      title: 'What Rifle Shooting Taught Me About Focus and Discipline',
      excerpt: 'Lessons from competitive sports that shaped my approach to life and goals.'
    },
    {
      title: 'Entrepreneurship as a Teen: Challenges and Rewards',
      excerpt: 'My journey of starting and running a food business at a young age.'
    },
    {
      title: 'The Transformative Power of Yoga and Meditation',
      excerpt: 'How mindfulness practices have influenced my personal and academic growth.'
    }
  ];

  const galleryImages = [
    "https://res.cloudinary.com/daetdadtt/image/upload/v1762800970/d365d13c-02d4-4cc8-a3a1-582537903509.png",
    "https://res.cloudinary.com/daetdadtt/image/upload/v1762927396/WhatsApp_Image_2025-11-10_at_16.17.21_1_rwkosc.jpg",
    "https://res.cloudinary.com/daetdadtt/image/upload/v1762927396/WhatsApp_Image_2025-11-10_at_16.17.26_2_nchdqh.jpg",
    "https://res.cloudinary.com/daetdadtt/image/upload/v1762927397/WhatsApp_Image_2025-11-10_at_16.17.22_2_x2o05r.jpg",
    "https://res.cloudinary.com/daetdadtt/image/upload/v1762927399/WhatsApp_Image_2025-11-10_at_16.17.38_2_wych4w.jpg",
    "https://res.cloudinary.com/daetdadtt/image/upload/v1762927399/WhatsApp_Image_2025-11-10_at_16.17.41_1_jdzwv6.jpg",
    "https://res.cloudinary.com/daetdadtt/image/upload/v1762927397/WhatsApp_Image_2025-11-10_at_16.17.25_dpkv15.jpg",
    "https://res.cloudinary.com/daetdadtt/image/upload/v1762927398/WhatsApp_Image_2025-11-10_at_16.17.30_1_uxgwlr.jpg",
    "https://res.cloudinary.com/daetdadtt/image/upload/v1762927398/WhatsApp_Image_2025-11-10_at_16.17.28_2_lzo77j.jpg",
    "https://res.cloudinary.com/daetdadtt/image/upload/v1762927398/WhatsApp_Image_2025-11-10_at_16.17.32_cuwloa.jpg",
    "https://res.cloudinary.com/daetdadtt/image/upload/v1762927750/WhatsApp_Image_2025-11-10_at_16.17.30_2_ltcuqr.jpg",
    "https://res.cloudinary.com/daetdadtt/image/upload/v1762927400/WhatsApp_Image_2025-11-10_at_16.17.43_1_em6sxb.jpg",
    "https://res.cloudinary.com/daetdadtt/image/upload/v1762927398/WhatsApp_Image_2025-11-10_at_16.17.34_lmgwmi.jpg",
    "https://res.cloudinary.com/daetdadtt/image/upload/v1762927397/WhatsApp_Image_2025-11-10_at_16.17.27_1_l5acyx.jpg",
    "https://res.cloudinary.com/daetdadtt/image/upload/v1762927399/WhatsApp_Image_2025-11-10_at_16.17.40_ncb4on.jpg",
    "https://res.cloudinary.com/daetdadtt/image/upload/v1762927399/WhatsApp_Image_2025-11-10_at_16.17.43_kifd7h.jpg",
    "https://res.cloudinary.com/daetdadtt/image/upload/v1762927399/WhatsApp_Image_2025-11-10_at_16.17.42_2_xxil78.jpg",
    "https://res.cloudinary.com/daetdadtt/image/upload/v1762927399/WhatsApp_Image_2025-11-10_at_16.17.44_2_wowddl.jpg",
    "https://res.cloudinary.com/daetdadtt/image/upload/v1762927398/WhatsApp_Image_2025-11-10_at_16.17.31_r0rx5e.jpg",
    "https://res.cloudinary.com/daetdadtt/image/upload/v1762927399/WhatsApp_Image_2025-11-10_at_16.17.43_kifd7h.jpg",
    // "https://res.cloudinary.com/daetdadtt/image/upload/v1762800970/d365d13c-02d4-4cc8-a3a1-582537903509.png",
    // "https://res.cloudinary.com/daetdadtt/image/upload/v1762800970/d365d13c-02d4-4cc8-a3a1-582537903509.png",
    // "https://res.cloudinary.com/daetdadtt/image/upload/v1762800970/d365d13c-02d4-4cc8-a3a1-582537903509.png",
    // "https://res.cloudinary.com/daetdadtt/image/upload/v1762800970/d365d13c-02d4-4cc8-a3a1-582537903509.png",
    // "https://res.cloudinary.com/daetdadtt/image/upload/v1762800970/d365d13c-02d4-4cc8-a3a1-582537903509.png"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50 ">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">
              <img src="/main_logo.svg" alt="Logo" className="h-10" />
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-[#1a1f2e] hover:text-[#00A99D] transition">Home</a>
              <a href="#about" className="text-[#1a1f2e] hover:text-[#00A99D] transition">About</a>
              <a href="#skills" className="text-[#1a1f2e] hover:text-[#00A99D] transition">Skills</a>
              <a href="#experience" className="text-[#1a1f2e] hover:text-[#00A99D] transition">Experience</a>
              <a href="#projects" className="text-[#1a1f2e] hover:text-[#00A99D] transition">Projects</a>
              <a href="#blog" className="text-[#1a1f2e] hover:text-[#00A99D] transition">Blog</a>
              <a href="#contact" className="text-[#1a1f2e] hover:text-[#00A99D] transition">Contact</a>
            </div>
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <a href="#home" className="block text-gray-300 hover:text-[#00A99D]">Home</a>
              <a href="#about" className="block text-gray-300 hover:text-[#00A99D]">About</a>
              <a href="#skills" className="block text-gray-300 hover:text-[#00A99D]">Skills</a>
              <a href="#experience" className="block text-gray-300 hover:text-[#00A99D]">Experience</a>
              <a href="#projects" className="block text-gray-300 hover:text-[#00A99D]">Projects</a>
              <a href="#blog" className="block text-gray-300 hover:text-[#00A99D]">Blog</a>
              <a href="#contact" className="block text-gray-300 hover:text-[#00A99D]">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - New Dark Theme */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-[#0a4d4a] via-[#1a1f2e] to-[#2a2f4e] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 z-10">
              <p className="text-gray-300 text-sm uppercase tracking-wider mb-4">WELCOME TO AKSHAR MISHRA'S WORLD</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Hi, I am<br />
                <span className="text-[#00A99D]">Akshar Mishra</span>
              </h1>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                a high school student passionate about rifle shooting, entrepreneurship, and creating social impact. I aim to study business or economics at a top global university to hone my skills and drive positive change.
              </p>
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-8">
                STUDENT LEADER • FOOD ENTREPRENEUR • SHOOTER & ASPIRING BUSINESS PROFESSIONAL
              </p>
              
              {/* Stats Counter */}
              <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <Users className="w-8 h-8 text-[#00A99D] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white">{counts.activities}+</div>
                  <div className="text-xs text-gray-400">Social Activities</div>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-[#00A99D] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white">{counts.certificates}</div>
                  <div className="text-xs text-gray-400">Certificates</div>
                </div>
                <div className="text-center">
                  <Target className="w-8 h-8 text-[#00A99D] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white">{counts.donations}+</div>
                  <div className="text-xs text-gray-400">Donation Drives</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-[#00A99D] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white">{counts.empowerment}+</div>
                  <div className="text-xs text-gray-400">Empowerment</div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#about" className="bg-[#00A99D] text-white px-8 py-3 rounded-lg hover:bg-[#008f84] transition">
                  Know More About Me
                </a>
                <a href="#contact" className="border-2 border-[#00A99D] text-[#00A99D] px-8 py-3 rounded-lg hover:bg-[#00A99D] hover:text-white transition">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center relative">
              <div className="relative">
                {/* Decorative badges */}
                <div className="absolute -top-4 -left-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-20">
                  <span className="text-2xl">😊</span>
                  <span className="text-sm font-semibold text-gray-700">Positive Changemaker</span>
                </div>
                <div className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-20">
                  <span className="text-2xl">⭐</span>
                  <span className="text-sm font-semibold text-gray-700">Star Performer</span>
                </div>
                
                {/* Laurel wreath decoration */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-96 h-96 border-8 border-yellow-400 rounded-full opacity-20"></div>
                </div>
                
                <img 
                  src="/akshar.webp" 
                  alt="Akshar Mishra" 
                  className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl relative z-10 border-8 border-[#00A99D]"
                />
                
                {/* Trophy decoration */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-yellow-400 p-4 rounded-full shadow-xl">
                    <Medal className="w-12 h-12 text-yellow-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl"> 
          <h2 className="text-4xl font-bold text-center mb-5">About Me</h2>
          <p className="text-xl font-semibold text-center mb-5 text-gray-500">High School Student | Entrepreneur | Rifle Shooter</p>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mx-auto">
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
              <img 
                src="/gl_17.jpg" 
                alt="About Me" 
                className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-xl"
              />
            </div>
            <div className="w-full lg:w-2/3">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                I'm a passionate high school student with a diverse range of interests and experiences. From competitive rifle shooting at the national level to founding my own food business, I've always believed in pursuing excellence in everything I do.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                My journey includes meaningful community service through organizations like YATAN NGO, Gomti Action Parivar, and Prana Wellness Institute, where I've had the privilege of making a positive impact on others' lives.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                As I look toward the future, I'm excited about pursuing higher education in Business or Economics and continuing to create ventures that combine my entrepreneurial spirit with a commitment to social impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Academic Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Skills */}
            <div>
              <h2 className="text-4xl font-bold mb-8">Skills</h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-teal-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Background */}
            <div>
              <h2 className="text-4xl font-bold mb-8">Academic Background</h2>
              <p className="text-gray-600 mb-6">
                Currently pursuing high school education with excellent academic performance.
              </p>
              <h3 className="text-2xl font-bold mb-4">Class 10 Scores:</h3>
              <div className="space-y-3">
                {academicScores.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-700">{item.subject}</span>
                    <span className="text-teal-600 font-bold text-lg">{item.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Achievements & Vision */}
       <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Extracurricular Achievements */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Extracurricular Achievements</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-gray-800 mt-1">•</span>
                  <span className="text-gray-700">National-level rifle shooting medals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-800 mt-1">•</span>
                  <span className="text-gray-700">Yoga practitioner</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-800 mt-1">•</span>
                  <span className="text-gray-700">Successful food business entrepreneur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-800 mt-1">•</span>
                  <span className="text-gray-700">Worked with Samajwadi Party, YATAN NGO, and Prana Wellness Institute</span>
                </li>
              </ul>
            </div>

            {/* My Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">My Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                "I aspire to pursue undergraduate studies in Business or Economics, combining my entrepreneurial spirit and analytical skills to create impactful ventures."
              </p>
            </div>
          </div>

          {/* Photos under Extracurricular & Vision */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://res.cloudinary.com/daetdadtt/image/upload/v1762800970/d365d13c-02d4-4cc8-a3a1-582537903509.png" 
                alt="Extracurricular 1" 
                className="w-full h-120 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://res.cloudinary.com/daetdadtt/image/upload/v1762850916/c1b0553c-05fc-4cdc-904a-082a6b9b2425.png" 
                alt="Extracurricular 2" 
                className="w-full h-120 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://res.cloudinary.com/daetdadtt/image/upload/v1762850901/7529ad71-e0be-4772-a848-e34bcd9776b0.png" 
                alt="Extracurricular 3" 
                className="w-full h-120 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-600">Media Features</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Image 1 */}
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://res.cloudinary.com/daetdadtt/image/upload/v1762851396/685a1cf7-4441-4784-b6a8-c36f7469a27a.png" 
              alt="Media Feature 1" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://res.cloudinary.com/daetdadtt/image/upload/v1762851413/44184c84-d820-4f39-9dbc-ee8911bb5a25.png" 
              alt="Media Feature 2" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Image 3 */}
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://res.cloudinary.com/daetdadtt/image/upload/v1762851421/d75e128c-0ab6-4b32-8075-9bdb9d34a0b7.png" 
              alt="Media Feature 3" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>


      {/* Community Work */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Community Work</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Giving Back to Society</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {communityWork.map((work, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{work.title}</h3>
                <ul className="space-y-2">
                  {work.activities.map((activity, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section with Photos */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Experience</h2>
          <p className="text-center text-gray-600 mb-12">I have experience in multiple domains as listed below</p>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                    <p className="text-teal-600 font-semibold">{exp.organization}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                {exp.achievements && (
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-teal-800">Achievements:</p>
                    <p className="text-sm text-teal-700">{exp.achievements}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Experience Photos */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://res.cloudinary.com/daetdadtt/image/upload/v1762800147/WhatsApp_Image_2025-11-10_at_16.17.32_1_kka0cn.jpg" 
                alt="Experience 1" 
                className="w-full h-120 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://res.cloudinary.com/daetdadtt/image/upload/v1762800950/WhatsApp_Image_2025-11-10_at_16.17.26_1_mebexf.jpg" 
                alt="Experience 2" 
                className="w-full h-120 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://res.cloudinary.com/daetdadtt/image/upload/v1762800970/d365d13c-02d4-4cc8-a3a1-582537903509.png" 
                alt="Experience 3" 
                className="w-full h-120 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Medal className="w-10 h-10 text-teal-600" />
              <h2 className="text-4xl font-bold">My Certificates</h2>
            </div>
            <p className="text-xl text-gray-600">Recognition and Achievements</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Certificate 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img 
                  src="https://res.cloudinary.com/daetdadtt/image/upload/v1762841008/WhatsApp_Image_2025-11-10_at_16.15.40_vsu4bq.jpg" 
                  alt="Certificate 1" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 border-4 border-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-sm">UNHCR Model UN Conference</p>
              </div>
            </div>

            {/* Certificate 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img 
                  src="https://res.cloudinary.com/daetdadtt/image/upload/v1762841008/WhatsApp_Image_2025-11-10_at_16.15.41_a6uwut.jpg" 
                  alt="Certificate 2" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 border-4 border-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-sm">Achievement Certificate</p>
              </div>
            </div>

            {/* Certificate 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img 
                  src="https://res.cloudinary.com/daetdadtt/image/upload/v1762841008/WhatsApp_Image_2025-11-10_at_16.15.40_2_tt6p4h.jpg" 
                  alt="Certificate 3" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 border-4 border-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-sm">Excellence Award</p>
              </div>
            </div>

            {/* Certificate 4 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img 
                  src="https://res.cloudinary.com/daetdadtt/image/upload/v1762841007/WhatsApp_Image_2025-11-10_at_16.15.40_1_btlwiv.jpg" 
                  alt="Certificate 4" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 border-4 border-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-sm">Recognition Certificate</p>
              </div>
            </div>

            {/* Certificate 5 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img 
                  src="https://res.cloudinary.com/daetdadtt/image/upload/v1762841007/WhatsApp_Image_2025-11-10_at_16.15.41_1_kmtwto.jpg" 
                  alt="Certificate 5" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 border-4 border-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-sm">Participation Certificate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internships & Projects */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Internships & Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#00A99D] p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">LilyPad EV</h3>
                  <p className="text-white text-opacity-90">Summer Internship at Lilypad EV, working on an EV Platform</p>
                </div>
              </div>
              <a 
                href="https://lilypadev.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 text-white underline hover:text-opacity-80 transition"
              >
                Visit Website →
              </a>
            </div>

            <div className="bg-[#00A99D] p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">AP Exams</h3>
                  <p className="text-white text-opacity-90">Planning to Publish Research Papers & appear in AP Exams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals & Ambitions - New Section */}
      <section className="py-12 bg-[#00A99D]">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-white mb-6">Future Goals & Ambitions</h2>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xl text-white leading-relaxed">
                Pursue undergraduate studies in Business or Economics in the USA, UK, or globally.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xl text-white leading-relaxed">
                Build scalable ventures.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xl text-white leading-relaxed">
                Continue impactful community work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Gallery</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Moments & Memories</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="h-90 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={image}
                  alt={`Gallery ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {/* <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Blog</h2>
          <p className="text-xl text-center text-gray-600 mb-12">My Reflections & Insights</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-teal-600 font-semibold hover:text-teal-700 transition">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-12">Let's connect and collaborate</p>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea 
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  onClick={handleSubmit}
                  className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition font-semibold"
                >
                  Send Message
                </button>
              </div>
              
              <div className="flex justify-center gap-6 mt-8">
                <a href="#" className="text-gray-600 hover:text-teal-600 transition">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-teal-600 transition">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-teal-600 transition">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1f2e] text-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Section - Name & Description */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Akshar Mishra</h3>
              <p className="text-gray-400 text-sm">Aspiring Social Activist & Entrepreneur</p>
              <div className="flex gap-4 mt-4">
                <a href="https://www.facebook.com/AksharsKitchen" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00A99D] transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00A99D] transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@aksharskitchen6634" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00A99D] transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Middle Section - My Documents */}
            <div>
              <h4 className="text-lg font-bold mb-4">MY DOCUMENTS</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#certificates" className="text-gray-400 hover:text-[#00A99D] transition text-sm">
                    Certificates
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-[#00A99D] transition text-sm">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-400 hover:text-[#00A99D] transition text-sm">
                    Media
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Section - Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-4">STAY UPDATED</h4>
              <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-[#2a3142] text-white text-sm rounded border border-gray-600 focus:outline-none focus:border-[#00A99D]"
                />
                <button className="bg-[#00A99D] text-white px-6 py-2 rounded hover:bg-[#008f84] transition text-sm font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">&copy; 2024 Akshar Mishra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;