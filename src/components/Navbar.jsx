import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { practiceInfo } from '../siteContent';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Patient Information', to: '/new-patients' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 980) setOpen(false);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link className="brand" to="/" aria-label={practiceInfo.practiceName}>
          <span className="brand-kicker">Gynecology</span>
          <div className="brand-title">{practiceInfo.doctorName}</div>
          <div className="brand-subtitle">{practiceInfo.cityStateZip}</div>
        </Link>

        <nav className="nav-menu desktop-nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="topbar-actions">
          <a className="button button-small desktop-cta" href={practiceInfo.phoneHref}>
            Call {practiceInfo.phoneDisplay}
          </a>

          <button
            type="button"
            className={`menu-toggle ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-panel ${open ? 'mobile-panel-open' : ''}`}>
        <div className="container mobile-panel-inner">
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? 'mobile-nav-link nav-link-active' : 'mobile-nav-link'
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mobile-panel-footer">
            <a className="button" href={practiceInfo.phoneHref} onClick={() => setOpen(false)}>
              Call the Office
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
