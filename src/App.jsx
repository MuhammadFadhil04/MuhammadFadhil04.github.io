
import { useState, useEffect } from "react";
import "./App.css";

// Simpan screenshot di public/ lalu daftarkan path relatifnya di images.
const projects = [
  {
    number: "01",
    slug: "chatbot-klinik-ratna-dental-care",
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
    caseStudy: [
      {
        title: "Tantangan",
        description:
          "Pengunjung membutuhkan cara praktis untuk memperoleh informasi dasar klinik melalui percakapan di website.",
      },
      {
        title: "Pendekatan",
        description:
          "Saya mengolah dataset intent, melatih dan mengevaluasi model IndoBERT, lalu menghubungkan model ke website melalui Flask API.",
      },
      {
        title: "Hasil",
        description:
          "Proyek ini menghasilkan chatbot informasi klinik berbasis NLP yang terintegrasi dengan website.",
      },
    ],
    link: "https://github.com/miftarzl/ratnadenrtalcare",
    linkLabel: "Lihat Source Code",
    status: "Demo online tidak tersedia karena domain kedaluwarsa.",
    images: [
      {
        src: "ProjectChatbot.png",
        alt: "Website Ratna Dental Care dengan panel chatbot klinik gigi",
        caption: "Website Ratna Dental Care dan chatbot klinik gigi.",
      },
    ],
  },
  {
    number: "02",
    slug: "website-reservasi-ratna-dental-care",
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
    caseStudy: [
      {
        title: "Tantangan",
        description:
          "Proses reservasi perlu mencakup pemilihan dokter dan jadwal, sementara admin perlu mengelola data klinik.",
      },
      {
        title: "Pendekatan",
        description:
          "Saya membangun alur akun pasien, pemesanan jadwal, riwayat reservasi, serta dashboard admin dengan PHP dan MySQL.",
      },
      {
        title: "Hasil",
        description:
          "Website menyediakan alur pasien dari pendaftaran hingga memantau status reservasi, disertai halaman admin untuk pengelolaan.",
      },
    ],
    link: "https://github.com/miftarzl/ratnadenrtalcare",
    linkLabel: "Lihat Source Code",
    status: "Demo online tidak tersedia karena domain kedaluwarsa.",
    images: [
      {
        src: "Screenshot 2026-10-26 133744.png",
        alt: "Beranda website Ratna Dental Care dengan tombol reservasi dan chatbot",
        caption: "Beranda website klinik.",
      },
      {
        src: "Screenshot 2026-10-26 134023.png",
        alt: "Daftar layanan perawatan gigi Ratna Dental Care",
        caption: "Daftar layanan klinik.",
      },
      {
        src: "Screenshot 2026-10-26 134040.png",
        alt: "Tiga tahap alur reservasi dan kunjungan ke klinik",
        caption: "Alur reservasi dan kunjungan.",
      },
      {
        src: "Screenshot 2026-10-26 140115.png",
        alt: "Form login pasien untuk membuat reservasi dan melihat riwayat kunjungan",
        caption: "Halaman login pasien.",
      },
      {
        src: "Screenshot 2026-10-26 140129.png",
        alt: "Form pendaftaran akun pasien baru",
        caption: "Halaman pendaftaran akun pasien.",
      },
      {
        src: "Screenshot 2026-10-26 140326.png",
        alt: "Dashboard pasien setelah berhasil login",
        caption: "Dashboard pasien setelah login.",
      },
      {
        src: "Screenshot 2026-10-26 140234.png",
        alt: "Form untuk memilih dokter, tanggal, dan waktu reservasi",
        caption: "Form pembuatan reservasi.",
      },
      {
        src: "Screenshot 2026-10-26 140248.png",
        alt: "Riwayat reservasi pasien dengan status kunjungan dan antrean",
        caption: "Riwayat dan status reservasi pasien.",
      },
      {
        src: "Screenshot 2026-10-26 140315.png",
        alt: "Halaman tentang Ratna Dental Care berisi visi dan misi klinik",
        caption: "Halaman tentang klinik.",
      },
      {
        src: "Screenshot 2026-10-26 140357.png",
        alt: "Dashboard admin untuk mengelola dokter, reservasi, dan pasien",
        caption: "Dashboard admin klinik.",
      },
    ],
  },
  {
    number: "03",
    slug: "reservasi-lapangan-bulu-tangkis",
    category: "SYSTEM ANALYSIS",
    title: "Reservasi Lapangan Bulu Tangkis",
    description:
      "Perancangan sistem reservasi lapangan untuk membantu pelanggan melakukan pemesanan serta mendukung pengelolaan lapangan dan transaksi.",
    technologies: ["UML", "System Analysis", "Database Design"],
    contribution: [
      "Analisis kebutuhan pengguna",
      "Perancangan kebutuhan sistem",
      "Perancangan entitas User, Lapangan, dan Booking",
    ],
    caseStudy: [
      {
        title: "Tantangan",
        description:
          "Alur pemesanan dan hubungan data pengguna, lapangan, serta booking perlu dirumuskan sebelum implementasi.",
      },
      {
        title: "Pendekatan",
        description:
          "Saya menerjemahkan kebutuhan menjadi rancangan sistem dan data, dengan User, Lapangan, dan Booking sebagai entitas inti.",
      },
      {
        title: "Hasil",
        description:
          "Proyek menghasilkan rancangan kebutuhan dan struktur data awal sebagai acuan untuk membangun sistem reservasi.",
      },
    ],
    link: null,
    linkLabel: "",
    images: [],
  },
  {
    number: "04",
    slug: "analisis-kemiskinan-indonesia",
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
    caseStudy: [
      {
        title: "Tantangan",
        description:
          "Perbedaan tingkat kemiskinan antarwilayah perlu dibaca dan dibandingkan dari data yang terstruktur.",
      },
      {
        title: "Pendekatan",
        description:
          "Saya membersihkan data, membandingkan kondisi antarwilayah, dan menyusun visualisasi interaktif di Google Looker Studio.",
      },
      {
        title: "Hasil",
        description:
          "Proyek menyajikan analisis perbandingan wilayah dan dashboard untuk menelusuri daerah dengan tingkat kemiskinan tertinggi.",
      },
    ],
    link: null,
    linkLabel: "",
    images: [],
  },
  {
    number: "05",
    slug: "ai-business-operations-assistant",
    category: "AI / AUTOMATION",
    title: "AI Business Operations Assistant",
    description:
      "Asisten operasional bisnis berbasis AI untuk membantu mengelola tugas, memahami prioritas pekerjaan, dan mendukung alur kerja otomatis melalui integrasi Gemini API dan n8n.",
    technologies: [
      "Python",
      "FastAPI",
      "SQLite",
      "Gemini API",
      "n8n",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    contribution: [
      "Membangun REST API menggunakan FastAPI",
      "Mengelola data tugas menggunakan SQLite",
      "Mengintegrasikan Gemini API untuk fitur asisten AI",
      "Menyiapkan integrasi otomatisasi melalui webhook n8n",
      "Membuat antarmuka web menggunakan HTML, CSS, dan JavaScript",
    ],
    caseStudy: [
      {
        title: "Tantangan",
        description:
          "Tugas operasional dan prioritas pekerjaan perlu dikelola dalam alur yang mudah dipahami, dengan dukungan AI dan otomatisasi.",
      },
      {
        title: "Pendekatan",
        description:
          "Saya membangun REST API dengan FastAPI, menyimpan tugas di SQLite, mengintegrasikan Gemini API, dan menyiapkan webhook n8n.",
      },
      {
        title: "Hasil",
        description:
          "Prototipe ini menggabungkan pengelolaan tugas, bantuan AI, dan jalur integrasi otomatisasi dalam satu aplikasi.",
      },
    ],
    link: "https://github.com/MuhammadFadhil04/ai-business-operations-assistant",
    linkLabel: "Lihat Source Code",
    images: [
      {
        src: "Screenshot 2026-10-26 141959.png",
        alt: "Dashboard AI Business Assistant dengan ringkasan tugas dan ruang percakapan AI",
        caption: "Dashboard task management dan AI Assistant.",
      },
      {
        src: "Screenshot 2026-10-26 142028.png",
        alt: "Daftar tugas dengan pencarian, filter status, prioritas, dan kontrol tugas",
        caption: "Daftar dan pengelolaan tugas.",
      },
    ],
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
    title: "Web Quality Practices",
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

function ProjectDetailPage({ project }) {
  const portfolioUrl = import.meta.env.BASE_URL;

  if (!project) {
    return (
      <>
        <Snowfall />
        <a className="skip-link" href="#main-content">
          Lewati ke konten utama
        </a>
        <header className="navbar project-page-navbar">
          <a className="brand" href={portfolioUrl}>
            MF<span>.</span>
          </a>
        </header>
        <main
          id="main-content"
          className="project-detail-page project-not-found"
          tabIndex={-1}
        >
          <p className="eyebrow">PROYEK TIDAK DITEMUKAN</p>
          <h1>Halaman proyek tidak tersedia.</h1>
          <a className="button button-primary" href={portfolioUrl}>
            Kembali ke Portofolio
          </a>
        </main>
      </>
    );
  }

  return (
    <>
      <Snowfall />
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <header className="navbar project-page-navbar">
        <a className="brand" href={portfolioUrl}>
          MF<span>.</span>
        </a>
        <a className="project-back-link" href={portfolioUrl}>
          <span aria-hidden="true">←</span> Kembali ke Portofolio
        </a>
      </header>

      <main id="main-content" className="project-detail-page" tabIndex={-1}>
        <div className="project-detail-heading">
          <p className="eyebrow">
            {project.number} / {project.category}
          </p>
          <h1>{project.title}</h1>
          <p className="project-detail-summary">{project.description}</p>
        </div>

        {project.caseStudy?.length > 0 && (
          <section className="project-case-study" aria-labelledby="case-study-title">
            <div className="project-case-study-heading">
              <p className="eyebrow">STUDI KASUS</p>
              <h2 id="case-study-title">Dari tantangan menuju solusi.</h2>
            </div>
            <div className="project-case-study-grid">
              {project.caseStudy.map((step, index) => (
                <article className="project-case-study-card" key={step.title}>
                  <span className="project-case-study-step">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <div className="project-detail-columns">
          <div className="project-detail-content">
            <section className="project-page-gallery" aria-labelledby="gallery-title">
              <h2 id="gallery-title">Galeri Proyek</h2>
              {project.images?.length ? (
                <div className="project-page-gallery-list">
                  {project.images.map((image) => (
                    <figure className="project-page-gallery-item" key={image.src}>
                      <img
                        src={`${portfolioUrl}${image.src}`}
                        alt={image.alt}
                        loading="lazy"
                      />
                      {image.caption && <figcaption>{image.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              ) : (
                <div className="project-gallery-empty">
                  <span aria-hidden="true">▧</span>
                  <p>Foto untuk proyek ini belum ditambahkan.</p>
                </div>
              )}
            </section>

            <section className="project-detail-section">
              <h2>Kontribusi Utama</h2>
              <ul className="project-detail-contributions">
                {project.contribution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            {project.details?.length > 0 && (
              <section className="project-detail-section">
                <h2>Detail Proyek</h2>
                {project.details.map((detail) => (
                  <div className="project-detail-card" key={detail.title}>
                    <h3>{detail.title}</h3>
                    <p>{detail.description}</p>
                  </div>
                ))}
              </section>
            )}
          </div>

          <aside className="project-detail-sidebar">
            <h2>Teknologi</h2>
            <div className="project-tech">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            {project.status && <p className="project-status">{project.status}</p>}

            {project.link && (
              <a
                className="button button-primary project-detail-source"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkLabel || "Lihat Source Code"} <span aria-hidden="true">↗</span>
              </a>
            )}
          </aside>
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 Muhammad Fadhil. All rights reserved.</p>
      </footer>
    </>
  );
}

function updateProjectCardTilt(event) {
  if (event.pointerType === "touch") return;

  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  if (!bounds.width || !bounds.height) return;

  const x = Math.min(Math.max((event.clientX - bounds.left) / bounds.width, 0), 1);
  const y = Math.min(Math.max((event.clientY - bounds.top) / bounds.height, 0), 1);

  card.style.setProperty("--project-tilt-x", `${((0.5 - y) * 6).toFixed(2)}deg`);
  card.style.setProperty("--project-tilt-y", `${((x - 0.5) * 6).toFixed(2)}deg`);
  card.style.setProperty("--project-spotlight-x", `${(x * 100).toFixed(1)}%`);
  card.style.setProperty("--project-spotlight-y", `${(y * 100).toFixed(1)}%`);
  card.classList.add("tilt-active");
}

function resetProjectCardTilt(event) {
  const card = event.currentTarget;
  card.style.setProperty("--project-tilt-x", "0deg");
  card.style.setProperty("--project-tilt-y", "0deg");
  card.classList.remove("tilt-active");
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Semua");
  
  useEffect(() => {
    const elements = document.querySelectorAll(
      "main > section, .project-card, .skill-card, .project-case-study-card"
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
    "SYSTEM ANALYSIS",
    "DATA ANALYSIS",
    "AI / AUTOMATION",
  ];

  const visibleProjects =
    activeFilter === "Semua"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const closeMenu = () => setMenuOpen(false);
  const projectSlug = new URLSearchParams(window.location.search).get("project");

  if (projectSlug) {
    const project = projects.find((item) => item.slug === projectSlug);
    return <ProjectDetailPage project={project} />;
  }

  return (
    <>
      <Snowfall />
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>

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

      <main id="main-content" tabIndex={-1}>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              FRESH GRADUATE · OPEN TO OPPORTUNITIES
            </div>

            <p className="eyebrow">HALO, SAYA</p>
            <h1>
              Muhammad
              <br />
              <span>Fadhil</span>
            </h1>

            <h2>
              Information Systems Graduate
              <br />
              <span>Web Developer · API · Automasi</span>
            </h2>

            <p className="hero-description">
              Saya membangun aplikasi web yang membantu proses sehari-hari
              menjadi lebih teratur, dari sistem reservasi hingga asisten
              operasional. Fokus saya ada pada pengembangan fitur, integrasi
              API, dan pengalaman pengguna.
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
              alt="Foto profil Muhammad Fadhil"
            />
            <div className="floating-card card-top">
              <span className="card-icon">{"</>"}</span>
              <div>
                <strong>Web Development</strong>
                <small>Building digital solutions</small>
              </div>
            </div>
            <div className="floating-card card-bottom">
              <span className="card-icon">DA</span>
              <div>
                <strong>Data Analyst</strong>
                <small>Analisis dan visualisasi data</small>
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
                Saya ingin mengembangkan karier sebagai Web Developer,
                terutama pada pengembangan fitur, antarmuka, dan integrasi
                API. Pengalaman analisis data dan pengujian saya gunakan
                sebagai bekal untuk membangun aplikasi yang lebih terstruktur
                dan andal.
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
                <strong>Web Developer</strong>
                <small>Aplikasi web · API · automasi</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / KETERAMPILAN</p>
            <h2>Tools yang saya gunakan.</h2>
            <p className="section-description">
              Keterampilan yang saya gunakan untuk membangun, menghubungkan,
              dan menjaga kualitas aplikasi web.
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
              pengembangan web, integrasi API, AI, dan perancangan sistem.
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
              <article
                className="project-card"
                key={project.number}
                onPointerMove={updateProjectCardTilt}
                onPointerLeave={resetProjectCardTilt}
              >
                <a
                  className="project-card-trigger"
                  href={`${import.meta.env.BASE_URL}?project=${project.slug}`}
                  aria-label={`Lihat detail proyek: ${project.title}`}
                >
                  <div className={`project-art art-${project.number}`}>
                    <span className="project-art-number">{project.number}</span>
                    <span className="project-art-label">{project.category}</span>

                    <div className="project-art-symbol">
                      {project.number === "01" ? (
                        <>AI<span> / NLP</span></>
                      ) : project.number === "02" ? (
                        <>WEB<span> / APP</span></>
                      ) : project.number === "03" ? (
                        <>SYS<span> / UML</span></>
                      ) : project.number === "04" ? (
                        <>DATA<span> / VIZ</span></>
                      ) : (
                        <>AI<span> / AUTO</span></>
                      )}
                    </div>
                  </div>

                  <div className="project-body">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-tech">
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <span className="project-open-hint">
                      Lihat detail dan foto proyek <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </a>

                {project.link && (
                  <a
                    className="project-link project-card-source"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.linkLabel} <span>↗</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <p className="eyebrow">04 / KONTAK</p>
          <h2>Mari terhubung.</h2>

          <p className="contact-description">
            Saya terbuka untuk peluang kerja, magang, dan kolaborasi
            proyek, terutama di bidang pengembangan web, integrasi API,
            dan automasi.
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
              href="https://github.com/MuhammadFadhil04"
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

