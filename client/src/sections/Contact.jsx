import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Github, Linkedin, Mail, MapPin, Twitter, Youtube, Instagram, BookOpen, Globe, Code2, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const API_URL = import.meta.env.VITE_API_URL || '';
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content reveal animation
      gsap.fromTo(
        '.contact-content',
        { y: 50, opacity: 0 },
        {
          y: 0,
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
        '.contact-image',
        { x: 50, opacity: 0 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send to MongoDB via API endpoint
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Labishjain7@gmail.com',
      href: 'mailto:Labishjain7@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jaipur, Rajasthan, India',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/labishbardiya',
      color: 'hover:bg-purple/20 hover:text-purple',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/labishbardiya',
      color: 'hover:bg-cyan/20 hover:text-cyan',
    },
    {
      icon: Twitter,
      label: 'X (Twitter)',
      href: 'https://x.com/labishbardiya',
      color: 'hover:bg-blue-400/20 hover:text-blue-400',
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://www.youtube.com/@LabishBardiya',
      color: 'hover:bg-red-500/20 hover:text-red-500',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/labish.bardiya',
      color: 'hover:bg-pink-500/20 hover:text-pink-500',
    },
    {
      icon: BookOpen,
      label: 'Dev.to',
      href: 'https://dev.to/labishbardiya',
      color: 'hover:bg-green-500/20 hover:text-green-500',
    },
    {
      icon: Globe,
      label: 'Website',
      href: 'https://labishbardiya.com',
      color: 'hover:bg-orange-500/20 hover:text-orange-500',
    },
  ];

  const competitiveProfiles = [
    {
      label: 'CodeChef',
      href: 'https://www.codechef.com/users/labishbardiya',
    },
    {
      label: 'LeetCode',
      href: 'https://leetcode.com/u/labishbardiya/',
    },
    {
      label: 'GeeksforGeeks',
      href: 'https://www.geeksforgeeks.org/profile/labishbardiya19',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background with VR image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 transition-colors duration-300"
          style={{ background: 'var(--bg-primary)' }}
        />
        <img
          src="/images/labish_vr.png"
          alt=""
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-auto opacity-20 object-contain"
          style={{ mixBlendMode: 'screen' }}
        />
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(to right, var(--bg-primary), var(--bg-primary) 60%, transparent)'
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-[150px]" />

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-pink font-medium text-sm tracking-wider uppercase mb-4 block">
              Contact
            </span>
            <h2 className="heading-lg mb-4" style={{ color: 'var(--text-primary)' }}>
              Let's Build the{' '}
              <span className="text-gradient">Future</span>
            </h2>
            <p className="body-md max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <div className="contact-content">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="glass rounded-3xl p-8"
              >
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border transition-all duration-300 input-glow"
                      style={{ 
                        background: 'var(--bg-secondary)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)'
                      }}
                      placeholder="name..."
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border transition-all duration-300 input-glow"
                      style={{ 
                        background: 'var(--bg-secondary)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)'
                      }}
                      placeholder="email..."
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border transition-all duration-300 input-glow resize-none"
                      style={{ 
                        background: 'var(--bg-secondary)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)'
                      }}
                      placeholder="tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-center">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-center">
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Contact Info & Image */}
            <div className="contact-image space-y-8">
              {/* VR Image */}
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img
                    src="/images/labish_vr.png"
                    alt="Labish Bardiya - VR"
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: 'linear-gradient(to top, var(--bg-primary) 20%, transparent)'
                    }}
                  />
                </div>
                
                {/* Floating tag */}
                <div className="absolute bottom-6 left-6 glass px-6 py-3 rounded-full">
                  <span className="font-medium">
                    <span className="text-cyan">Open to</span>{' '}
                    <span style={{ color: 'var(--text-primary)' }}>Collaboration</span>
                  </span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="glass rounded-2xl p-6">
                <h3 
                  className="font-serif-display font-semibold text-lg mb-4"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: 'var(--bg-secondary)' }}
                      >
                        <info.icon className="w-5 h-5 text-purple" />
                      </div>
                      <div>
                        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="hover:text-cyan transition-colors"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p style={{ color: 'var(--text-primary)' }}>{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass rounded-xl p-3 flex flex-col items-center justify-center gap-2 transition-all duration-300 ${social.color}`}
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{social.label}</span>
                  </a>
                ))}
              </div>

              {/* Competitive Programming */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'var(--bg-secondary)' }}
                  >
                    <Code2 className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <h3
                      className="font-serif-display font-semibold text-lg"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Competitive Programming
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      Profiles & handles
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-3">
                  {competitiveProfiles.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border px-4 py-3 flex items-center justify-between gap-3 transition-all hover:scale-[1.01]"
                      style={{
                        background: 'var(--bg-secondary)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      <span className="text-sm font-medium">{p.label}</span>
                      <ExternalLink className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
