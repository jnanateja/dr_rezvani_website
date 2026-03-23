import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { practiceInfo } from '../App';

export default function SiteLayout() {
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
