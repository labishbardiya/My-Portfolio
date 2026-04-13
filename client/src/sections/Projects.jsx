import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards stagger animation
      const cards = document.querySelectorAll('.project-card');
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'CureNet',
      subtitle: 'Health Intelligence SaaS Platform',
      period: 'Jan 2026 - Present',
      description: [
        'Architecting patient-owned decentralized ABHA platform on ABDM framework to eliminate data fragmentation.',
        'Engineered FHIR R4 interoperability layer with Zero-Knowledge Proofs for secure, privacy-first health data exchange.',
        'Developed ABHAyAI, a multilingual clinical summarization engine for one-shot insights in <10 seconds for doctors.',
        'Built offline-first QR/NFC access system and Claims Pre-Audit engine to reduce duplicate testing and claim rejections.',
      ],
      skills: ['Flutter', 'Dart', 'FHIR R4', 'ABDM Integration', 'Zero-Knowledge Proofs', 'AI Summarization'],
      gradient: 'from-purple via-cyan to-pink',
      github: 'https://github.com/labishbardiya/CureNet',
      live: null,
      image: '/images/projects/curenet.png',
    },
    {
      title: 'MVC',
      subtitle: 'Mini Version Control System',
      period: 'Oct 2025 - Nov 2025',
      description: [
        'Built a local version control kernel in C, implementing init, add, commit, log, revert, trace, and timewarp commands.',
        'Designed core data structures: FNV-1a, dynamic file maps, and commit history walked backward functionality.',
        'Engineered deterministic commit IDs with an integrity checker for verification.',
        'Built a browser frontend that parses the .cs directory and visualizes commits, stages, and files with a timeline slider.',
      ],
      skills: ['C', 'Data Structures', 'Hashing', 'Linked Lists', 'Shell Scripting', 'JavaScript'],
      gradient: 'from-cyan to-blue',
      github: 'https://github.com/labishbardiya/Mini-Version-Control-System',
      live: null,
      image: '/images/projects/mvc.png',
    },
    {
      title: 'JKLURide',
      subtitle: 'Campus Ride-Sharing Platform',
      period: 'Sept 2025 - Nov 2025',
      description: [
        'Built a production-grade campus ride-sharing backend restricted to @jklu.edu.in accounts, with JWT auth.',
        'Designed the DB schema and Prisma ORM layer covering Users, Rides, Payments, Feedback, and SOS Logs.',
        'Implemented dynamic fare-splitting logic, cancellation policy, and a credibility scoring system tracking user behavior.',
        'Built UPI-first payment processing with QR code generation and a committee governance module for SOS monitoring.',
      ],
      skills: ['TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT', 'REST APIs'],
      gradient: 'from-pink to-purple',
      github: 'https://github.com/labishbardiya/ride_sharing_project',
      live: null,
      image: '/images/projects/jkluride.png',
    },
    {
      title: 'Power-Grid Optimization',
      subtitle: 'Visualization Tool',
      period: 'March 2025 - April 2025',
      description: [
        'Engineered a power-grid optimization tool using Dijkstra\'s, Kruskal\'s MST, and Edmonds-Karp max-flow algorithms.',
        'Developed an interactive Dash-based visualization tool to analyze power grid routing, failures, and edge criticality.',
        'Computed edge weights from distance, load demand, and failure probability to improve routing performance.',
        'Visualized failure impact, edge criticality, and flow-cuts to make grid dynamics accessible and interpretable.',
      ],
      skills: ['Python', 'Dash', 'NetworkX', 'Plotly', 'Algorithm Design', 'Data Visualization', 'Graph Theory'],
      gradient: 'from-yellow-400 to-orange',
      github: 'https://github.com/labishbardiya/Power-Grid-Optimization-and-Visualization-Tool',
      live: null,
      image: '/images/projects/powergrid.png',
    },
  ];

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Check if image exists (for placeholder handling)
  const [imageExists, setImageExists] = useState({});

  useEffect(() => {
    projects.forEach((project) => {
      const img = new Image();
      img.onload = () => {
        setImageExists((prev) => ({ ...prev, [project.image]: true }));
      };
      img.onerror = () => {
        setImageExists((prev) => ({ ...prev, [project.image]: false }));
      };
      img.src = project.image;
    });
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-pink font-medium text-sm tracking-wider uppercase mb-4 block">
              Projects
            </span>
            <h2 className="heading-lg mb-4" style={{ color: 'var(--text-primary)' }}>
              Featured{' '}
              <span className="text-gradient">Works</span>
            </h2>
            <p className="body-md max-w-2xl mx-auto">
              From healthcare platforms to version control systems, 
              explore my technical innovations.
            </p>
          </div>

          {/* Featured Project (Large) */}
          <div className="mb-12">
            <div className="project-card glass rounded-3xl overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${projects[activeIndex].gradient}`} />
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                        {projects[activeIndex].period}
                      </span>
                    </div>
                    <h3 className="heading-md mb-2" style={{ color: 'var(--text-primary)' }}>
                      {projects[activeIndex].title}
                    </h3>
                    <p className="text-cyan font-medium mb-6">
                      {projects[activeIndex].subtitle}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {projects[activeIndex].description.map((item, i) => (
                        <li 
                          key={i} 
                          className="text-sm flex items-start gap-2"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <span className="text-purple mt-1">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[activeIndex].skills.map((skill, i) => (
                        <span
                          key={i}
                          className="skill-pill"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={projects[activeIndex].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full glass transition-colors hover:bg-purple/20"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        <Github size={18} />
                        <span className="text-sm">Code</span>
                      </a>
                      {projects[activeIndex].live && (
                        <a
                          href={projects[activeIndex].live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple to-cyan text-white hover:opacity-90 transition-opacity"
                        >
                          <ExternalLink size={18} />
                          <span className="text-sm">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="relative">
                    <div className={`aspect-video rounded-2xl bg-gradient-to-br ${projects[activeIndex].gradient} p-1`}>
                      <div 
                        className="w-full h-full rounded-xl flex items-center justify-center overflow-hidden"
                        style={{ background: 'var(--bg-secondary)' }}
                      >
                        {imageExists[projects[activeIndex].image] ? (
                          <img
                            src={projects[activeIndex].image}
                            alt={projects[activeIndex].title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-center p-8">
                            <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-30" style={{ color: 'var(--text-muted)' }} />
                            <p className="text-sm opacity-50" style={{ color: 'var(--text-muted)' }}>
                              Add image to:<br/>
                              <code className="text-xs">/images/projects/{projects[activeIndex].image.split('/').pop()}</code>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-6">
                      <button
                        onClick={prevProject}
                        className="w-12 h-12 rounded-full glass flex items-center justify-center transition-colors hover:bg-purple/20"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <div className="flex gap-2">
                        {projects.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`h-3 rounded-full transition-all duration-300 ${
                              i === activeIndex
                                ? 'bg-purple w-8'
                                : 'bg-white/30 hover:bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                      <button
                        onClick={nextProject}
                        className="w-12 h-12 rounded-full glass flex items-center justify-center transition-colors hover:bg-purple/20"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`project-card glass rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  index === activeIndex ? 'ring-2 ring-purple' : ''
                }`}
              >
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${project.gradient} mb-4`} />
                <h4 
                  className="font-serif-display font-semibold mb-1"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {project.title}
                </h4>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {project.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
