/**
 * [ไฟล์] components/navbar.tsx
 * -----------------------------------------------------------------------
 * หน้าที่: แถบเมนูด้านบนสุดของทุกหน้า (sticky อยู่บนตลอดตอนเลื่อนหน้าจอ)
 * ประกอบด้วย: โลโก้/ชื่อย่อ, เมนูนำทาง 5 อัน, ปุ่มสลับภาษา, ปุ่มสลับธีม, เมนูมือถือ
 *
 * ใช้งานร่วมกับ:
 *   - app/layout.tsx              -> ถูกวางไว้บนสุดของทุกหน้า (นอก <main>)
 *   - components/logo.tsx         -> โลโก้ตายตัว (ไม่เปลี่ยนตามภาษา) มุมซ้ายบน
 *   - lib/language-context.tsx    -> useLanguage() เพื่อโชว์เมนูเป็นไทย/อังกฤษ
 *   - components/theme-toggle.tsx และ language-toggle.tsx -> ปุ่มมุมขวา
 *   - หน้าที่ลิงก์ไปหา: app/page.tsx (#home #about #skills #projects)
 *     และ app/contact/page.tsx (/contact)
 * -----------------------------------------------------------------------
 */
"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import ThemeToggle from "./theme-toggle";
import LanguageToggle from "./language-toggle";
import Logo from "./logo";

// รายการเมนูนำทาง แก้/เพิ่ม/ลบเมนูได้ตรงนี้ที่เดียว
// href ที่ขึ้นต้นด้วย /# คือ anchor ไปยัง section ในหน้าแรก (ดูใน app/page.tsx)
const NAV_ITEMS = [
  { href: "/#home", th: "หน้าแรก", en: "Home" },
  { href: "/#about", th: "เกี่ยวกับ", en: "About" },
  { href: "/#skills", th: "ทักษะ", en: "Skills" },
  { href: "/#projects", th: "โปรเจกต์", en: "Projects" },
  { href: "/contact", th: "ติดต่อ", en: "Contact" },
];

export default function Navbar() {
  const { lang } = useLanguage();
  // สถานะเปิด/ปิดเมนูมือถือ (แฮมเบอร์เกอร์เมนู) — ใช้เฉพาะจอเล็กกว่า md
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-[#0a0a12]/70">
      {/* แถบเมนูเวอร์ชันเดสก์ท็อป (แสดงเฉพาะจอ md ขึ้นไป ผ่านคลาส hidden md:flex) */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        {/* โลโก้: ตายตัวไม่เปลี่ยนตามภาษา (ดูรายละเอียดที่ components/logo.tsx) */}
        <Link href="/#home">
          <Logo />
        </Link>

        {/* เมนูนำทางเดสก์ท็อป วนลูปจาก NAV_ITEMS ด้านบน */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-accent dark:text-slate-300"
            >
              {lang === "th" ? item.th : item.en}
            </Link>
          ))}
        </nav>

        {/* ปุ่มสลับภาษา + ธีม (เดสก์ท็อป) */}
        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* ปุ่มแฮมเบอร์เกอร์ (แสดงเฉพาะจอมือถือ, ซ่อนที่ md ขึ้นไป) */}
        <button
          className="flex items-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Open main menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* เมนูมือถือแบบเลื่อนลง (dropdown) แสดงเมื่อ open === true เท่านั้น */}
      {open && (
        <div className="border-t border-slate-200 px-6 py-4 md:hidden dark:border-white/10">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)} // กดเมนูแล้วปิดเมนูมือถือทันที
                className="text-sm font-medium text-slate-600 dark:text-slate-300"
              >
                {lang === "th" ? item.th : item.en}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
