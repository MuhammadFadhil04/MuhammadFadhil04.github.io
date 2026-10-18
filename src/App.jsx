
import { useState, useEffect } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    category: "AI / NLP",
    title: "Chatbot Klinik Ratna Dental Care",
    description:
      "Pengembangan chatbot informasi klinik menggunakan Natural Language Processing dan IndoBERT, dengan layanan API untuk menghubungkan model ke website.",
    technologies: ["Python", "IndoBERT", "Flask", "NLP"],
    contribution: [
      "Pengolahan dataset dan intent chatbot",
      "Training dan evaluasi model",
      "Integrasi model melalui Flask API",
      "Pengujian fungsionalitas chatbot",
    ],
    link: "https://ratnadentalcare.my.id/",
    linkLabel: "Lihat Website",
  },
  {
    number: "02",
    category: "WEB DEVELOPMENT",
    title: "Website Reservasi Klinik Ratna Dental Care",
    description:
      "Sistem reservasi klinik gigi berbasis web untuk membantu pendaftaran pasien, pemesanan jadwal pemeriksaan, dan pengelolaan reservasi.",
    technologies: ["PHP", "MySQL", "JavaScript", "UML"],
    contribution: [
      "Pengembangan fitur reservasi pasien",
      "Pengelolaan jadwal dan data reservasi",
      "Integrasi basis data",
      "Pengujian fungsionalitas sistem",
    ],
    link: null,
    linkLabel: "",
  },
  {
    number: "03",
    category: "SYSTEM DESIGN",
    title: "Reservasi Lapangan Bulu Tangkis",
    description:
      "Perancangan sistem reservasi lapangan untuk membantu pelanggan melakukan pemesanan serta mendukung pengelolaan lapangan dan transaksi.",
    technologies: ["UML", "System Analysis", "Database Design"],
    contribution: [
      "Analisis kebutuhan pengguna",
      "Perancangan kebutuhan sistem",
      "Perancangan entitas User, Lapangan, dan Booking",
    ],
    link: null,
    linkLabel: "",
  },
  {
    number: "04",
    category: "DATA ANALYSIS",
    title: "Analisis Tingkat Kemiskinan di Indonesia",
    description:
      "Analisis data untuk melihat tingkat kemiskinan di Indonesia, membandingkan kondisi antarwilayah, dan mengidentifikasi daerah dengan tingkat kemiskinan tertinggi.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Visualization",
      "Google Looker Studio",
    ],
    contribution: [
      "Membersihkan dan mengolah data kemiskinan",
      "Menganalisis perbandingan tingkat kemiskinan antarwilayah",
      "Mengidentifikasi daerah dengan tingkat kemiskinan tertinggi",
      "Membuat dashboard visualisasi interaktif di Google Looker Studio",
    ],
    link: null,
    linkLabel: "",
  },
];

const skillGroups = [
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "AI & Programming",
    skills: ["Python", "NLP", "IndoBERT", "Flask API", "PyTorch"],
  },
  {
    title: "Software Quality Assurance",
    skills: [
      "Black Box Testing",
      "Functional Testing",
      "Test Case Design",
      "Browser Testing",
    ],
  },
  {
    title: "System Analysis",
    skills: [
      "UML Modeling",
      "System Analysis",
      "Database Design",
      "Requirements Analysis",
    ],
  },
  {
    title: "Data Analysis",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Microsoft Excel",
      "Data Cleaning",
      "Data Visualization",
      "Google Looker Studio",
    ],
  },
];

const snowflakes = Array.from({ length: 36 }, (_, index) => ({
  left: `${(index * 29) % 101}%`,
  size: `${2 + (index % 4)}px`,
  delay: `-${(index % 12) * 0.8}s`,
  duration: `${8 + (index % 7)}s`,
  opacity: 0.22 + (index % 5) * 0.1,
  drift: `${((index % 5) - 2) * 28}px`,
}));

function Snowfall() {
  return (
    <div className="snowfall" aria-hidden="true">
      {snowflakes.map((flake, index) => (
        <span
          className="snowflake"
          key={index}
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            animationDelay: flake.delay,
            animationDuration: flake.duration,
            "--snow-drift": flake.drift,
          }}
        />
      ))}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState(null);
  
  useEffect(() => {
    const elements = document.querySelectorAll(
      "main > section, .project-card, .skill-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => {
      element.classList.add("scroll-reveal");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [activeFilter]);

  const filters = [
    "Semua",
    "AI / NLP",
    "WEB DEVELOPMENT",
    "SYSTEM DESIGN",
    "DATA ANALYSIS",
  ];

  const visibleProjects =
    activeFilter === "Semua"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Snowfall />

      <div className="page-intro" aria-hidden="true">
        <div className="page-intro-logo">MF<span>.</span></div>
      </div>

      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          MF<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Buka atau tutup navigasi"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            ["Home", "#home"],
            ["Tentang", "#about"],
            ["Skills", "#skills"],
            ["Proyek", "#projects"],
            ["Kontak", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Hubungi Saya ↗
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              FRESH GRADUATE · OPEN TO OPPORTUNITIES
            </div>

            <p className="eyebrow">HALO, SAYA</p>
            <h1>
              Muhammad Fadhil
              <br />
              <span>Fadhil.</span>
            </h1>

            <h2>
              Information Systems Graduate
              <br />
              <span>Web Developer · Data Enthusiast · QA Tester</span>
            </h2>

            <p className="hero-description">
              Saya tertarik membangun solusi digital melalui pengembangan
              website, pengolahan data, dan pengujian perangkat lunak.
              Saya senang mempelajari teknologi baru dan mengembangkan
              aplikasi yang bermanfaat bagi pengguna.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Jelajahi Proyek <span>↗</span>
              </a>
              <a
                className="button button-secondary"
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                download="CV-Muhammad-Fadhil.pdf"
              >
                Download CV ↓
              </a>
              <a href="mailto:muhammadfadhil0408@gmail.com" className="button button-primary">
                Hubungi Saya
              </a>
            </div>

            <div className="hero-meta">
              <span>Bekasi, Indonesia</span>
              <span>Universitas Gunadarma</span>
              <span>IPK 3,74</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Ringkasan profil">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <img
              className="profile-photo"
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Foto profil Muhammad Fadhil Fadhil"
            />
            <div className="floating-card card-top">
              <span className="card-icon">{"</>"}</span>
              <div>
                <strong>Web Development</strong>
                <small>Building digital solutions</small>
              </div>
            </div>
            <div className="floating-card card-bottom">
              <span className="card-icon">AI</span>
              <div>
                <strong>AI & Quality Testing</strong>
                <small>Learning through projects</small>
              </div>
            </div>
            <span className="visual-label">PORTOFOLIO · 2026</span>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / TENTANG SAYA</p>
            <h2>Mengenal saya lebih dekat.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                Saya merupakan lulusan Sistem Informasi Universitas
                Gunadarma dengan IPK 3,74. Selama perkuliahan, saya
                mengembangkan proyek yang mencakup aplikasi web,
                perancangan sistem, integrasi basis data, serta chatbot
                berbasis Natural Language Processing.
              </p>
              <p>
                Saya ingin mengembangkan kemampuan di bidang Web
                Development, Data Analysis, dan Software Quality
                Assurance melalui pengalaman profesional dan proyek
                yang menantang.
              </p>
            </div>

            <div className="profile-details">
              <div>
                <span>Pendidikan</span>
                <strong>S1 Sistem Informasi</strong>
                <small>Universitas Gunadarma</small>
              </div>
              <div>
                <span>IPK</span>
                <strong>3,74 / 4,00</strong>
                <small>Prestasi akademik</small>
              </div>
              <div>
                <span>Domisili</span>
                <strong>Bekasi, Indonesia</strong>
                <small>Terbuka untuk peluang kerja</small>
              </div>
              <div>
                <span>Fokus Karier</span>
                <strong>Web · Data · QA</strong>
                <small>Pengembangan dan pengujian sistem</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / KETERAMPILAN</p>
            <h2>Tools yang saya gunakan.</h2>
            <p className="section-description">
              Keterampilan yang saya pelajari dan gunakan dalam proyek
              akademik maupun pengembangan sistem.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">03 / PROYEK PILIHAN</p>
            <h2>Proyek yang pernah saya kerjakan.</h2>
            <p className="section-description">
              Beberapa proyek yang menunjukkan pengalaman saya dalam
              pengembangan aplikasi, AI, pengujian, dan perancangan sistem.
            </p>
          </div>

          <div className="project-filters" aria-label="Filter proyek">
            {filters.map((filter) => (
              <button
                key={filter}
                className={
                  activeFilter === filter ? "filter active" : "filter"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-art art-${project.number}`}>
                  <span className="project-art-number">{project.number}</span>
                  <span className="project-art-label">{project.category}</span>
                  
                  <div className="project-art-symbol">
                    {project.number === "01" ? (
                      <>AI<span> / NLP</span></>
                    ) : project.number === "02" ? (
                      <>WEB<span> / APP</span></>
                    ) : (
                      <>SYS<span> / UML</span></>
                    )}
                  </div>
                </div>

                <div className="project-body">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <h4>Kontribusi utama</h4>
                  <ul className="contribution-list">
                    {project.contribution.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.linkLabel} <span>↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {selectedProject && (
          <div
            className="project-modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <section
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="project-modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Tutup detail proyek"
              >
                ×
              </button>

              <p className="eyebrow">
                {selectedProject.number} / {selectedProject.category}
              </p>

              <h2 id="project-modal-title">
                {selectedProject.title}
              </h2>

              <p>{selectedProject.description}</p>

              <h3>Kontribusi Utama</h3>
              <ul>
                {selectedProject.contribution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h3>Detail Proyek</h3>
              {selectedProject.details?.map((detail) => (
                <div className="project-modal-detail" key={detail.title}>
                  <h4>{detail.title}</h4>
                  <p>{detail.description}</p>
                </div>
              ))}

              <h3>Teknologi</h3>
              <div className="project-tech">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {selectedProject.link && (
                <a
                  className="project-link"
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {selectedProject.linkLabel || "Lihat Proyek"} ↗
                </a>
              )}
            </section>
          </div>
        )}

        
        <section className="section contact-section" id="contact">
          <p className="eyebrow">04 / KONTAK</p>
          <h2>Mari terhubung.</h2>

          <p className="contact-description">
            Saya terbuka untuk peluang kerja, magang, dan kolaborasi
            proyek yang relevan dengan pengembangan web, data analyst, dan
            pengujian perangkat lunak.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="mailto:muhammadfadhil0408@gmail.com"
            >
              Hubungi melalui Email ↗
            </a>

            <a
              className="button button-secondary"
              href="https://www.linkedin.com/in/muhammad-fadhil-808bb5216/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              className="button button-secondary"
              href="https://github.com/fadhhiiillll"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>

          <p className="contact-note">
            Kunjungi profil LinkedIn dan GitHub saya untuk melihat
            informasi profesional serta proyek yang pernah dikerjakan.
          </p>
        </section>
      </main>

      
      <footer className="footer">
        <p>© 2026 Muhammad Fadhil. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;