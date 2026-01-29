import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Check, ArrowRight,
  Users, Shield, Heart, Star, Globe, Mail, Phone, Play
} from 'lucide-react';

/**
 * UTILITY: Scroll Reveal Component
 * Adds a slow, cinematic fade-up animation with staggered children
 */
const Reveal = ({ children, delay = 0, width = "100%", stagger = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${width} relative`}>
      {React.Children.map(children, (child, index) => (
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          style={{ transitionDelay: `${delay + (index * stagger)}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

/**
 * COMPONENT: Navigation
 * Bright, airy, sticky with glassmorphism
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Context", href: "#problem" },
    { name: "Talks", href: "#talks" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
  ];

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm border-b border-zinc-100" : "bg-transparent py-8"
      }`}>
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center text-zinc-900">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('#hero')}>
          <div className={`w-8 h-8 flex items-center justify-center font-serif font-bold text-lg rounded-sm transition-all duration-300 ${scrolled ? 'bg-zinc-900 text-white' : 'bg-zinc-900 text-white'}`}>I</div>
          <div className="font-serif text-xl tracking-wider font-light">
            INSIDE OUT <span className="font-bold">MINDSET</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-amber-600 transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-amber-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#booking')}
            className={`px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${scrolled ? 'border-zinc-900 hover:bg-zinc-900 hover:text-white' : 'bg-white border-white hover:bg-zinc-100'}`}
          >
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-900">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white p-8 flex flex-col justify-center items-center space-y-8 z-40 animate-fade-in">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-zinc-900"><X size={32} /></button>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-3xl font-serif text-zinc-900 hover:text-amber-600 font-light"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#booking')}
            className="px-10 py-4 bg-zinc-900 text-white font-bold uppercase tracking-widest hover:bg-amber-600 transition-colors"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

/**
 * COMPONENT: Hero Section
 * Bright, High-Key, Optimistic
 */
const Hero = () => (
  <section id="hero" className="relative h-screen flex items-center justify-center bg-white overflow-hidden">

    {/* Background Image (High Key) */}
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
        alt="Students in a bright classroom"
        className="w-full h-full object-cover opacity-20 scale-105 animate-slow-pan"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white"></div>
    </div>

    <div className="relative max-w-[1400px] mx-auto px-6 w-full z-10 pt-20">
      <div className="grid md:grid-cols-12 gap-12 items-center">

        <div className="md:col-span-8">
          <Reveal stagger={100}>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-amber-500"></div>
              <span className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase">Prevention • Compassion • Accountability</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light text-zinc-900 leading-[0.9] tracking-tight mb-8">
              Real choices.<br />
              <span className="italic text-zinc-400 font-light">Real hope.</span>
            </h1>

            <p className="text-lg md:text-2xl text-zinc-600 max-w-2xl font-light leading-relaxed my-10">
              Helping students choose respect and self-control before problems escalate.
              A purposeful approach built on <span className="font-normal text-zinc-900 border-b border-amber-300">connection, not fear.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-5 bg-zinc-900 text-white text-sm font-bold uppercase tracking-widest hover:bg-amber-600 transition-colors duration-300 shadow-xl shadow-zinc-900/10"
              >
                Request Booking
              </button>
              <button
                className="group flex items-center gap-4 text-zinc-900 uppercase tracking-widest text-xs font-bold hover:text-amber-600 transition-colors"
                onClick={() => document.getElementById('talks').scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-amber-600 transition-colors">
                  <ArrowRight size={16} />
                </div>
                Explore Talks
              </button>
            </div>
          </Reveal>
        </div>

        {/* Decorative Side Element (Magazine Style Quote) */}
        <div className="hidden md:block md:col-span-4 text-right">
          <Reveal delay={800}>
            <div className="inline-block p-8 bg-zinc-50 border border-zinc-100 shadow-sm relative">
              <Star className="text-amber-500 mb-4 absolute -top-4 -left-4 bg-white p-1 rounded-full border border-zinc-100 shadow-sm" size={32} fill="currentColor" />
              <div className="text-left">
                <p className="text-zinc-600 text-lg italic font-serif leading-relaxed">
                  "The earlier we interrupt the pattern, the better the outcome."
                </p>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </div>
  </section>
);

/**
 * COMPONENT: The Context (Clean, Clinical, Editorial)
 */
const Problem = () => (
  <section id="problem" className="py-32 bg-stone-50 relative border-t border-zinc-100">
    <div className="max-w-[1400px] mx-auto px-6">

      <div className="grid md:grid-cols-2 gap-20 items-center">
        <Reveal>
          <div className="relative group">
            {/* Image Stack */}
            <div className="relative z-10 overflow-hidden shadow-2xl shadow-zinc-200/50">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop"
                alt="School hallway"
                className="w-full aspect-[4/5] object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out"
              />
            </div>
            {/* Decorative offset border - Outline style */}
            <div className="absolute top-6 -left-6 w-full h-full border-2 border-zinc-200 z-0 hidden md:block group-hover:top-4 group-hover:-left-4 transition-all duration-500"></div>

            <div className="absolute -bottom-10 -right-10 bg-white p-8 z-20 max-w-xs shadow-xl border border-zinc-100">
              <h4 className="text-amber-600 font-serif text-2xl italic mb-2">"Status Games"</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Bullying and social pressure spread quickly. We interrupt the cycle with clarity.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} stagger={100}>
          <div>
            <h2 className="text-xs font-bold text-amber-600 uppercase tracking-[0.3em] mb-6">The Context</h2>
            <h3 className="text-5xl md:text-6xl font-serif text-zinc-900 mb-10 leading-none">
              Why schools & <br /><span className="text-zinc-400 italic">families need this.</span>
            </h3>

            <div className="space-y-12">
              <div className="group cursor-default">
                <div className="flex items-baseline gap-6 border-b border-zinc-200 pb-8 group-hover:border-amber-400 transition-colors duration-500">
                  <span className="text-amber-500 font-serif text-2xl italic opacity-50 group-hover:opacity-100 transition-opacity">01</span>
                  <div>
                    <h4 className="text-zinc-900 text-lg font-bold mb-2">Escalating Behaviour</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-md">Small issues—impulsive choices, 'status' bullying—turn into bigger legal and social issues if not addressed early.</p>
                  </div>
                </div>
              </div>

              <div className="group cursor-default">
                <div className="flex items-baseline gap-6 border-b border-zinc-200 pb-8 group-hover:border-amber-400 transition-colors duration-500">
                  <span className="text-amber-500 font-serif text-2xl italic opacity-50 group-hover:opacity-100 transition-opacity">02</span>
                  <div>
                    <h4 className="text-zinc-900 text-lg font-bold mb-2">Reactive vs. Proactive</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-md">Parents and educators often feel worried and reactive. We provide a framework to get ahead of the problem.</p>
                  </div>
                </div>
              </div>

              <div className="group cursor-default">
                <div className="flex items-baseline gap-6 border-b border-zinc-200 pb-8 group-hover:border-amber-400 transition-colors duration-500">
                  <span className="text-amber-500 font-serif text-2xl italic opacity-50 group-hover:opacity-100 transition-opacity">03</span>
                  <div>
                    <h4 className="text-zinc-900 text-lg font-bold mb-2">The "Scared Straight" Trap</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-md">Fear doesn't work long-term. We replace shame and lectures with understanding, connection, and real tools.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/**
 * COMPONENT: Talk Cards (Minimalist, White)
 */
const Talks = () => {
  return (
    <section id="talks" className="py-32 bg-white text-zinc-900 relative">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-zinc-100 pb-8">
          <Reveal stagger={50}>
            <h2 className="text-5xl md:text-7xl font-serif leading-none text-zinc-900">
              Three Core<br />Conversations
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-zinc-500 max-w-xs text-sm font-medium leading-relaxed mb-2 text-right">
              Tailored by audience.<br />Built for impact.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">

          {[
            {
              cat: "Elementary",
              title: "Confidence, Kindness & Belonging",
              desc: "A practical session on understanding bullying and building empathy. Simple scripts for 'what to do'.",
              img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
              icon: <Heart size={20} className="text-amber-600" />
            },
            {
              cat: "High School",
              title: "Identity, Pressure & Consequences",
              desc: "Direct talk on insecurity, image, and decision-making under stress. Spotting blind spots before they escalate.",
              img: "https://images.unsplash.com/photo-1427504494785-3a9ca28497b1?q=80&w=2070&auto=format&fit=crop",
              icon: <Users size={20} className="text-amber-600" />
            },
            {
              cat: "Parents",
              title: "Raising Confident Kids",
              desc: "Prevention-focused talk on connection and boundaries. How strong relationships reduce vulnerability to negative influence.",
              img: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=1925&auto=format&fit=crop",
              icon: <Shield size={20} className="text-amber-600" />
            }
          ].map((item, i) => (
            <Reveal delay={i * 200} key={i}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[3/4] mb-8 bg-zinc-100 shadow-md group-hover:shadow-2xl transition-all duration-700">
                  <img
                    src={item.img}
                    alt={item.cat}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 p-6 bg-white/90 backdrop-blur-sm m-4 rounded-full shadow-sm">
                    {item.icon}
                  </div>
                </div>
                <div className="pr-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">{item.cat}</span>
                  <h3 className="text-3xl font-serif font-medium text-zinc-900 mt-2 mb-4 group-hover:text-amber-600 transition-colors">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6 border-l-2 border-zinc-100 pl-4 group-hover:border-amber-200 transition-colors">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-900 group-hover:gap-4 transition-all">
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * COMPONENT: About Mindy (Warm, Personal, Magazine Feature)
 */
const Bio = () => (
  <section id="about" className="py-32 bg-amber-50 text-zinc-900 relative overflow-hidden">

    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* Typographic Composition */}
        <div className="order-2 lg:order-1">
          <Reveal stagger={50}>
            <div className="inline-block px-4 py-2 bg-white text-zinc-900 text-[10px] font-bold uppercase tracking-widest mb-8 border border-zinc-200 shadow-sm">
              The Guide
            </div>
            <h2 className="text-5xl md:text-8xl font-serif mb-12 leading-[0.9] text-zinc-900">
              Empathy born <br />
              <span className="text-amber-600 italic">from experience.</span>
            </h2>

            <div className="columns-1 md:columns-2 gap-12 text-zinc-600 text-sm leading-relaxed">
              <p className="mb-6">
                <span className="text-zinc-900 font-bold uppercase tracking-wide text-xs block mb-2">My Story</span>
                My name is Mindy Bhandher. I was raised in Surrey, BC. I take full responsibility for my past. I was convicted of second-degree murder and spent 12.5 years incarcerated. I know what poor decision-making looks like from the inside.
              </p>
              <p>
                <span className="text-zinc-900 font-bold uppercase tracking-wide text-xs block mb-2">The Mission</span>
                I’ve worked hard to understand what leads to that behaviour, how it escalates, and how we can interrupt it early. This is not a "scared straight" approach. The goal is understanding: helping people see what drives harmful behaviour.
              </p>
              <p className="mb-6 break-inside-avoid-column">
                <span className="text-zinc-900 font-bold uppercase tracking-wide text-xs block mb-2">The Purpose</span>
                I’m also a father of two. My purpose is to help build a world where my daughter and other kids grow up feeling safe. Emotional needs being met is not "soft." It’s protection.
              </p>
            </div>

            <div className="mt-16 pt-8 border-t border-amber-200/50 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-zinc-400 font-serif text-3xl italic">"Small choices, made early,<br />change everything."</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Cinematic Portrait */}
        <div className="order-1 lg:order-2 relative px-8 lg:px-0">
          <Reveal delay={300}>
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                alt="Mindy Bhandher Portrait"
                className="w-full aspect-[4/5] object-cover grayscale contrast-100 shadow-2xl rounded-sm"
              />
              {/* Overlapping Cultural Card */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 w-72 shadow-2xl border border-zinc-50 hidden md:block">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-amber-100 rounded-full text-amber-600"><Globe size={20} /></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Connection</span>
                </div>
                <h4 className="font-serif text-zinc-900 text-xl mb-2">Punjabi Fluent</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Speaking directly to families in the language and cultural context that lands.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

/**
 * COMPONENT: The Plan / Process (Grid Layout)
 */
const Process = () => (
  <section id="process" className="py-32 bg-white relative">
    <div className="max-w-[1400px] mx-auto px-6">

      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <h2 className="text-5xl font-serif text-zinc-900 mb-6">Simple<br />Logistics</h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              We make it easy to say yes. Simple scheduling, clear expectations, and professional delivery tailored to your school's schedule.
            </p>
            <div className="p-8 bg-zinc-50 border border-zinc-100">
              <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-400 mb-6">Format Options</h4>
              <ul className="space-y-4">
                {["Assembly Talk (45-60min)", "Classroom Workshop", "Parent Session (PM)"].map((opt, i) => (
                  <li key={i} className="flex items-center gap-4 text-zinc-900 text-sm font-medium">
                    <Check size={16} className="text-amber-500" />
                    {opt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={200} stagger={100}>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Select Audience", desc: "Elementary, High School, Staff, or Parents." },
                { step: "02", title: "Choose Format", desc: "Assembly for broad reach, or split sessions." },
                { step: "03", title: "Confirm Date", desc: "We tailor the content to your school culture." }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-zinc-100 p-8 hover:border-amber-400 hover:shadow-xl transition-all duration-300 group">
                  <span className="text-5xl font-serif text-zinc-100 group-hover:text-amber-500/20 transition-colors mb-8 block">{item.step}</span>
                  <h3 className="text-lg font-bold mb-3 text-zinc-900">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-12 bg-zinc-900 text-white flex flex-col md:flex-row justify-between items-center gap-8 rounded-sm shadow-2xl">
              <div>
                <h3 className="text-2xl font-serif italic mb-2">Ready to ensure safety?</h3>
                <p className="text-zinc-400 text-sm">Dates fill up quickly for the upcoming semester.</p>
              </div>
              <button
                onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 bg-white text-zinc-900 font-bold uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-colors"
              >
                Book Now
              </button>
            </div>
          </Reveal>
        </div>
      </div>

    </div>
  </section>
);

/**
 * COMPONENT: Booking Form (Inverted Dark for contrast)
 */
const Booking = () => (
  <section id="booking" className="py-32 bg-zinc-950 text-white relative">
    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <Reveal>
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-zinc-900 rounded-full mb-6">
            <Mail className="text-amber-500" size={24} />
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">Start the Conversation</h2>
          <p className="text-zinc-400 font-light">Tell us what you're planning. We'll respond within 48 hours.</p>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="bg-zinc-900/50 p-8 md:p-12 border border-zinc-800 shadow-2xl backdrop-blur-sm rounded-sm">
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2 group">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest group-focus-within:text-amber-500 transition-colors">Name</label>
                <input type="text" className="w-full p-4 bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-zinc-700" placeholder="Full Name" />
              </div>
              <div className="space-y-2 group">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest group-focus-within:text-amber-500 transition-colors">Role / Organization</label>
                <input type="text" className="w-full p-4 bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-zinc-700" placeholder="Principal, Teacher, etc." />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2 group">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest group-focus-within:text-amber-500 transition-colors">Email</label>
                <input type="email" className="w-full p-4 bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-zinc-700" placeholder="name@school.com" />
              </div>
              <div className="space-y-2 group">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest group-focus-within:text-amber-500 transition-colors">Phone</label>
                <input type="tel" className="w-full p-4 bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-zinc-700" placeholder="(555) 555-5555" />
              </div>
            </div>

            <div className="space-y-2 group">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest group-focus-within:text-amber-500 transition-colors">Audience Interest</label>
              <select className="w-full p-4 bg-zinc-950 border border-zinc-800 text-zinc-400 focus:text-white focus:outline-none focus:border-amber-500 transition-all">
                <option>Elementary Students</option>
                <option>High School Students</option>
                <option>Parents (English)</option>
                <option>Parents (Punjabi)</option>
                <option>Staff / Leadership</option>
              </select>
            </div>

            <div className="space-y-2 group">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest group-focus-within:text-amber-500 transition-colors">Message / Goals</label>
              <textarea rows="4" className="w-full p-4 bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-zinc-700" placeholder="What are the key issues you want to address?"></textarea>
            </div>

            <button type="button" className="w-full py-6 bg-white hover:bg-amber-500 hover:text-white text-zinc-950 font-bold uppercase tracking-[0.2em] transition-all text-xs border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Request Booking Information
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  </section>
);

/**
 * COMPONENT: Footer
 */
const Footer = () => (
  <footer className="bg-zinc-950 text-zinc-500 py-12 border-t border-zinc-900">
    <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-center md:text-left">
        <h4 className="font-serif font-bold text-white text-xl tracking-wider">INSIDE OUT <span className="text-amber-600">MINDSET</span></h4>
        <p className="text-xs uppercase tracking-widest mt-2">British Columbia, Canada</p>
      </div>

      <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
        <a href="#hero" className="hover:text-white transition-colors">Home</a>
        <a href="#talks" className="hover:text-white transition-colors">Talks</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
      </div>

      <div className="flex gap-4">
        <a href="#" className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
          <Mail size={16} />
        </a>
        <a href="#" className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
          <Phone size={16} />
        </a>
      </div>
    </div>
    <div className="text-center text-[10px] text-zinc-800 mt-12 uppercase tracking-widest">
      &copy; {new Date().getFullYear()} Inside Out Mindset. Designed with Purpose.
    </div>
  </footer>
);

/**
 * MAIN APP
 */
const App = () => {
  return (
    <div className="font-sans antialiased text-zinc-900 selection:bg-amber-200 selection:text-zinc-900 bg-white">
      <Navbar />
      <Hero />
      <Problem />
      <Talks />
      <Bio />
      <Process />
      <Booking />
      <Footer />
    </div>
  );
};

export default App;
