import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { practiceInfo } from '../siteContent';

export default function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    const animatedElements = Array.from(document.querySelectorAll('.fade-up, .reveal'));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      animatedElements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    animatedElements.forEach((element) => element.classList.remove('is-visible'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -6% 0px',
        threshold: 0.08,
      }
    );

    requestAnimationFrame(() => {
      animatedElements.forEach((element) => observer.observe(element));
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <a className="sticky-call-mobile" href={practiceInfo.phoneHref}>
        Call {practiceInfo.phoneDisplay}
      </a>
      <Footer />
    </div>
  );
}
