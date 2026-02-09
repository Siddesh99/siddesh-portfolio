import React, { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  MapPin,
} from "lucide-react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const capabilities = [
    {
      title: "Technical Marketing & Application Support",
      points: [
        "Supporting technical understanding of products and applications",
        "Explaining product capabilities, limitations, and suitability",
        "Assisting customers during component evaluation phases",
      ],
    },
    {
      title: "Component Engineering",
      points: [
        "Electronic component selection based on application needs",
        "Alternate component recommendations",
        "Awareness of availability and lifecycle considerations",
      ],
    },
    {
      title: "BOM Optimization",
      points: [
        "Supporting BOM optimization with technical perspective",
        "Suggesting technically compatible alternates",
        "Reducing sourcing and lifecycle risks",
      ],
    },
    {
      title: "OEM Technical Support",
      points: [
        "Working with design engineers and procurement teams",
        "Acting as a technical point of contact between OEMs and manufacturers",
        "Supporting customers across PAN-India",
      ],
    },
  ];

  const components = [
    {
      category: "Power & Protection",
      items: ["AC/DC Power Supplies", "DC/DC Converters", "Relays & DC Contactors"],
    },
    {
      category: "Semiconductors",
      items: ["Discrete Semiconductors", "Optoelectronics"],
    },
    {
      category: "Passive & Electromechanical",
      items: [
        "Passive Components (Resistors, Capacitors, Magnetics)",
        "Connectors & Switches",
        "Fans & Blowers / Thermal Solutions",
      ],
    },
  ];

  const domains = [
    "EV & E-Mobility Systems",
    "Renewable Energy (Solar Inverters, Wind, BESS)",
    "Power Electronics & UPS",
    "Industrial Automation",
    "Railway Electronics",
    "Medical Electronics",
    "OEM Embedded & Power Systems",
  ];

  const skills = [
    "Technical Marketing Engineering",
    "Field Application Engineering (FAE)",
    "Component Engineering",
    "Application Engineering (Electronics)",
    "Power Electronics",
    "BOM Optimization",
    "Design-In Support",
    "EV & Renewable Energy Electronics",
    "OEM Customer Technical Support",
    "Supplier Technical Coordination",
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">SB</div>

          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("capabilities")}>What I Do</button>
            <button onClick={() => scrollToSection("experience")}>Experience</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-3">
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("capabilities")}>What I Do</button>
            <button onClick={() => scrollToSection("experience")}>Experience</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Siddesh B</h1>
          <p className="text-xl mb-3">
            Technical Marketing Engineer | Field Application Engineer | Component Engineer
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Bridging electronic components with real-world applications
          </p>
          <div className="mb-6 text-gray-600">
            EV • Renewable • Power Electronics • Industrial • Railway • Medical
          </div>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 bg-black text-white rounded"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <img
            src="/Profile picture maker project (1).png"
            alt="Siddesh B"
            className="w-48 h-48 rounded-full object-cover mx-auto"
          />
          <div className="md:col-span-2 space-y-4 text-gray-700">
            <p>
              I am a Technical Marketing Engineer with 4+ years of experience in
              electronic components and power electronics.
            </p>
            <p>
              My work focuses on component engineering, application understanding,
              and technical product support for OEM customers.
            </p>
            <p>
              I support component selection, alternate recommendations, BOM
              optimization, and technical clarifications.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section id="capabilities" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {capabilities.map((c, i) => (
            <div key={i} className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-3">{c.title}</h3>
              <ul className="space-y-2">
                {c.points.map((p, j) => (
                  <li key={j}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* COMPONENTS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Components & Technologies</h2>
          <img src="/Components.png" className="mb-8 rounded" />
          <div className="grid md:grid-cols-2 gap-6">
            {components.map((c, i) => (
              <div key={i}>
                <h4 className="font-bold">{c.category}</h4>
                <ul>
                  {c.items.map((it, j) => (
                    <li key={j}>• {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Application Domains</h2>
          <img src="/Application.png" className="mb-8 rounded" />
          <ul className="grid md:grid-cols-2 gap-4">
            {domains.map((d, i) => (
              <li key={i}>• {d}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>
          <p className="font-bold">Technical Marketing Engineer – Pravah Technologies</p>
          <p className="mb-4">Dec 2022 – Present</p>
          <p>
            Supporting OEM customers with component engineering, application
            understanding, and technical product support.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-3">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p><MapPin size={16} /> Karnataka, India</p>
          <p><Phone size={16} /> +91 96326 98216</p>
          <p><Mail size={16} /> yaadav9929@gmail.com</p>
          <p>
            <Linkedin size={16} />{" "}
            <a href="https://www.linkedin.com/in/siddesh-b-822a38148/" target="_blank">
              LinkedIn Profile <ExternalLink size={14} />
            </a>
          </p>
        </div>
      </section>

      <footer className="py-6 bg-black text-white text-center">
        © 2026 Siddesh B
      </footer>
    </div>
  );
}
