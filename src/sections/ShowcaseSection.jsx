import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProjectBadge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-black-50/80 bg-black-100 px-3 py-1 text-sm text-white-50 transition-all duration-300 group-hover:border-blue-50/50 group-hover:bg-black-200">
    {children}
  </span>
);

const ProjectButton = ({ label, href = "#", variant = "primary", onClick }) => {
  const className =
    variant === "ghost"
      ? "inline-flex items-center justify-center rounded-xl border border-black-50 bg-black-100/60 px-4 py-3 text-sm font-semibold text-white-50 transition-all duration-300 hover:bg-black-50 hover:text-black-50"
      : "inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#4C9BFF] to-[#A55CFF] px-4 py-3 text-sm font-semibold text-black rounded-xl transition-all duration-300 hover:brightness-110";

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {label}
      </button>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {label}
    </a>
  );
};

const FeaturedProject = () => {
  return (
    <section
      className="w-full padding-x-lg"
      id="work"
      aria-label="Featured project and portfolio projects"
    >
      <div className="max-w-7xl mx-auto mt-16">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Left: Featured narrative */}
          <div className="xl:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-black-50 bg-black-100">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-28 -left-28 w-72 h-72 rounded-full bg-[#4C9BFF]/20 blur-3xl" />
                <div className="absolute top-10 right-0 w-72 h-72 rounded-full bg-[#A55CFF]/20 blur-3xl" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-1 rounded-full bg-gradient-to-r from-[#4C9BFF]/40 to-[#A55CFF]/40 blur-sm" />
              </div>

              <div className="relative p-6 md:p-8">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-black-50 bg-black-200/40 px-4 py-2">
                      <span className="h-2 w-2 rounded-full bg-[#4C9BFF] shadow-[0_0_24px_rgba(76,155,255,0.6)]" />
                      <span className="text-sm font-semibold text-white-50">
                        Featured · PFE Project
                      </span>
                    </div>
                    <h2 className="mt-4 md:text-4xl text-2xl font-bold tracking-tight">
                      Smart City Platform — Citizen Complaint Management
                    </h2>
                    <p className="text-white-50 mt-3 leading-relaxed md:text-lg">
                      AI-powered Smart City platform with full workflow automation — citizen complaints filed through the app are automatically classified, prioritised by urgency, and routed to the right team — all backed by a secure role-based access model.
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="card-border rounded-2xl p-4">
                    <p className="text-blue-50/90 font-semibold">Problem solved</p>
                    <p className="text-white-50 mt-2 leading-relaxed">
                      Reduce response delays and improve data quality by automating routing, prioritisation, and deduplication of citizen issues.
                    </p>
                  </div>
                  <div className="card-border rounded-2xl p-4">
                    <p className="text-blue-50/90 font-semibold">Technical architecture</p>
                    <p className="text-white-50 mt-2 leading-relaxed">
                      Modular full-stack system: API layer + workflow engine + AI services + dashboards, designed for scalability and secure access.
                    </p>
                  </div>
                  <div className="card-border rounded-2xl p-4 md:col-span-2">
                    <p className="text-blue-50/90 font-semibold">Key AI features</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <ProjectBadge>Intelligent classification</ProjectBadge>
                      <ProjectBadge>Urgency prediction</ProjectBadge>
                      <ProjectBadge>Duplicate detection</ProjectBadge>
                      <ProjectBadge>Analytics-ready outputs</ProjectBadge>
                      <ProjectBadge>Workflow automation</ProjectBadge>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <p className="text-white-50 font-semibold">Technologies used</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Next.js",
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                        "Python",
                        "JWT",
                        "RBAC",
                      ].map((t) => (
                        <ProjectBadge key={t}>{t}</ProjectBadge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="card-border rounded-2xl p-4">
                      <p className="text-blue-50/90 font-semibold">Dashboard preview</p>
                      <p className="text-white-50 mt-2 leading-relaxed">
                        Analytics views for trends, resolution status, and AI-driven prioritisation.
                      </p>
                    </div>
                    <div className="card-border rounded-2xl p-4">
                      <p className="text-blue-50/90 font-semibold">Challenges & solutions</p>
                      <p className="text-white-50 mt-2 leading-relaxed">
                        Addressed data quality with deduplication + confidence-aware routing; enforced security with JWT and RBAC boundaries.
                      </p>
                    </div>
                    <div className="card-border rounded-2xl p-4">
                      <p className="text-blue-50/90 font-semibold">Results & impact</p>
                      <p className="text-white-50 mt-2 leading-relaxed">
                        Faster triage, consistent issue categorisation, and actionable dashboards for operational decision making.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col md:flex-row gap-3 flex-wrap">
                  <ProjectButton label="View on GitHub" href="https://github.com/ayazariat" variant="primary" />
                  <ProjectButton label="Watch Live Demo" href="/videos/citoyen.mp4" variant="ghost" />
                </div>

                <div className="mt-5 flex flex-wrap gap-2 text-white-50 text-sm">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-black-50 bg-black-100/60 px-3 py-1.5">
                    🚀 Frontend — Vercel
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-black-50 bg-black-100/60 px-3 py-1.5">
                    ⚙️ Backend — Render
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-black-50 bg-black-100/60 px-3 py-1.5">
                    🤖 AI Services — Render
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Right: dashboard preview + 3 captures */}
          <div className="xl:col-span-5">
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden border border-black-50 bg-black-100">
                <div className="p-4 flex items-center justify-between">
                  <span className="text-blue-50/90 text-sm font-semibold">Dashboard preview</span>
                  <span className="text-white-50/80 text-sm">role-aware analytics</span>
                </div>
                <div className="relative">
                  <img
                    src="/images/11.png"
                    alt="Smart City dashboard preview mock"
                    className="w-full h-[500px] object-contain"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Triage",
                        "Classification",
                        "Urgency",
                        "Duplicates",
                        "Trends",
                      ].map((k) => (
                        <span
                          key={k}
                          className="text-xs font-semibold rounded-full border border-black-50 bg-black-100/70 px-3 py-1 text-white-50"
                        >
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-2" id="architecture">
                  {[
                    "/images/12.png",
                    "/images/13.png",
                    "/images/14.png",
                  ].map((src, i) => (
                    <div
                      key={src + i}
                      className="relative overflow-hidden rounded-2xl border border-black-50 bg-black-100"
                    >
                      <img
                        src={src}
                        alt="Smart City AI Platform preview capture"
                        className="w-full h-72 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Live Demo Video ─────────────────────────────────── */}
        <div className="mt-20 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#4C9BFF] shadow-[0_0_16px_rgba(76,155,255,0.55)]" />
              <span className="text-sm font-semibold text-blue-50">Live Demo</span>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-black-50 bg-black-100">
              <video
                src="/videos/citoyen.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-contain"
                style={{ maxHeight: "520px" }}
              />
            </div>
          </div>
        </div>

        {/* Projects grid */}
        <div className="mt-12">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Engineering Projects</h3>
              <p className="text-white-50 mt-2 md:text-lg">
                Full-stack systems with AI capabilities, real-time collaboration, and scalable architecture.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["CRDT", "AI APIs", "NLP", "SOA / Microservices"].map((t) => (
                <ProjectBadge key={t}>{t}</ProjectBadge>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {[
              {
                title: "Collaborative Editor — Real-Time Editing Platform",
                date: "April 2026",
                desc: "Built a Google Docs-like editor using CRDT (Yjs) for real-time synchronisation over WebSocket, with offline support by Supabase. Use it to view and share documents anywhere.",
                img: "/images/17.png",
                tech: ["Next.js", "Yjs", "WebSocket", "Supabase", "Tailwind CSS"],
                github: "https://github.com/ayazariat",
              },
              {
                title: "CareerOS — AI Job Application Tracker",
                date: "February 2026",
                desc: "Developed an SaaS that keeps every application in one place: an AI-powered CV vs job offer analyser, a Kanban pipeline, automated follow-up e-mails, and interview-prep summaries.",
                img: "/images/16.png",
                tech: ["Next.js", "PostgreSQL", "Prisma", "OpenAI API"],
                github: "https://github.com/ayazariat",
              },
              {
                title: "DocTalk — Medical AI Assistant",
                date: "May 2025",
                desc: "A medical consultation simulation chatbot with a web interface. The Node.js/Express.js backend handles secure sign-up and sessions, while an NLP module analyses symptoms and responds contextually.",
                img: "/images/15.png",
                tech: ["Python", "Node.js", "Express.js", "NLP", "Bootstrap"],
                github: "https://github.com/ayazariat",
              },
              {
                title: "SOA & Microservices Platform",
                date: "December 2025",
                desc: "Designed a service-oriented architecture with REST & SOAP microservices. The Central Authentication Service is secured with JWT and fronted by a Spring Cloud API Gateway, all containerised with Docker.",
                img: "/images/18.png",
                tech: ["Spring Boot", "Spring Cloud", "JWT", "Docker", "Node.js"],
                github: "https://github.com/ayazariat",
              },
            ].map((p) => (
              <article
                key={p.title}
                className="group relative rounded-3xl overflow-hidden border border-black-50 bg-black-100 card"
              >
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#4C9BFF]/20 blur-3xl" />
                  <div className="absolute top-10 right-0 w-72 h-72 rounded-full bg-[#A55CFF]/20 blur-3xl" />
                </div>

                <div className="relative p-5">
                  <div className="relative overflow-hidden rounded-2xl border border-black-50">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
                  </div>

                  <div className="mt-3">
                    <span className="text-xs font-semibold inline-flex items-center rounded-full border border-blue-50/40 bg-blue-50/10 px-3 py-1 text-blue-50">
                      {p.date}
                    </span>
                  </div>

                  <h4 className="mt-5 text-xl font-bold leading-snug">{p.title}</h4>
                  <p className="text-white-50 mt-2 leading-relaxed">{p.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <ProjectBadge key={t}>{t}</ProjectBadge>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-col sm:flex-row gap-2">
                    <ProjectButton label="View on GitHub" href={p.github} variant="ghost" />
                    <ProjectButton label="Live Demo" href="https://example.com" variant="ghost" />
                    <ProjectButton label="Architecture" href="#architecture" variant="ghost" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ShowcaseSection = () => {
  const rootRef = useRef(null);

  useGSAP(() => {
    if (!rootRef.current) return;

    gsap.timeline({ defaults: { ease: "power2.out" } }).fromTo(
      rootRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 }
    );

    gsap.utils.toArray(".card").forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          delay: i * 0.02,
        }
      );
    });
  }, []);

  return (
    <div ref={rootRef}>
      <FeaturedProject />
    </div>
  );
};

export default ShowcaseSection;

