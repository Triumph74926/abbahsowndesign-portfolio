import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Menu, X, Sparkles, Mail, Phone, MessageCircle } from 'lucide-react';

// Replace these sample project entries and images with Oriola's own designs.
const projects = [
  {
    number: '01', name: 'Swift Bite', type: 'Brand identity · Digital design',
    image: `${import.meta.env.BASE_URL}images/WhatsApp Image 2026-10-18 at 2.44.22 AM.jpeg`,
    className: 'project-tidemint', description: 'A fresh visual language for a food company.'
  },
  {
    number: '02', name: 'CLASFON', type: 'Flyer design · E-flyer',
    image: `${import.meta.env.BASE_URL}images/WhatsApp Image 2026-10-18 at 2.45.57 AM.jpeg`,
    className: 'project-lumera', description: 'A spirit filled design built for a church program.'
  },
  {
    number: '03', name: 'OrbitPay', type: 'Poster design · Advertisement design',
    image: `${import.meta.env.BASE_URL}images/WhatsApp Image 2026-10-18 at 2.46.55 AM.jpeg`,
    className: 'project-jumai', description: 'A vibrant poster design for a freelancing company.'
  },
  {
    number: '04', name: 'New Month', type: 'Social Media design · New month design',
    image: `${import.meta.env.BASE_URL}images/WhatsApp Image 2026-10-18 at 2.47.39 AM.jpeg`,
    className: 'project-eventflow', description: 'A design celebrating the independence of Nigeria.'
  },
  {
    number: '05', name: 'AeroSpace', type: 'Product design · Visual system',
    image: `${import.meta.env.BASE_URL}images/WhatsApp Image 2026-10-18 at 2.47.39 AM (1).jpeg`,
    className: 'project-eventflow', description: 'A design for an aeroplane brand.'
  },
];

const services = [
  'Brand identity',
  'Logo design',
  'Social media design',
  'Flyers & posters',
  'Packaging design',
  'Print design',
];

const email = 'Oluwafikunayomioriola20@gmail.com';
const phone = '+2349024878986';
const whatsapp = '29024878986';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark brand-wordmark" href="#home" aria-label="Abba's Own Designs home">
          <img
            src={`${import.meta.env.BASE_URL}images/abbas-logo.png`}
            alt="Abba's Own Designs logo"
            className="brand-logo"
          />
          <span>ABBAH'S OWN DESIGNS</span>
          {/* When the logo is ready, replace the two spans above with:
          <img src="/abbas-own-designs-logo.png" alt="Abba's Own Designs" className="brand-logo" />
          Then place the image at public/abbas-own-designs-logo.png.
          */}
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work <span>↗</span></a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-kicker"><span className="status-dot" /> GRAPHIC DESIGNER <span className="kicker-divider">/</span> AVAILABLE FOR PROJECTS · 24/7</div>
          <div className="hero-copy">
            <h1>Visuals that make <span className="blue-word">brands</span><br className="desktop-break" /> stand out<span className="blue-word">.</span></h1>
            <p className="hero-intro">Hey there, I'm Fikayo. I build thoughtful brands and digital experiences with a little curiosity and a lot of intention.</p>
          </div>
          <div className="hero-bottom">
            <a href="#work" className="round-link" aria-label="Scroll to selected work"><ArrowDownRight size={21} /></a>
            <p>SCROLL TO EXPLORE<br /><span>SELECTED WORK · 2024—2026</span></p>
            <div className="hero-index">01 <span>—</span> 05</div>
          </div>
          <div className="hero-orbit" aria-hidden="true"><span className="orbit-ring ring-one"/><span className="orbit-ring ring-two"/><span className="orbit-core">A<span>.</span></span><span className="orbit-label">DESIGN<br />WITH INTENT</span></div>
        </section>

        <div className="metrics-row">
          <div className="metric">
            <h3>20+</h3>
            <p>Projects Delivered</p>
          </div>

          <div className="metric">
            <h3>15+</h3>
            <p>Clients</p>
          </div>

          <div className="metric">
            <h3>2+</h3>
            <p>Years Experience</p>
          </div>
        </div>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div><span className="eyebrow">01 / SELECTED WORK</span><h2>Made with <span className="blue-word">purpose.</span></h2></div>
            <p>A few projects where strategy, visuals, and a good idea came together.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.className}`} key={project.number}>
                <button
                  type="button"
                  className="project-image"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View ${project.name} in full size`}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                  />
                </button>
                <div className="project-meta"><div><h3>{project.name}</h3><p>{project.type}</p></div><span className="project-description">{project.description}</span></div>
              </article>
            ))}
          </div>

          <div className="more-work-links">
            <p>Explore more of my designs?</p>

            <div className="more-work-buttons">
              <a
                href="https://www.instagram.com/abbasowndesigns?srtk=bWQ2N3k1cHQ2ZXBy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Instagram <ArrowUpRight size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/oluwafikayomi-oriola-7ab252421?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="work-footnote"><span>MORE WORK IS ALWAYS IN PROGRESS</span><span>✳</span></div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-label"><span className="eyebrow">02 / A LITTLE ABOUT ME</span><span className="about-star"><Sparkles size={20} /></span></div>
          <div className="about-content">
            <h2>Design is more than how it <span className="blue-word">looks.</span><br />It's how it <span className="muted-word">makes you feel.</span></h2>
            <div className="about-lower">

              <div className="about-photo">
                <img
                  src={`${import.meta.env.BASE_URL}images/WhatsApp Image 2026-10-18 at 2.52.06 AM.jpeg`}
                  alt="Portrait of the designer"
                  loading="lazy"
                />

                <span className="about-photo-label">
                  THE PERSON BEHIND THE PIXELS
                </span>

                <div className="photo-metric photo-metric-projects">
                  <h3>20+</h3>
                  <p>Projects<br />Delivered</p>
                </div>

                <div className="photo-metric photo-metric-years">
                  <h3>2+</h3>
                  <p>Years<br />Experience</p>
                </div>
              </div>
              <div className="about-text"><p className="large-copy">I’m a graphic designer and visual storyteller who enjoys turning complex ideas into clear, memorable experiences.</p><p>From shaping a brand’s first impression to creating digital visuals that feel easy to use, I care about the details and the bigger picture. I believe good design should feel considered, useful, and unmistakably human.</p><a className="text-link" href="#contact">Any questions about me? <ArrowUpRight size={16} /></a></div>
            </div>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <div className="section-heading">
            <div>
              <span className="eyebrow">03 / EXPERIENCE</span>
              <h2>Where I've <span className="blue-word">worked.</span></h2>
            </div>
            <p>Design projects, creative collaborations, and the impact behind them.</p>
          </div>

          <div className="experience-list">
            <article className="experience-item">
              <div className="experience-date">May 2026 – Present</div>
              <div className="experience-details">
                <h3>Creative Brand Designer</h3>
                <h4>CLASFON UI</h4>
                <p>
                  Commissioned to create flyers tailored to the organisation's
                  services and themes. Produced 40+ flyers, contributing to
                  approximately 20% social media engagement growth and increased
                  membership.
                </p>
              </div>
            </article>

            <article className="experience-item">
              <div className="experience-date">March 2026 – Present</div>
              <div className="experience-details">
                <h3>Creative Brand Designer</h3>
                <h4>Redefining Narratives</h4>
                <p>
                  Created flyers for a nonprofit addressing sexual, mental,
                  and emotional abuse. Designed materials for Redefining Week,
                  testimonials, and Easter campaigns, producing 10+ flyers
                  and contributing to approximately 15% social media engagement growth.
                </p>
              </div>
            </article>

            <article className="experience-item">
              <div className="experience-date">June 2026</div>
              <div className="experience-details">
                <h3>Creative Brand Designer</h3>
                <h4>CLASFON Nigeria Law School — Kano Campus</h4>
                <p>
                  Designed five flyers for a conference, including an anticipation
                  flyer, three speaker flyers, and the main event flyer.
                  The designs were described by the leadership as sleek and functional.
                </p>
              </div>
            </article>
          </div>

          <div className="skills-block">
            <h3>Skills</h3>
            <div className="skills-list">
              <span>Leadership</span>
              <span>Graphic Design</span>
              <span>Team Management</span>
            </div>
          </div>
        </section>

        <section className="services-section section-wrap" id="services">
          <div className="section-heading"><div><span className="eyebrow">04 / WHAT I BRING</span><h2>Good ideas, <span className="blue-word">well made.</span></h2></div><p>From the first sketch to the final files, here's where I can help.</p></div>
          <div className="services-layout"><div className="services-intro"><p>Every project is different. The process starts by listening, asking the right questions, and finding the simplest way to make the idea stand out.</p><a className="text-link" href="#contact">Have a project in mind? <ArrowUpRight size={16} /></a></div>
            <div className="service-list">{services.map((service, i) => <div className="service-row" key={service}><span className="service-no">0{i + 1}</span><h3>{service}</h3><ArrowUpRight size={18} /></div>)}</div></div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-top"><span className="eyebrow">05 / YOUR TURN</span><span className="contact-note">HAVE A GOOD ONE IN MIND? <span>✳</span></span></div>
          <h2>Let's make<br />something <span className="blue-word">matter.</span></h2>
          <div className="contact-layout">
            <div className="contact-copy">
              <p>I'm open to thoughtful collaborations, freelance projects, and conversations about design.</p>
              <a className="email-link" href={`mailto:${email}`}><Mail size={18} /> {email} <ArrowUpRight size={18} /></a>
              <a className="email-link contact-method" href={`tel:${phone}`}><Phone size={18} /> {phone} <ArrowUpRight size={18} /></a>
              <a className="email-link contact-method" href={`https://wa.me/234${whatsapp.slice(1)}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp <ArrowUpRight size={18} /></a>
              <div className="social-links">
                <a
                  href="https://www.instagram.com/abbasowndesigns?srtk=bWQ2N3k1cHQ2ZXBy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">◎</span>
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/oluwafikayomi-oriola-7ab252421?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">in</span>
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>
            <div className="contact-form contact-links-panel">
              <p>For project enquiries, reach out through any of the contact options.</p>
              <a className="submit-button" href={`mailto:${email}`}>Email Abbah's Own Designs <ArrowUpRight size={17} /></a>
              <a className="submit-button" href={`https://wa.me/${whatsapp.slice(1)}`} target="_blank" rel="noreferrer">Start a WhatsApp chat <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>
      </main>

      {selectedProject && (
        <div
          className="lightbox"
          onClick={() => setSelectedProject(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelectedProject(null)}
            aria-label="Close enlarged image"
          >
            &times;
          </button>

          <img
            src={selectedProject.image}
            alt={selectedProject.name}
            className="lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />

          <p>{selectedProject.name}</p>
        </div>
      )}

      <footer className="footer section-wrap"><a className="wordmark brand-wordmark" href="#home"><img
        src={`${import.meta.env.BASE_URL}images/abbas-logo.png`}
        alt="Abba's Own Designs logo"
        className="brand-logo"
      /></a><span>Triumph Wed Dev © 2026</span><a href="#home">BACK TO TOP ↑</a></footer>
    </div>
  );
}
