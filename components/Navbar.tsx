'use client';

import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-3">
      <div className="container">
        <nav className="rounded-full border border-black/5 bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(10,20,15,.06)] px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-extrabold text-lg tracking-tight">نقطة <span className="opacity-40">Nuktah</span></a>
          <div className="hidden md:flex items-center gap-7 text-sm font-semibold">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="flex items-center gap-2">
            <a className="hidden sm:inline text-sm font-bold px-3" href="/ar">العربية</a>
            <a className="btn btn-primary !py-2.5 !px-4 text-sm" href="https://play.google.com/store/apps/details?id=app.nuktah" target="_blank" rel="noreferrer">Start for free</a>
            <button className="md:hidden btn btn-ghost !p-2.5" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>☰</button>
          </div>
        </nav>
        {open && (
          <div className="md:hidden mt-2 rounded-3xl border border-black/5 bg-white p-5 shadow-xl flex flex-col gap-4 font-semibold">
            <a href="#features" onClick={() => setOpen(false)}>Features</a>
            <a href="#how" onClick={() => setOpen(false)}>How it works</a>
            <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
            <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
            <a href="/ar">العربية</a>
          </div>
        )}
      </div>
    </header>
  );
}