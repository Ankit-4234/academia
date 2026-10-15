import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

export default function MainLayout() {
  const { pathname, hash } = useLocation();

  // New page: scroll to top. Link with #section: scroll to that section.
  useEffect(() => {
    const id = hash ? decodeURIComponent(hash.slice(1)) : "";
    const timer = window.setTimeout(() => {
      const target = id ? document.getElementById(id) : null;
      if (target) {
        target.scrollIntoView();
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <TopBar />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
