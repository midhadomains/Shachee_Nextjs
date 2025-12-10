import { useState } from "react";
import Link from "next/link";
import { siteData } from "../data/siteData";

export default function Header() {
  const { site, social } = siteData;
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#research", label: "Research" },
    { href: site.resumeUrl || "/api/resume", label: "Resume" },
    { href: "/#contact", label: "Contact" }
  ];

  const socials = [
    { id: "github", href: social.github, label: "GitHub", svg: <path d="M12 .5C5.6.5.5 5.7.5 12.2c0 5.2 3.4 9.6 8.2 11.2.6.1.8-.3.8-.6v-2c-3.3.8-4-1.6-4-1.6-.5-1.3-1.1-1.6-1.1-1.6-.9-.7.1-.7.1-.7 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.3.8.9.8 1.9v2.9c0 .3.2.7.8.6A11.8 11.8 0 0 0 23.5 12C23.5 5.7 18.4.5 12 .5z" /> },
    { id: "linkedin", href: social.linkedin, label: "LinkedIn", svg: <path d="M4.98 3.5a2.5 2.5 0 1 1-5-.02 2.5 2.5 0 0 1 5 .02zM.5 23.5h4.9V7.9H.5v15.6zM8.4 7.9v15.6h4.9v-8.5c0-2.3.5-3.6 2.5-3.6 1.9 0 1.9 1.6 1.9 3.7v8.4h4.9v-9.1c0-4.5-1-7.1-5.4-7.1-2.2 0-3.7 1.2-4.3 2.3h-.1V7.9H8.4z" /> },
    { id: "twitter", href: social.twitter, label: "Twitter", svg: <path d="M23.5 4.8c-.8.4-1.6.6-2.5.8a4.3 4.3 0 0 0-7.3 3v.8A12.1 12.1 0 0 1 2 3.6a4.3 4.3 0 0 0 1.3 5.8c-.7 0-1.3-.2-1.9-.5v.1a4.3 4.3 0 0 0 3.4 4.2 4.3 4.3 0 0 1-1.9.1 4.3 4.3 0 0 0 4 3 8.6 8.6 0 0 1-5.3 1.8c-.3 0-.7 0-1-.1a12.2 12.2 0 0 0 18.8-10.2v-.6c.8-.5 1.5-1.2 2-2z" /> }
  ];

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-16 py-4">
        <Link href="/" className="text-lg font-semibold text-brand-800 hover:text-brand-600">
          {site.title}
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-4 text-sm font-medium text-slate-700">
            {navLinks.map(link => (
              <li key={link.href}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-700"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className="hover:text-brand-700">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden sm:flex items-center gap-3">
          {socials.map(s => (
            <a key={s.id} href={s.href || "#"} target="_blank" rel="noreferrer" aria-label={s.label} className="p-2 text-slate-600 hover:text-brand-700 hover:bg-brand-50 rounded-full transition">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5 fill-current">{s.svg}</svg>
            </a>
          ))}
        </div>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-slate-700 hover:bg-brand-50"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
            {menuOpen ? (
              <path stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 2000
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(15,23,42,0.75)"
            }}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu overlay"
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "auto",
              maxHeight: "90vh",
              width: "60vw",
              maxWidth: "480px",
              minWidth: "200px",
              background: "#ffffff",
              color: "#0f172a",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
              borderLeft: "1px solid #e2e8f0",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden"
            }}
          >
            <div className="px-5 py-4 flex justify-end border-b border-slate-200">
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-brand-800 hover:text-brand-900"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>
            <div style={{ flex: 1, overflowY: "auto" }}>
              <ul className="divide-y divide-slate-200 text-sm font-semibold">
                {navLinks.map(link => {
                  const isResume = link.label === "Resume";
                  const itemClass = isResume
                    ? "block py-4 px-5 bg-gradient-to-r from-orange-50 to-rose-50 text-brand-800 shadow-sm"
                    : "block py-4 px-5 hover:bg-slate-50";
                  return (
                    <li key={link.href}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className={itemClass}
                          onClick={() => setMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className={itemClass} onClick={() => setMenuOpen(false)}>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="px-5 py-4 flex items-center gap-3 border-t border-slate-200">
              {socials.map(s => (
                <a
                  key={s.id}
                  href={s.href || "#"}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="p-2 text-slate-600 hover:text-brand-700 hover:bg-brand-50 rounded-full transition"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5 fill-current">{s.svg}</svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
