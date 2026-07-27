"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useAppStore } from "@/lib/useAppStore";

/**
 * `pageCt` is the page-level App Store campaign token. It matters here as much
 * as it does on the in-body CTA: the navbar Download button is the first App
 * Store link on the page, and without the token an install from it reports
 * under the sitewide default instead of the page that earned it. An incoming
 * ad's utm_content still wins over it (see useAppStore).
 */
export default function Navbar({ pageCt }: { pageCt?: string } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { href: appStoreHref, onClick: trackDownload } = useAppStore(pageCt);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-pw-bg/80 backdrop-blur-xl border-b border-pw-border-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2" aria-label="PrepWise home">
          <img src="/logo.svg" alt="PrepWise" className="h-8" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-pw-text-subtle hover:text-pw-text transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={appStoreHref}
            onClick={() => trackDownload("navbar")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-pw-brand px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-pw-brand/90 hover:shadow-lg hover:shadow-pw-brand/20"
          >
            Download
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-pw-text"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-pw-bg/95 backdrop-blur-xl border-b border-pw-border-soft overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-pw-text-subtle hover:text-pw-text transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={appStoreHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-pw-brand px-4 py-2.5 text-center text-sm font-semibold text-white"
                onClick={() => {
                  trackDownload("navbar_mobile");
                  setMobileOpen(false);
                }}
              >
                Download
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
