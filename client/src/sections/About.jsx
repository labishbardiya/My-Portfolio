import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, FileText, Trophy, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content reveal animation
      gsap.fromTo(
        contentRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image reveal animation
      gsap.fromTo(
        imageRef.current,
        { x: 50, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats counter animation
      const statNumbers = document.querySelectorAll('.stat-number');
      statNumbers.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target') || '0');
        gsap.fromTo(
          stat,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: stat,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Trophy, value: 2, suffix: 'x', label: 'Award Winner', color: 'text-yellow-400' },
    { icon: FileText, value: 1, suffix: '', label: 'Patent Filed', color: 'text-cyan' },
    { icon: Award, value: 1, suffix: '', label: 'Samsung Fellow', color: 'text-purple' },
    { icon: Cpu, value: 8, suffix: '.6', label: 'CGPA', color: 'text-pink' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full transition-colors duration-300"
        style={{ background: 'linear-gradient(to left, rgba(123, 47, 247, 0.05), transparent)' }}
      />
      
      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <span className="text-purple font-medium text-sm tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="heading-lg" style={{ color: 'var(--text-primary)' }}>
              Passionate about{' '}
              <span className="text-gradient">Innovation</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div ref={contentRef}>
              <div className="space-y-6 body-lg">
                <p>
                  I am a <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Computer Science engineer</span> and 
                  founder driven by the desire to solve real-world problems through technology. 
                  Currently pursuing my B.Tech at JK Lakshmipat University with an 8.607 CGPA, 
                  I had the privilege of being a Visiting Scholar at IIT Gandhinagar.
                </p>
                <p>
                  As the <span className="text-purple font-semibold">Founder of Bruxlix</span>, 
                  I'm building patent-filed, non-invasive wearables for bruxism detection, 
                  which won the Special Jury Award at InventX'25 (IIT Gandhinagar) and 1st Place 
                  at the SDG Innovation Challenge.
                </p>
                <p>
                  I'm also building <span className="text-cyan font-semibold">CureNet</span>, 
                  a decentralized EMR interoperability platform for India on the ABDM framework, 
                  featuring FHIR R4 interoperability with Zero-Knowledge Proofs.
                </p>
                <p>
                  My research experience at <span className="text-pink font-semibold">STRIDE Lab, 
                  University of South Carolina</span> focused on Agentic AI and Multi-Agent Reinforcement 
                  Learning for healthcare applications.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="glass rounded-2xl p-4 text-center card-lift"
                  >
                    <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl sm:text-3xl font-serif-display font-bold" style={{ color: 'var(--text-primary)' }}>
                      <span className="stat-number" data-target={stat.value}>
                        0
                      </span>
                      {stat.suffix}
                    </div>
                    <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div ref={imageRef} className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-purple/30 rounded-2xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-cyan/30 rounded-2xl" />
              
              {/* Main image with blob shape */}
              <div className="relative">
                <div className="animate-blob overflow-hidden">
                  <img
                    src="/images/profile.png"
                    alt="Labish Bardiya"
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
                
                {/* Gradient overlay */}
                <div 
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, var(--bg-primary) 30%, transparent)' }}
                />
                
                {/* Floating tag */}
                <div className="absolute bottom-8 left-8 glass px-6 py-3 rounded-full">
                  <span className="font-medium">
                    <span className="text-purple">B.Tech</span>{' '}
                    <span style={{ color: 'var(--text-primary)' }}>CSE Student</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Education timeline */}
          <div className="mt-20">
            <h3 className="heading-md mb-8" style={{ color: 'var(--text-primary)' }}>Education</h3>
            <div className="space-y-6">
              {[
                {
                  school: 'JK Lakshmipat University, Jaipur',
                  degree: 'Bachelor of Technology in Computer Science Engineering',
                  period: 'Aug 2023 - Present',
                  grade: '8.607 CGPA',
                },
                {
                  school: 'Indian Institute of Technology, Gandhinagar',
                  degree: 'Visiting Scholar - B.Tech in CSE',
                  period: 'Aug 2024 - Dec 2024',
                  grade: '7.40 CGPA',
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 card-lift"
                >
                  <div>
                    <h4 
                      className="font-serif-display font-semibold text-lg"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {edu.school}
                    </h4>
                    <p style={{ color: 'var(--text-secondary)' }}>{edu.degree}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-cyan font-medium">{edu.period}</p>
                    <p className="text-purple font-semibold">{edu.grade}</p>
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

export default About;
