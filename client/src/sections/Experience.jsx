import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, FlaskConical, Lightbulb, Code, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline line animation
      const timelineLine = document.querySelector('.timeline-progress');
      if (timelineLine) {
        gsap.fromTo(
          timelineLine,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 70%',
              end: 'bottom 30%',
              scrub: 1,
            },
          }
        );
      }

      // Experience cards animation
      const cards = document.querySelectorAll('.experience-card');
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { 
            x: index % 2 === 0 ? -50 : 50, 
            opacity: 0 
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
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

  const experiences = [
    {
      icon: Briefcase,
      title: 'Founder',
      company: 'Bruxlix (Healthcare AI Startup)',
      period: 'Nov 2025 - Present',
      description: [
        'Founded Bruxlix, a health-tech startup building non-invasive at-home wearables for bruxism, affecting 21% globally.',
        'Developing a device and ML models that distinguish bruxism from normal jaw movement, replacing $2,000 lab tests.',
        'Filed provisional patents in India and the US for the core detection mechanism.',
        'Won Special Jury Award + Rs. 50k at InventX\'25 (IIT Gandhinagar) and 1st + Rs. 10k at the SDG Challenge (MUJ).',
      ],
      skills: ['Hardware Prototyping', 'Biomedical Signals', 'IP Strategy', 'Product Development'],
      color: 'from-purple to-purple-light',
    },
    {
      icon: FlaskConical,
      title: 'Research Intern',
      company: 'STRIDE Lab, AI Institute, University of South Carolina',
      period: 'July 2025 - Sept 2025',
      description: [
        'Conducted research at STRIDE Lab on Agentic AI and Reinforcement Learning, supervised by Dr. Utkarshani Jaimini.',
        'Reviewed healthcare research papers; investigated how causality combined with MARL can improve clinical decision-making.',
      ],
      skills: ['Agentic AI', 'Multi-Agent Systems', 'Reinforcement Learning', 'Academic Writing'],
      color: 'from-cyan to-cyan-light',
    },
    {
      icon: Lightbulb,
      title: 'Inventor',
      company: 'InventX\'25, IIT Gandhinagar',
      period: 'May 2025 - July 2025',
      description: [
        'Completed a 6-week residential program with 12+ maker hours/day focused on design, prototyping, and pitching.',
        'Filed provisional patents in India and the US; preparing for non-provisional patent filing.',
        'Mentored by Prof. Madhu Vadali and Prof. Eric Lima on innovation, IP, and product development.',
      ],
      skills: ['Design Thinking', 'Prototyping', 'IP Drafting', 'Pitching and Storytelling'],
      color: 'from-pink to-pink-light',
    },
    {
      icon: Code,
      title: 'Website Developer',
      company: 'HackJKLU v4.0',
      period: 'Dec 2024 - March 2025',
      description: [
        'Led a team of 10 to develop HackJKLU v4.0\'s website, strengthening online visibility and team collaboration.',
        'Developed 3D animations using Three.js and React Three Fiber, refining UI and achieving a 90 Lighthouse Score.',
        'Integrated Framer Motion for animations and countdowns, enhancing engagement and user interaction.',
        'Refined performance through image compression and lazy loading, decreasing load time by 30%.',
      ],
      skills: ['Next.js', 'React.js', 'TypeScript', 'Three.js', 'Framer Motion'],
      color: 'from-purple to-cyan',
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 transition-colors duration-300"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(123, 47, 247, 0.05), transparent)' }}
      />

      <div className="relative z-10 section-padding">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-cyan font-medium text-sm tracking-wider uppercase mb-4 block">
              Experience
            </span>
            <h2 className="heading-lg mb-4" style={{ color: 'var(--text-primary)' }}>
              My Professional{' '}
              <span className="text-gradient">Journey</span>
            </h2>
            <p className="body-md max-w-2xl mx-auto">
              From founding startups to conducting cutting-edge research, 
              here's my path of innovation and impact.
            </p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5" style={{ background: 'var(--border-color)' }}>
              <div className="timeline-progress absolute inset-0 timeline-line origin-top" />
            </div>

            {/* Experience cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`experience-card relative flex flex-col md:flex-row items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple to-cyan z-10 glow-purple" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="glass rounded-2xl p-6 card-lift">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center flex-shrink-0`}>
                          <exp.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 
                            className="font-serif-display font-semibold text-lg"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            {exp.title}
                          </h3>
                          <p className="text-cyan font-medium">{exp.company}</p>
                          <div className="flex items-center gap-2 text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                            <Calendar size={14} />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li 
                            key={i} 
                            className="text-sm flex items-start gap-2"
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            <span className="text-purple mt-1.5">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs font-medium border"
                            style={{ 
                              background: 'var(--bg-secondary)',
                              borderColor: 'var(--border-color)',
                              color: 'var(--text-secondary)'
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
