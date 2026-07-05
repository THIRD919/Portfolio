/**
 * [ไฟล์] app/contact/page.tsx
 * -----------------------------------------------------------------------
 * หน้าที่: หน้าติดต่อ (route "/contact") — โชว์อีเมล, เบอร์โทร, ลิงก์โซเชียล
 *          เป็นฟอร์มธรรมดาไม่มีระบบล็อกอิน/สมัครสมาชิก (ตัดออกตามแผนที่คุยกันไว้
 *          ดู PORTFOLIO-PLAN.md หัวข้อ "สิ่งที่ตัดออก")
 *
 * ข้อมูลที่ใช้ (มาจาก lib/content.ts): contact, profile
 * ถูกลิงก์มาจาก: components/navbar.tsx (เมนู "ติดต่อ"/"Contact")
 *                components/hero.tsx (ปุ่ม "ติดต่อผม"/"Get in Touch")
 * -----------------------------------------------------------------------
 */
"use client";

import { useLanguage } from "@/lib/language-context";
import { contact, profile } from "@/lib/content";

export default function ContactPage() {
  const { lang } = useLanguage();

  return (
    <section className="section max-w-2xl">
      <p className="eyebrow text-center">{contact.eyebrow[lang]}</p>
      <h1 className="mt-3 text-center text-3xl font-bold md:text-4xl">
        {contact.heading[lang]}
      </h1>
      <p className="mx-auto mt-3 max-w-md text-center text-slate-500 dark:text-slate-400">
        {contact.intro[lang]}
      </p>

      <div className="mt-12 space-y-4">
        {/* แถวอีเมล: กดแล้วเปิดโปรแกรมส่งอีเมลผ่าน mailto: */}
        <div className="card flex items-center justify-between">
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</span>
          <a href={`mailto:${profile.email}`} className="font-semibold text-accent hover:underline">
            {profile.email}
          </a>
        </div>
        {/* แถวเบอร์โทร: โชว์เฉย ๆ ไม่ต้องกดได้ */}
        <div className="card flex items-center justify-between">
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {lang === "th" ? "โทรศัพท์" : "Phone"}
          </span>
          <span className="font-semibold">{profile.phone}</span>
        </div>

        {/* แถวลิงก์โซเชียลอื่น ๆ วนลูปจาก contact.links (lib/content.ts) ไม่มี GitHub */}
        {contact.links.map((link) => (
          <div key={link.label} className="card flex items-center justify-between">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {link.label}
            </span>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline"
            >
              {link.href.replace("https://", "")}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
