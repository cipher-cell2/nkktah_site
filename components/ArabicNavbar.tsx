'use client';

import { useState } from 'react';

export default function ArabicNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-3">
      <div className="container">
        <nav className="rounded-full border border-black/5 bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(10,20,15,.06)] px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-extrabold text-lg">نقطة <span className="opacity-40">Nuktah</span></a>
          <div className="hidden md:flex items-center gap-7 text-sm font-semibold">
            <a href="#features">المميزات</a><a href="#how">كيف تعمل</a><a href="#pricing">الأسعار</a><a href="#faq">الأسئلة</a>
          </div>
          <div className="flex items-center gap-2">
            <a className="hidden sm:inline text-sm font-bold px-3" href="/">English</a>
            <a className="btn btn-primary !py-2.5 !px-4 text-sm" href="https://play.google.com/store/apps/details?id=app.nuktah" target="_blank" rel="noreferrer">ابدأ مجانًا</a>
            <button className="md:hidden btn btn-ghost !p-2.5" onClick={() => setOpen(!open)} aria-label="القائمة" aria-expanded={open}>☰</button>
          </div>
        </nav>
        {open && <div className="md:hidden mt-2 rounded-3xl border border-black/5 bg-white p-5 shadow-xl flex flex-col gap-4 font-semibold"><a href="#features">المميزات</a><a href="#how">كيف تعمل</a><a href="#pricing">الأسعار</a><a href="#faq">الأسئلة</a><a href="/">English</a></div>}
      </div>
    </header>
  );
}