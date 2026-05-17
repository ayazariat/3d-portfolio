import TitleHeader from "../components/TitleHeader";

const CERTIFICATIONS = [
  {
    title: "Introduction to Artificial Intelligence",
    org: "GOMYCODE",
    period: "Jun – Aug 2025",
  },
  {
    title: "Introduction to Amazon EC2",
    org: "AWS Training & Certification",
    period: "Oct 2025",
  },
  {
    title: "Linux Essentials Preparation",
    org: "Cisco Networking Academy",
    period: "Jun 2025",
  },
  {
    title: "Introduction to Data Science",
    org: "Cisco Networking Academy",
    period: "May 2024",
  },
];

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-black-50/60 bg-black-100/80 px-4 py-2 text-sm text-white-50">
    {children}
  </span>
);

const Testimonials = () => {
  return (
    <section id="certs" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Certifications & Affiliations"
          sub="📜 Continuous Learning & Professional Growth"
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map(({ title, org, period }) => (
            <div
              key={title}
              className="card-border rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 hover:border-blue-50/40"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#4C9BFF] shadow-[0_0_16px_rgba(76,155,255,0.55)]" />
                <span className="text-xs font-semibold text-blue-50">{period}</span>
              </div>
              <p className="text-white font-semibold text-base leading-snug">
                {title}
              </p>
              <p className="text-white-50 text-sm">{org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
