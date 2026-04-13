import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowDown, Github, Linkedin, Mail, Twitter, Youtube, Instagram, BookOpen, Globe, FileText, Download } from 'lucide-react';

const ROLES = ['Founder', 'AI Researcher', 'Innovator', 'Samsung Fellow', 'Full-Stack Builder'];

const Hero = () => {
  const API_URL = import.meta.env.VITE_API_URL || '';
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);
  const ctaRef = useRef(null);
  // Typewriter effect
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let delay = isDeleting ? 50 : 120;
    if (!isDeleting && displayText === currentRole) delay = 2000;
    if (isDeleting && displayText === '') delay = 500;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText === currentRole) {
          setIsDeleting(true);
        } else {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }
      } else {
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        } else {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {

    const ctx = gsap.context(() => {
      // Timeline for entrance animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Title animation - character by character
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll('.char');
        tl.fromTo(
          chars,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.05 },
          0.2
        );
      }

      // Subtitle
      tl.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.6
      );

      // Description
      tl.fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.8
      );

      // Profile image
      tl.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2 },
        0.5
      );

      // CTA buttons
      tl.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        1
      );

      // Floating animation for image
      gsap.to(imageRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Orbit animation for the glow ring
      const orbitRing = document.querySelector('.orbit-ring');
      if (orbitRing) {
        gsap.to(orbitRing, {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: 'none',
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Split name into characters
  const name = 'Labish Bardiya';
  const nameChars = name.split('').map((char, index) => (
    <span key={index} className="char inline-block">
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  const socialLinks = [
    { icon: Github, href: 'https://github.com/labishbardiya', color: 'hover:text-purple hover:bg-purple/20' },
    { icon: Linkedin, href: 'https://linkedin.com/in/labishbardiya', color: 'hover:text-cyan hover:bg-cyan/20' },
    { icon: Twitter, href: 'https://x.com/labishbardiya', color: 'hover:text-blue-400 hover:bg-blue-400/20' },
    { icon: Youtube, href: 'https://www.youtube.com/@LabishBardiya', color: 'hover:text-red-500 hover:bg-red-500/20' },
    { icon: Instagram, href: 'https://instagram.com/labish.bardiya', color: 'hover:text-pink-500 hover:bg-pink-500/20' },
    { icon: BookOpen, href: 'https://dev.to/labishbardiya', color: 'hover:text-green-500 hover:bg-green-500/20' },
    { icon: Globe, href: 'https://labishbardiya.com', color: 'hover:text-orange-500 hover:bg-orange-500/20' },
    { icon: Mail, href: 'mailto:Labishjain7@gmail.com', color: 'hover:text-pink hover:bg-pink/20' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 transition-colors duration-300"
        style={{ background: 'var(--bg-primary)' }}
      />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/20 rounded-full blur-[120px] animate-pulse animation-delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink/10 rounded-full blur-[150px] animate-pulse animation-delay-1000" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 section-padding w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1
                ref={titleRef}
                className="heading-xl mb-4 overflow-hidden"
                style={{ color: 'var(--text-primary)' }}
              >
                <span className="text-gradient">{nameChars}</span>
              </h1>
              
              <p
                ref={subtitleRef}
                className="text-xl sm:text-2xl font-serif-display font-medium mb-6 h-9"
              >
                <span className="text-cyan">{displayText}</span>
                <span className="animate-pulse text-purple ml-0.5">|</span>
              </p>
              
              <p
                ref={descRef}
                className="body-lg max-w-xl mx-auto lg:mx-0 mb-8"
              >
                Building the future at the intersection of healthcare and AI. 
                Founder of <span className="text-purple font-semibold">Bruxlix</span> 
                {' '}&{' '}
                <span className="text-cyan font-semibold">CureNet</span>. 
                Samsung Semiconductor Fellow. 2x Award Winner.
              </p>

              <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={scrollToAbout} className="btn-primary">
                  Explore My Work
                  <ArrowDown className="inline-block ml-2 w-4 h-4" />
                </button>
                
                <a 
                  href={`${API_URL}/api/resume/pdf`}
                  download
                  className="btn-outline flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  CV (PDF)
                </a>
                <a 
                  href={`${API_URL}/api/resume/docx`}
                  download
                  className="btn-outline flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  CV (DOCX)
                </a>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3 mt-8 justify-center lg:justify-start flex-wrap">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-full glass flex items-center justify-center transition-all duration-300 ${social.color}`}
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right content - Profile image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div ref={imageRef} className="relative">
                {/* Glowing ring */}
                <div className="orbit-ring absolute inset-0 -m-8">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple rounded-full glow-purple" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan rounded-full glow-cyan" />
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-pink rounded-full glow-pink" />
                </div>

                {/* Outer glow ring */}
                <div className="absolute inset-0 -m-4 rounded-full bg-gradient-to-r from-purple via-cyan to-pink opacity-50 blur-xl animate-pulse-glow" />
                
                {/* Profile image container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4" style={{ borderColor: 'var(--border-color)' }}>
                  <img
                    src="/images/profile.png"
                    alt="Labish Bardiya"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple/20 to-transparent" />
                </div>

                {/* Floating badges */}
                <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full animate-float">
                  <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>🚀 Founder</span>
                </div>
                <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full animate-float animation-delay-500">
                  <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>🧠 AI Researcher</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="transition-colors hover:text-white"
          style={{ color: 'var(--text-muted)' }}
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
