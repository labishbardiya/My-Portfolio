import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const cloudRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Skill pills floating animation
      const pills = document.querySelectorAll('.skill-node');
      pills.forEach((pill, index) => {
        // Random floating animation
        gsap.to(pill, {
          y: `random(-15, 15)`,
          x: `random(-10, 10)`,
          duration: `random(3, 5)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.1,
        });
      });

      // Section reveal
      gsap.fromTo(
        cloudRef.current,
        { opacity: 0, scale: 0.9 },
        {
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

      // Animated skill bars
      const bars = document.querySelectorAll('.skill-bar-fill');
      bars.forEach((bar) => {
        const el = bar;
        gsap.to(el, {
          width: el.getAttribute('data-width') || '0%',
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      name: 'Languages',
      skills: ['Python', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
      color: 'from-purple to-purple-light',
    },
    {
      name: 'Frameworks & Libraries',
      skills: ['ReactJS', 'NextJS', 'NodeJS', 'Express.js', 'Tailwind CSS', 'Scikit-learn', 'TensorFlow'],
      color: 'from-cyan to-cyan-light',
    },
    {
      name: 'Databases & Tools',
      skills: ['MongoDB', 'PostgreSQL', 'Git', 'Docker', 'Ubuntu Linux', 'MATLAB', 'Figma'],
      color: 'from-pink to-pink-light',
    },
    {
      name: 'Coursework',
      skills: ['Data Structures', 'Algorithms', 'Machine Learning', 'Computer Networks', 'Operating Systems', 'Computer Security'],
      color: 'from-yellow-400 to-orange',
    },
  ];

  const contestRatings = [
    { platform: 'CodeChef', rating: '1501 (2★)', color: 'text-orange-400' },
    { platform: 'LeetCode', rating: '1507', color: 'text-yellow-400' },
    { platform: 'GeeksforGeeks', rating: '1656 (3★)', color: 'text-green-400' },
  ];

  const proficiencyMap = {
    'Python': 90, 'C++': 75, 'JavaScript': 85, 'TypeScript': 80, 'SQL': 70,
    'HTML': 90, 'CSS': 85, 'ReactJS': 85, 'NextJS': 75, 'NodeJS': 80,
    'Express.js': 78, 'Tailwind CSS': 85, 'Scikit-learn': 70, 'TensorFlow': 65,
    'MongoDB': 72, 'PostgreSQL': 65, 'Git': 90, 'Docker': 60, 'Ubuntu Linux': 75,
    'MATLAB': 60, 'Figma': 55, 'Data Structures': 85, 'Algorithms': 82,
    'Machine Learning': 78, 'Computer Networks': 70, 'Operating Systems': 72,
    'Computer Security': 68,
  };

  const coreSkills = [
    { name: 'Python', level: 90, color: 'from-purple to-cyan' },
    { name: 'React.js', level: 85, color: 'from-cyan to-blue-400' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-orange' },
    { name: 'TypeScript', level: 80, color: 'from-blue-400 to-indigo-500' },
    { name: 'Node.js', level: 80, color: 'from-green-400 to-emerald-600' },
    { name: 'C++', level: 75, color: 'from-pink to-purple' },
    { name: 'MongoDB', level: 72, color: 'from-green-500 to-green-700' },
    { name: 'Git', level: 90, color: 'from-orange to-red-500' },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-purple font-medium text-sm tracking-wider uppercase mb-4 block">
              Skills
            </span>
            <h2 className="heading-lg mb-4" style={{ color: 'var(--text-primary)' }}>
              Technical{' '}
              <span className="text-gradient">Arsenal</span>
            </h2>
            <p className="body-md max-w-2xl mx-auto">
              A comprehensive toolkit built through years of development, 
              research, and innovation.
            </p>
          </div>

          {/* Skills Cloud */}
          <div ref={cloudRef} className="grid lg:grid-cols-2 gap-12 mb-16">
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="glass rounded-3xl p-8"
              >
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${category.color} mb-6`} />
                <h3 
                  className="font-serif-display font-semibold text-xl mb-6"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-node skill-pill group relative cursor-default"
                    >
                      {skill}
                      {proficiencyMap[skill] !== undefined && (
                        <span
                          className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-20 shadow-lg"
                          style={{
                            background: 'var(--bg-primary)',
                            color: 'var(--text-primary)',
                            border: '1px solid var(--border-color)',
                          }}
                        >
                          {proficiencyMap[skill]}%
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Proficiencies — Animated Bars */}
          <div className="glass rounded-3xl p-8 mb-16">
            <h3
              className="font-serif-display font-semibold text-xl mb-8 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              Core Proficiencies
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
              {coreSkills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      {skill.name}
                    </span>
                    <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
                    <div
                      className={`skill-bar-fill h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      style={{ width: '0%' }}
                      data-width={`${skill.level}%`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contest Ratings */}
          <div className="glass rounded-3xl p-8 mb-16">
            <h3 
              className="font-serif-display font-semibold text-xl mb-6 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              Competitive Programming
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {contestRatings.map((contest, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl"
                  style={{ background: 'var(--bg-secondary)' }}
                >
                  <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>{contest.platform}</p>
                  <p className={`text-3xl font-serif-display font-bold ${contest.color}`}>
                    {contest.rating}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* GATE 2026 */}
          <div className="glass rounded-3xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 
                  className="font-serif-display font-semibold text-xl mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  GATE 2026 - Computer Science & Engineering
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  All India Rank in Top 6.6% | Score: 434/1000 | Marks: 37.19/100
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-4xl font-serif-display font-bold text-gradient">Top</p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Percentile</p>
                </div>
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple to-cyan flex items-center justify-center">
                  <span className="text-2xl font-serif-display font-bold text-white">6.6%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
