import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Award, Star, Medal, Rocket, GraduationCap, ExternalLink, ChevronLeft, ChevronRight, FileText, Image as ImageIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const [activeCertIndex, setActiveCertIndex] = useState(0);

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

  const certifications = useMemo(
    () => [
      {
        title: 'AI x MedTech Hackathon',
        platform: 'Certificate',
        year: '2025',
        file: 'AI x MedTech Hackathon Certificate.pdf',
      },
      {
        title: 'InventX',
        platform: 'IIT Gandhinagar',
        year: '2025',
        file: 'IITGN InventX 2025.pdf',
      },
      {
        title: 'ISRO Space Challenge',
        platform: 'IIITH',
        year: '2025',
        file: 'IIITH ISRO Space Challenge 2025.jpeg',
      },
      {
        title: 'Bruxlix — Winner',
        platform: 'Manipal University Jaipur',
        year: '2026',
        file: 'Manipal University Win (Bruxlix).jpg',
      },
      {
        title: 'Event Coordinator',
        platform: 'HackJKLU v4.0',
        year: '2024',
        file: 'HackJKLU v4.0 Event Coordinator.pdf',
      },
      {
        title: 'Front-end Development',
        platform: 'Certificate',
        year: '2024',
        file: 'Front-end Development.pdf',
      },
      {
        title: 'Python Programming',
        platform: 'CodeChef',
        year: '2024',
        file: 'Python Programming CodeChef.pdf',
      },
      {
        title: 'Python for Everybody',
        platform: 'Certificate',
        year: '2024',
        file: 'Python for Everybody.pdf',
      },
      {
        title: 'C Programming',
        platform: 'Infosys SpringBoard',
        year: '2024',
        file: 'C Programming Infosys SpringBoard.pdf',
      },
      {
        title: 'Control Design with Simulink',
        platform: 'Certificate',
        year: '2024',
        file: 'Control Design with Simulink.pdf',
      },
      {
        title: 'Red Hat System Administration I (RH124)',
        platform: 'Red Hat',
        year: '2024',
        file: 'Red Hat System Administration I (RH124) Certificate.pdf',
      },
      {
        title: 'Honors Certificate',
        platform: 'Certificate',
        year: '2024',
        file: 'Honors Certificate.pdf',
      },
    ],
    []
  );

  const certSlides = useMemo(() => {
    return certifications.map((cert) => {
      const url = `/images/certificates/${encodeURIComponent(cert.file)}`;
      const ext = cert.file.split('.').pop()?.toLowerCase();
      const type = ext === 'jpg' || ext === 'jpeg' || ext === 'png' || ext === 'webp' ? 'image' : 'pdf';
      return { ...cert, url, type };
    });
  }, [certifications]);

  const goToCert = (index) => {
    const clampedIndex = Math.max(0, Math.min(index, certSlides.length - 1));
    setActiveCertIndex(clampedIndex);
    const container = sliderRef.current;
    if (!container) return;
    const slideEl = container.querySelector(`[data-cert-slide="${clampedIndex}"]`);
    if (slideEl) {
      slideEl.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
  };

  const goPrevCert = () => goToCert(activeCertIndex - 1);
  const goNextCert = () => goToCert(activeCertIndex + 1);

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

            <div className="flex items-center justify-between gap-3 mb-4">
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Swipe or use arrows to browse. Click a card to open.
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrevCert}
                  disabled={activeCertIndex === 0}
                  className="w-10 h-10 rounded-xl border flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02]"
                  style={{
                    background: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={goNextCert}
                  disabled={activeCertIndex === certSlides.length - 1}
                  className="w-10 h-10 rounded-xl border flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02]"
                  style={{
                    background: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                  aria-label="Next certificate"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div
              ref={sliderRef}
              className="flex gap-4 overflow-x-auto pb-2"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
              }}
              onScroll={(e) => {
                const el = e.currentTarget;
                const slideWidth = el.firstElementChild?.getBoundingClientRect().width || 1;
                const nextIndex = Math.round(el.scrollLeft / (slideWidth + 16));
                if (Number.isFinite(nextIndex) && nextIndex !== activeCertIndex) {
                  setActiveCertIndex(Math.max(0, Math.min(nextIndex, certSlides.length - 1)));
                }
              }}
            >
              {certSlides.map((cert, index) => (
                <a
                  key={cert.file}
                  data-cert-slide={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-card shrink-0 w-[280px] sm:w-[320px] p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg group block"
                  style={{
                    background: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                    scrollSnapAlign: 'start',
                  }}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center border"
                        style={{
                          background: 'var(--bg-primary)',
                          borderColor: 'var(--border-color)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {cert.type === 'image' ? (
                          <ImageIcon className="w-5 h-5 text-cyan" />
                        ) : (
                          <FileText className="w-5 h-5 text-purple" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
                          {cert.title}
                        </h4>
                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                          {cert.platform}
                        </p>
                      </div>
                    </div>
                    <ExternalLink
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: 'var(--text-muted)' }}
                    />
                  </div>

                  {cert.type === 'image' ? (
                    <div
                      className="rounded-xl overflow-hidden border mb-4"
                      style={{ borderColor: 'var(--border-color)' }}
                    >
                      <img
                        src={cert.url}
                        alt={`${cert.title} certificate`}
                        className="w-full h-40 object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div
                      className="rounded-xl border mb-4 flex items-center justify-center h-40"
                      style={{ borderColor: 'var(--border-color)', background: 'var(--bg-primary)' }}
                    >
                      <div className="text-center px-4">
                        <FileText className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--text-muted)' }} />
                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                          PDF Certificate
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {cert.year}
                    </span>
                    <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                      {index + 1}/{certSlides.length}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 mt-5">
              {certSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToCert(index)}
                  className="w-2.5 h-2.5 rounded-full transition-all"
                  aria-label={`Go to certificate ${index + 1}`}
                  style={{
                    background:
                      index === activeCertIndex
                        ? 'linear-gradient(to right, rgb(123, 47, 247), rgb(0, 194, 255))'
                        : 'rgba(255,255,255,0.18)',
                    transform: index === activeCertIndex ? 'scale(1.15)' : 'scale(1)',
                  }}
                />
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
