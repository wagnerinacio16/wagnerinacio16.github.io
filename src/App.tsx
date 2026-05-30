import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDown,
  ArrowUp,
  Award,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { content, Language, profileLinks } from './content';
import { useSectionNavigation } from './useSectionNavigation';

const languageNames: Record<Language, string> = {
  pt: 'PT',
  en: 'EN',
};

const sectionIds = ['hero', 'about', 'impact', 'skills', 'experience', 'projects', 'education', 'contact'];

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

function TypingRole({ roles }: { roles: string[] }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(roles[0]?.length ?? 0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || roles.length === 0) {
      setRoleIndex(0);
      setCharIndex(roles[0]?.length ?? 0);
      setIsDeleting(false);
      return undefined;
    }

    const currentRole = roles[roleIndex];
    const isComplete = !isDeleting && charIndex === currentRole.length;
    const isEmpty = isDeleting && charIndex === 0;
    const delay = isComplete ? 1500 : isEmpty ? 260 : isDeleting ? 42 : 72;

    const timeout = window.setTimeout(() => {
      if (isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty) {
        setIsDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
        return;
      }

      setCharIndex((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [charIndex, isDeleting, prefersReducedMotion, roleIndex, roles]);

  const text = prefersReducedMotion ? roles[0] : roles[roleIndex].slice(0, charIndex);

  return (
    <span className="typing-role">
      {text}
      <span className="cursor-mark" aria-hidden="true" />
    </span>
  );
}

function CircuitBackground() {
  const traces = [
    'M100 8 H82 V20 H72 L64 28 V38 H55',
    'M100 18 H88 L78 28 H66',
    'M100 30 H78 V42 L68 52 H56',
    'M100 43 H90 L80 54 V64 H68 L58 74',
    'M100 56 H84 L74 66 H62',
    'M100 69 H87 V79 L76 90 H60',
    'M100 84 H90 L82 94 H68',
    'M76 0 V16 L68 24',
    'M88 0 V12 H80 V22',
    'M94 100 V86 H84 L76 78',
    'M48 88 L58 78 H70',
    'M40 45 H51',
  ];

  return (
    <div className="circuit-background" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="circuit-line" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#1d4fff" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#00b7ff" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#7df9ff" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        {traces.map((path, index) => (
          <path key={path} d={path} className="circuit-line" style={{ animationDelay: `${index * 0.16}s` }} />
        ))}
        {[
          [55, 38],
          [66, 28],
          [56, 52],
          [58, 74],
          [62, 66],
          [60, 90],
          [70, 78],
          [51, 45],
        ].map(([cx, cy], index) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.35" className="circuit-node" style={{ animationDelay: `${index * 0.2}s` }} />
        ))}
      </svg>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState<Language>('pt');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const data = content[language];
  const [firstName, lastName] = data.hero.name.split(' ');
  useSectionNavigation(sectionIds);
  const navItems = useMemo(
    () => [
      { href: '#about', label: data.nav.about },
      { href: '#impact', label: data.nav.impact },
      { href: '#skills', label: data.nav.skills },
      { href: '#experience', label: data.nav.experience },
      { href: '#projects', label: data.nav.projects },
      { href: '#education', label: data.nav.education },
      { href: '#contact', label: data.nav.contact },
    ],
    [data.nav],
  );

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    document.title = `${data.hero.name} | ${data.hero.title}`;
  }, [data.hero.name, data.hero.title, language]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

      setIsScrolled(window.scrollY > 12);
      setShowBackToTop(window.scrollY > 180);
      setScrollProgress(Math.min(Math.max(nextProgress, 0), 1));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site-shell">
      <div className="ambient-field" aria-hidden="true" />
      <header className={isScrolled ? 'site-header is-scrolled' : 'site-header'}>
        <a className="brand" href="#top" aria-label={data.hero.name}>
          <span className="brand-mark">&lt;WO/&gt;</span>
        </a>

        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="language-switch" aria-label="Language selector">
          {(Object.keys(languageNames) as Language[]).map((item) => (
            <button
              key={item}
              type="button"
              className={item === language ? 'is-active' : ''}
              onClick={() => setLanguage(item)}
              aria-pressed={item === language}
            >
              {languageNames[item]}
            </button>
          ))}
        </div>
      </header>

      <main id="top">
        <section className="hero" id="hero">
          <CircuitBackground />
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              <TypingRole roles={data.hero.roles} />
            </p>
            <h1>
              <span>{firstName}</span>
              <span className="accent-name">{lastName}</span>
            </h1>
            <p className="hero-summary">{data.hero.summary}</p>

            <div className="hero-meta">
              <span>
                <MapPin size={16} aria-hidden="true" />
                {data.hero.location}
              </span>
            </div>

            <div className="cta-row">
              <a className="button" href={profileLinks.github} target="_blank" rel="noreferrer">
                <Github size={18} aria-hidden="true" />
                {data.hero.githubCta}
              </a>
              <a className="button" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} aria-hidden="true" />
                {data.hero.primaryCta}
              </a>
              <a className="button" href={profileLinks.email}>
                <Mail size={18} aria-hidden="true" />
                {data.hero.secondaryCta}
              </a>
            </div>
          </div>
          <a className="scroll-hint" href="#about">
            {data.hero.scrollHint}
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </section>

        <section className="section-pad about-section" id="about">
          <div className="section-heading">
            <p className="section-kicker">
              <span aria-hidden="true">//</span>
              {data.about.eyebrow}
            </p>
            <h2>{data.about.title}</h2>
          </div>
          <div className="about-copy">
            {data.about.paragraphs.map((paragraph) => (
              <p key={typeof paragraph === 'string' ? paragraph : paragraph.map((segment) => segment.text).join('')}>
                {typeof paragraph === 'string'
                  ? paragraph
                  : paragraph.map((segment) =>
                      segment.href ? (
                        <a
                          className="inline-origin-link"
                          key={segment.text}
                          href={segment.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={segment.ariaLabel}
                        >
                          {segment.text}
                        </a>
                      ) : (
                        segment.text
                      ),
                    )}
              </p>
            ))}
          </div>
        </section>

        <section className="section-pad section-heading results-section" id="impact">
          <p className="section-kicker">
            <span aria-hidden="true">//</span>
            {data.nav.impact}
          </p>
          <h2>{data.impact.title}</h2>
          <p>{data.impact.subtitle}</p>
          <div className="impact-grid">
            {data.impact.items.map((item) => (
              <article className="impact-card" key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad" id="skills">
          <div className="section-heading compact">
            <p className="section-kicker">
              <span aria-hidden="true">//</span>
              {data.nav.skills}
            </p>
            <h2>{data.skills.title}</h2>
            <p>{data.skills.subtitle}</p>
          </div>
          <div className="skills-grid">
            {data.skills.groups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{`{${group.title}}`}</h3>
                <p>{data.skills.subtitleByGroup?.[group.title] ?? ''}</p>
                <div className="chip-list skill-chips">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad" id="experience">
          <div className="section-heading compact">
            <p className="section-kicker">
              <span aria-hidden="true">//</span>
              {data.nav.experience}
            </p>
            <h2>{data.experience.title}</h2>
            <p>{data.experience.subtitle}</p>
          </div>
          <div className="timeline">
            {data.experience.roles.map((role) => (
              <article className="timeline-item" key={`${role.company}-${role.role}`} tabIndex={0}>
                <div className="timeline-date">{role.period}</div>
                <div className="timeline-content timeline-card">
                  <p>{role.company}</p>
                  <h3>{role.role}</h3>
                  <ul className="timeline-details">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <span className="timeline-hint">
                    {data.experience.detailsHint}
                    <ChevronDown size={14} aria-hidden="true" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad" id="projects">
          <div className="section-heading compact">
            <p className="section-kicker">
              <span aria-hidden="true">//</span>
              {data.nav.projects}
            </p>
            <h2>{data.projects.title}</h2>
            <p>{data.projects.subtitle}</p>
          </div>
          <div className="project-grid">
            {data.projects.items.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-card-header">
                  <div>
                    {project.status ? <span className="project-status">{project.status}</span> : null}
                    <h3>{project.name}</h3>
                  </div>
                  <a
                    className="project-repository-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={data.projects.repositoryAriaLabel}
                  >
                    <Github size={18} aria-hidden="true" />
                  </a>
                </div>
                <div className="project-card-body">
                  <p>{project.description}</p>
                  <strong>{project.impact}</strong>
                </div>
                <div className="chip-list project-chips">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad" id="education">
          <div className="section-heading compact">
            <p className="section-kicker">
              <span aria-hidden="true">//</span>
              {data.nav.education}
            </p>
            <h2>{data.education.title}</h2>
            {data.education.subtitle ? <p>{data.education.subtitle}</p> : null}
          </div>
          <div className="timeline education-timeline">
            {data.education.items.map((item) => (
              <article className="timeline-item" key={item.degree} tabIndex={0}>
                <div className="timeline-date">{item.period}</div>
                <div className="timeline-content timeline-card education-item">
                  <p>{item.institution}</p>
                  <h3>{item.degree}</h3>
                  {item.highlight ? (
                    <span className="education-achievement">
                      <Award size={16} aria-hidden="true" />
                      {item.highlight}
                    </span>
                  ) : null}
                  {item.note ? <small className="timeline-details">{item.note}</small> : null}
                  {item.note ? (
                    <span className="timeline-hint">
                      {data.experience.detailsHint}
                      <ChevronDown size={14} aria-hidden="true" />
                    </span>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div>
            <p className="section-kicker">
              <span aria-hidden="true">//</span>
              {data.nav.contact}
            </p>
            <h2>{data.contact.title}</h2>
            <p>{data.contact.subtitle}</p>
          </div>
          <div className="contact-actions">
            <a href={profileLinks.email}>
              <Mail size={18} aria-hidden="true" />
              {data.contact.emailLabel}
            </a>
            <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} aria-hidden="true" />
              {data.contact.linkedinLabel}
            </a>
            <a href={profileLinks.github} target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" />
              {data.contact.githubLabel}
            </a>
          </div>
        </section>
      </main>
      <button
        className={showBackToTop ? 'floating-back-to-top is-visible' : 'floating-back-to-top'}
        type="button"
        aria-label={language === 'pt' ? 'Voltar ao topo' : 'Back to top'}
        style={{ '--scroll-progress': `${scrollProgress * 360}deg` } as React.CSSProperties}
        onClick={handleBackToTop}
      >
        <ArrowUp size={18} aria-hidden="true" />
      </button>

      <footer className="site-footer">
        <div className="footer-brand">
          <span>&lt;WO/&gt;</span>
        </div>
        <p className="footer-note">
          {language === 'pt'
            ? '© 2026 Wagner Inácio de Oliveira. Todos os direitos reservados.'
            : '© 2026 Wagner Inácio de Oliveira. All rights reserved.'}
        </p>
      </footer>
    </div>
  );
}

export default App;
