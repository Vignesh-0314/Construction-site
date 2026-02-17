"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Users,
  Wrench,
  FolderOpen,
  MessageSquare,
  Phone,
  Menu,
  X,
  Building2,
  HardHat,
  PaintBucket,
  Hammer,
  KeyRound,
  Clock,
  ShieldCheck,
  IndianRupee,
  Truck,
  Award,
  ChevronRight,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About Us", href: "#about", icon: Users },
  { label: "Services", href: "#services", icon: Wrench },
  { label: "Projects", href: "#projects", icon: FolderOpen },
  { label: "Testimonials", href: "#testimonials", icon: MessageSquare },
  { label: "Contact", href: "#contact", icon: Phone },
];

const services = [
  {
    title: "Residential Construction",
    description:
      "Building dream homes with precision craftsmanship and modern design principles.",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
  },
  {
    title: "Commercial Projects",
    description:
      "State-of-the-art commercial spaces designed for productivity and growth.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Transforming existing spaces into modern marvels with expert renovation.",
    icon: PaintBucket,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop",
  },
  {
    title: "Interior & Exterior Works",
    description:
      "Complete interior and exterior finishing with premium quality materials.",
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=300&fit=crop",
  },
  {
    title: "Turnkey Projects",
    description:
      "End-to-end project delivery from design to handover, hassle-free.",
    icon: KeyRound,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
  },
];

const projects = [
  {
    name: "Lakshmi Residency",
    city: "Chennai",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=400&fit=crop",
  },
  {
    name: "Aravind Tech Park",
    city: "Coimbatore",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=400&fit=crop",
  },
  {
    name: "Srinivas Tower",
    city: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=500&h=400&fit=crop",
  },
  {
    name: "Royal Gardens Villas",
    city: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=400&fit=crop",
  },
  {
    name: "Murugan Business Center",
    city: "Madurai",
    image:
      "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=500&h=400&fit=crop",
  },
  {
    name: "Vetrivel Heights",
    city: "Trichy",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=500&h=400&fit=crop",
  },
];

const whyChooseUs = [
  { icon: Award, title: "15+ Years Experience", description: "Trusted expertise since 2010" },
  { icon: HardHat, title: "Skilled Engineers", description: "Certified professionals on every project" },
  { icon: ShieldCheck, title: "Quality Materials", description: "Only premium-grade construction materials" },
  { icon: IndianRupee, title: "Transparent Pricing", description: "No hidden costs, clear estimates" },
  { icon: Truck, title: "On-Time Delivery", description: "Committed to meeting every deadline" },
];

const testimonials = [
  {
    author: {
      name: "Rajesh Kumar",
      handle: "Chennai",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "Excellent workmanship and timely completion. Sri Vetrivel Constructions delivered our commercial building exactly as promised. Highly recommended!",
  },
  {
    author: {
      name: "Priya Sharma",
      handle: "Coimbatore",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "Highly professional team with transparent pricing. They kept us informed at every stage and the quality of construction is outstanding.",
  },
  {
    author: {
      name: "Arjun Reddy",
      handle: "Hyderabad",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    text: "Our dream home was delivered exactly as promised. The attention to detail and use of quality materials makes Sri Vetrivel stand apart.",
  },
  {
    author: {
      name: "Meena Sundaram",
      handle: "Bangalore",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "From planning to handover, everything was seamless. Their team of engineers is highly skilled and very responsive to our needs.",
  },
  {
    author: {
      name: "Karthik Rajan",
      handle: "Madurai",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    text: "We chose Sri Vetrivel for our factory construction and it was the best decision. Quality work delivered on time and within budget.",
  },
];

// --- Navbar ---
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gold/20"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-gold" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-navy tracking-tight font-serif">
                  SRI VETRIVEL
                </span>
                <span className="block text-[10px] tracking-[0.2em] text-gold-dark font-medium -mt-1">
                  CONSTRUCTIONS
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.href.replace("#", "")
                      ? "text-gold-dark bg-gold/10"
                      : "text-navy/70 hover:text-navy hover:bg-navy/5"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 px-6 py-2.5 bg-gold text-white text-sm font-semibold rounded-lg hover:bg-gold-dark transition-colors shadow-md hover:shadow-lg"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-navy hover:bg-navy/5"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 shadow-2xl border-l border-gold/20 p-6 pt-20"
          >
            <button
              className="absolute top-5 right-5 p-2 rounded-lg text-navy hover:bg-navy/5"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      activeSection === item.href.replace("#", "")
                        ? "text-gold-dark bg-gold/10"
                        : "text-navy/70 hover:text-navy hover:bg-navy/5"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-6 py-3 bg-gold text-white text-sm font-semibold rounded-lg hover:bg-gold-dark transition-colors text-center"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}

// --- Hero Section ---
function HeroSection() {
  return (
    <section id="home">
      <BackgroundPaths>
        <div className="container mx-auto px-4 md:px-6 text-center py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight font-serif">
                <span className="text-navy">Building Trust.</span>
                <br />
                <span className="text-gold">Creating Landmarks.</span>
              </h1>
            </motion.div>
            <p className="text-lg md:text-xl text-navy/60 mb-10 max-w-2xl mx-auto">
              Residential | Commercial | Industrial Construction Experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-white font-semibold rounded-xl shadow-lg hover:bg-gold-dark transition-colors text-base"
              >
                Get a Free Quote
                <ChevronRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-xl shadow-lg hover:bg-navy-light transition-colors text-base"
              >
                View Our Projects
                <FolderOpen className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </BackgroundPaths>
    </section>
  );
}

// --- About Section ---
function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden">
      <AuroraBackground className="py-24 md:py-32 min-h-0">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=500&fit=crop"
                  alt="Construction site"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold text-white p-6 rounded-xl shadow-xl hidden md:block">
                <div className="text-3xl font-bold font-serif">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-6 font-serif">
                Crafting Excellence in Every Structure
              </h2>
              <p className="text-navy/70 mb-6 leading-relaxed">
                Sri Vetrivel Constructions is a leading construction company based in
                Tamil Nadu, India. With over 15 years of experience, we specialize in
                delivering residential, commercial, and industrial projects that stand
                the test of time.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Quality Workmanship",
                  "On-Time Delivery",
                  "Full Transparency",
                  "Modern Techniques",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-navy/80"
                  >
                    <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
}

// --- Services Section ---
function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 font-serif">
            What We Offer
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-2xl border border-border overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4 -mt-12 relative z-10 border-2 border-white shadow-md bg-white">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2 font-serif">
                    {service.title}
                  </h3>
                  <p className="text-navy/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- Projects Section ---
function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 font-serif">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-navy font-serif">
                  {project.name}
                </h3>
                <div className="flex items-center gap-1 mt-1 text-navy/50">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{project.city}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Why Choose Us ---
function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 font-serif">
            Why Choose Sri Vetrivel?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {whyChooseUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="text-center group"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                  className="w-16 h-16 mx-auto bg-gold/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors"
                >
                  <Icon className="w-8 h-8 text-gold" />
                </motion.div>
                <h3 className="text-white font-bold text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-white/50 text-xs">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- Testimonials Section ---
function TestimonialsBlock() {
  return (
    <section id="testimonials">
      <TestimonialsSection
        title="What Our Clients Say"
        description="Trusted by hundreds of homeowners and businesses across South India"
        testimonials={testimonials}
        className="bg-white"
      />
    </section>
  );
}

// --- Contact Section ---
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
    setFormData({ name: "", phone: "", email: "", projectType: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 font-serif">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-lg border border-border space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all bg-white"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Project Type
                </label>
                <select
                  required
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all bg-white text-navy"
                >
                  <option value="">Select project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="renovation">Renovation & Remodeling</option>
                  <option value="interior">Interior & Exterior</option>
                  <option value="turnkey">Turnkey Project</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all bg-white resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-gold text-white font-semibold rounded-xl hover:bg-gold-dark transition-colors shadow-md hover:shadow-lg text-base"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="text-xl font-bold text-navy mb-6 font-serif">
                Our Office
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-navy text-sm">Address</p>
                    <p className="text-navy/60 text-sm">
                      No. 45, Anna Nagar Main Road,
                      <br />
                      Chennai, Tamil Nadu 600040, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-navy text-sm">Phone</p>
                    <p className="text-navy/60 text-sm">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-navy text-sm">Email</p>
                    <p className="text-navy/60 text-sm">
                      info@srivetrivelconstructions.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0080692193424!2d80.2088!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjciTiA4MMKwMTInMzEuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="bg-white border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-gold" />
              </div>
              <div>
                <span className="text-lg font-bold text-navy tracking-tight font-serif">
                  SRI VETRIVEL
                </span>
                <span className="block text-[10px] tracking-[0.2em] text-gold-dark font-medium -mt-1">
                  CONSTRUCTIONS
                </span>
              </div>
            </div>
            <p className="text-navy/60 text-sm leading-relaxed">
              Building trust and creating landmarks across South India since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-navy font-bold mb-4 font-serif">Quick Links</h4>
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-navy/60 hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-navy font-bold mb-4 font-serif">Services</h4>
            <div className="space-y-2">
              {services.map((s) => (
                <span
                  key={s.title}
                  className="block text-sm text-navy/60"
                >
                  {s.title}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-navy font-bold mb-4 font-serif">Contact</h4>
            <div className="space-y-2 text-sm text-navy/60">
              <p>+91 98765 43210</p>
              <p>info@srivetrivelconstructions.com</p>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-navy/5 rounded-lg flex items-center justify-center text-navy/40 hover:bg-gold hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-navy/40">
            &copy; 2026 SRI VETRIVEL CONSTRUCTIONS. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// --- Main Page ---
export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUs />
      <TestimonialsBlock />
      <ContactSection />
      <Footer />
    </div>
  );
}
