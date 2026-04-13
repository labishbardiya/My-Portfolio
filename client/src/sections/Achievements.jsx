import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Award, Star, Medal, Rocket, GraduationCap, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards stagger animation
      const cards = document.querySelectorAll('.achievement-card');
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

  const achievements = [
    {
      icon: Trophy,
      title: '1st Place + Rs. 10,000',
      organization: 'SDG Innovation Challenge 2026',
      location: 'Manipal University Jaipur',
      description: 'Won for Bruxlix, a wearable ML-powered sleep bruxism detection device, recognized for impact on SDG Goal 3 (Good Health), early detection of non-communicable diseases, and healthcare equity.',
      color: 'from-yellow-400 to-orange',
    },
    {
      icon: Award,
      title: 'Special Jury Award + Rs. 50,000',
      organization: 'InventX\'25',
      location: 'IIT Gandhinagar',
      description: 'Among top 30 nationwide for this competitive six-week residential innovation program; won the Special Jury Award for outstanding innovation.',
      color: 'from-purple to-pink',
    },
    {
      icon: Rocket,
      title: 'ISRO Immersion Startup Challenge',
      organization: 'Indian Space Research Organisation',
      location: '2025',
      description: 'Presented GeoBharat, an AI geospatial intelligence using ISRO satellite imagery for flood detection and disaster response, among 16 selected innovators nationwide.',
      color: 'from-cyan to-blue',
    },
    {
      icon: Star,
      title: 'Rank 1 in Practice School I',
      organization: 'JK Lakshmipat University',
      location: 'Dec 2025',
      description: 'Ranked 1st among the entire B.Tech 2023 batch under absolute evaluation; scored Grade A, 10 Grade Point.',
      color: 'from-green-400 to-emerald',
    },
    {
      icon: Medal,
      title: 'Finalist, BIS Build-a-thon 2.0',
      organization: 'Bureau of Indian Standards',
      location: '2024',
      description: 'Designed and implemented an Automatic HVAC System for this national-level product design hackathon, emphasizing intelligent automation, energy efficiency, and sustainability.',
      color: 'from-orange-400 to-red',
    },
    {
      icon: GraduationCap,
      title: 'Samsung Fellowship',
      organization: 'India Semiconductor Workforce Development Program',
      location: '2025',
      description: 'Secured a place in Cohort 5 of this nationally competitive fellowship, jointly organized by Samsung Semiconductor (SSIR), IISc, and Synopsys.',
      color: 'from-blue-400 to-indigo',
    },
  ];

  const scholarships = [
    '100% Merit Scholarship (3 consecutive years)',
    'Dean\'s List x3 (2023, 2024)',
  ];

  const certifications = [
    {
      title: 'Machine Learning',
      platform: 'Coursera — Stanford University',
      year: '2024',
      icon: '🤖',
      link: '#',
    },
    {
      title: 'Data Structures & Algorithms',
      platform: 'NPTEL — IIT Kharagpur',
      year: '2024',
      icon: '🧮',
      link: '#',
    },
    {
      title: 'Python for Data Science',
      platform: 'NPTEL — IIT Madras',
      year: '2023',
      icon: '🐍',
      link: '#',
    },
    {
      title: 'Introduction to Cybersecurity',
      platform: 'Cisco Networking Academy',
      year: '2024',
      icon: '🔐',
      link: '#',
    },
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-purple/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-cyan font-medium text-sm tracking-wider uppercase mb-4 block">
              Achievements
            </span>
            <h2 className="heading-lg mb-4" style={{ color: 'var(--text-primary)' }}>
              Awards &{' '}
              <span className="text-gradient">Recognition</span>
            </h2>
            <p className="body-md max-w-2xl mx-auto">
              Milestones that mark my journey of innovation, 
              dedication, and impact.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="achievement-card glass rounded-2xl p-6 card-lift group"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 
                  className="font-serif-display font-semibold text-lg mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {achievement.title}
                </h3>
                <p className="text-cyan font-medium text-sm mb-1">
                  {achievement.organization}
                </p>
                <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
                  {achievement.location}
                </p>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="glass rounded-3xl p-8 mb-12">
            <h3
              className="font-serif-display font-semibold text-xl mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-card p-5 rounded-xl border transition-all duration-300 hover:scale-[1.03] hover:shadow-lg group block"
                  style={{
                    background: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                  }}
                >
                  <div className="text-2xl mb-3">{cert.icon}</div>
                  <h4
                    className="font-medium text-sm mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {cert.title}
                  </h4>
                  <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                    {cert.platform}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {cert.year}
                    </span>
                    <ExternalLink
                      className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: 'var(--text-muted)' }}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Scholarships Banner */}
          <div className="glass rounded-3xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 
                  className="font-serif-display font-semibold text-xl mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Academic Excellence
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Recognized for consistent academic performance and dedication.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {scholarships.map((scholarship, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border"
                    style={{
                      background: 'linear-gradient(to right, rgba(123, 47, 247, 0.2), rgba(0, 194, 255, 0.2))',
                      borderColor: 'rgba(123, 47, 247, 0.3)'
                    }}
                  >
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{scholarship}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
