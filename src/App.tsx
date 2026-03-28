import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Instagram,
  Mail,
  Phone,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Rocket,
  Code2,
  Briefcase,
  Globe,
  Menu,
  X
} from "lucide-react";
import LoadingScreen from "./components/LoadingScreen";
import {
  navItems,
  services,
  projects,
} from "./data/portfolioData";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="bg-slate-950 text-white min-h-screen relative overflow-x-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-120px] left-[-100px] w-[320px] h-[320px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[20%] right-[-120px] w-[340px] h-[340px] bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-140px] left-[30%] w-[380px] h-[380px] bg-indigo-500/20 blur-[140px] rounded-full animate-pulse" />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-widest text-cyan-400"
          >
            BAGULESH
          </motion.a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 hover:text-cyan-400 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-cyan-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-slate-950/95 border-t border-white/10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-300 hover:text-cyan-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-28"
      >
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Founder • Developer • Creator
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                Bagulesh
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
              I build futuristic digital experiences, personal brand websites,
              startup identity pages, and visually engaging modern web
              interfaces with smooth animations and premium UI.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-slate-950 flex items-center gap-2 shadow-lg shadow-cyan-500/30"
              >
                View Projects <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl border border-cyan-400/40 hover:border-cyan-400 hover:bg-cyan-500/10 transition font-semibold"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-slate-300">
              <a
                href="https://github.com/Bagulesh-0705"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition"
              >
                <Github size={18} /> GitHub
              </a>

              <a
                href="https://www.instagram.com/b.t.__bagulesh0705?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition"
              >
                <Instagram size={18} /> Instagram
              </a>

              <a
                href="mailto:baguesh.it@gmail.com"
                className="flex items-center gap-2 hover:text-cyan-400 transition"
              >
                <Mail size={18} /> Email
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-[500px] aspect-square rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,0.15)] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_60%)]" />
              <div className="absolute inset-6 rounded-[1.5rem] border border-white/10" />

              <div className="absolute top-6 left-6 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs tracking-widest uppercase">
                Portfolio Core
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Code2 size={22} />, label: "Developer" },
                    { icon: <Rocket size={22} />, label: "Founder" },
                    { icon: <Briefcase size={22} />, label: "Business" },
                    { icon: <Sparkles size={22} />, label: "Creative UI" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
                    >
                      <div className="text-cyan-400 mb-2">{item.icon}</div>
                      <p className="text-sm font-medium text-slate-200">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-[22%] right-[12%] w-20 h-20 rounded-full border border-cyan-400/30 bg-cyan-400/10 blur-[1px]"
              />

              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-[36%] left-[10%] w-12 h-12 rounded-full border border-blue-400/30 bg-blue-400/10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building a modern digital identity with design + tech
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              I’m Bagulesh — a creator focused on building premium personal,
              business, and startup web experiences. My goal is to create
              visually strong, futuristic, responsive, and interactive websites
              that feel modern and impactful across every screen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {[
              "Modern Portfolio Design",
              "Responsive UI/UX",
              "Startup Branding Presence",
              "Smooth Web Animations",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg hover:border-cyan-400/40 transition"
              >
                <p className="text-lg font-semibold text-slate-100">{skill}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              What I can build
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/40 hover:-translate-y-2 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-5">
                  <Sparkles size={22} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed">{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
              Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Selected work & concepts
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 backdrop-blur-xl hover:border-cyan-400/40 hover:-translate-y-2 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-5">
                  <Globe size={24} />
                </div>

                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition flex items-center gap-2"
                  >
                    Live <ExternalLink size={16} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl border border-white/10 hover:border-cyan-400/40 transition flex items-center gap-2"
                  >
                    GitHub <Github size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup */}
      <section
        id="startup"
        className="py-24 px-6 md:px-16 relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative rounded-[32px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl shadow-[0_0_60px_rgba(34,211,238,0.08)] p-8 md:p-14 overflow-hidden">

            {/* background glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

            {/* startup branding */}
            <div className="relative z-10 flex flex-col items-center text-center gap-6 mb-10">

              {/* floating logo */}
              <motion.img
                src="/techyoxtech-logo.png"
                alt="TechyoXtech Logo"
                className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 3, -3, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* blinking TechyoXtech text image */}
              <motion.img
                src="/techyoxtech-text.png"
                alt="TechyoXtech"
                className="w-44 md:w-60 h-auto object-contain"
                animate={{
                  opacity: [1, 0.7, 1],
                  scale: [1, 1.03, 1],
                  filter: [
                    "drop-shadow(0 0 10px rgba(34,211,238,0.3))",
                    "drop-shadow(0 0 25px rgba(34,211,238,0.8))",
                    "drop-shadow(0 0 10px rgba(34,211,238,0.3))",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <p className="text-cyan-400 tracking-[0.4em] text-sm uppercase">
                Startup
              </p>
            </div>

            {/* description */}
            <p className="relative z-10 text-slate-300 text-lg leading-9 max-w-4xl mx-auto text-center">
              TechyoXtech is my futuristic startup focused on premium websites,
              IT services, AI automation, startup branding, and modern digital
              experiences for next-generation businesses.
            </p>

            {/* services cards */}
            <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                "Web Development",
                "IT Solutions",
                "Startup Branding",
                "AI Automation",
              ].map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(34,211,238,0.35)",
                  }}
                  className="rounded-3xl border border-cyan-400/20 bg-slate-900/50 backdrop-blur-xl p-6 text-center cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {service}
                  </h3>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="relative z-10 flex flex-wrap justify-center gap-4 mt-10">
              <a
                href="https://www.instagram.com/techy_ox_tech"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 hover:scale-105 transition-all duration-300 font-semibold text-slate-950 shadow-xl"
              >
                Visit Instagram
                <ExternalLink size={18} />
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-cyan-400/40 bg-white/5 hover:bg-white/10 hover:scale-105 transition-all duration-300 font-semibold text-white backdrop-blur-lg"
              >
                Visit Website
                <Globe size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s build something futuristic
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
            Whether it’s a personal brand portfolio, startup presence, or modern
            digital showcase — I’m open to building visually strong and creative
            web experiences.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:baguesh.it@gmail.com"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg hover:border-cyan-400/40 transition"
            >
              <Mail className="mx-auto text-cyan-400 mb-4" size={28} />
              <p className="font-semibold text-lg">Email</p>
              <p className="text-slate-300 mt-2 break-all">baguesh.it@gmail.com</p>
            </a>

            <a
              href="tel:+916385917843"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg hover:border-cyan-400/40 transition"
            >
              <Phone className="mx-auto text-cyan-400 mb-4" size={28} />
              <p className="font-semibold text-lg">Phone</p>
              <p className="text-slate-300 mt-2">+91 6385917843</p>
            </a>

            <a
              href="https://www.instagram.com/b.t.__bagulesh0705?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg hover:border-cyan-400/40 transition"
            >
              <Instagram className="mx-auto text-cyan-400 mb-4" size={28} />
              <p className="font-semibold text-lg">Instagram</p>
              <p className="text-slate-300 mt-2">@b.t.__bagulesh0705</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <div className="flex flex-wrap items-center justify-center gap-2 text-center text-sm text-slate-400">
            <span>© 2026</span>

            <img
              src="/techyoxtech-text.png"
              alt="TechyoXtech"
              className="w-20 md:w-24 h-auto object-contain"
            />

            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Bagulesh-0705"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/b.t.__bagulesh0705?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              Instagram
            </a>
            <a
              href="https://www.instagram.com/techy_ox_tech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              TechyoXtech
            </a>
            <a
              href="mailto:baguesh.it@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}