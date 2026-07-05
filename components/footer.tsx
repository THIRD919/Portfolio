/**
 * [ไฟล์] components/footer.tsx
 * -----------------------------------------------------------------------
 * หน้าที่: ท้ายหน้าเว็บของทุกหน้า — ชื่อย่อ, ลิงก์โซเชียล (ไม่มี GitHub ตามที่ตั้งใจ),
 *          ข้อความลิขสิทธิ์ (ปีปัจจุบันคำนวณอัตโนมัติ) และเครดิตเทคโนโลยีที่ใช้
 *
 * ข้อมูลที่ใช้ (มาจาก lib/content.ts): profile, footer
 * ถูกเรียกใช้ที่: app/layout.tsx (วางไว้นอกสุด ล่างสุดของทุกหน้า)
 *
 * วิธีแก้ลิงก์โซเชียล: ไปแก้ที่ footer.links ใน lib/content.ts (อย่าลืมตัด GitHub ทิ้งเสมอ)
 * -----------------------------------------------------------------------
 */
"use client";

import { useLanguage } from "@/lib/language-context";
import { profile, footer } from "@/lib/content";
import Logo from "./logo";

export default function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear(); // ปีปัจจุบัน คำนวณสดทุกครั้งที่โหลดหน้า

  return (
    <footer className="border-t border-slate-200 py-10 text-center dark:border-white/10">
      {/* โลโก้ตายตัว ไม่เปลี่ยนตามภาษา (เหมือนที่ navbar.tsx ใช้ — ดู components/logo.tsx) */}
      <div className="flex justify-center">
        <Logo />
      </div>

      {/* ลิงก์โซเชียล วนลูปจาก footer.links (lib/content.ts) — ตั้งใจไม่มี GitHub */}
      <div className="mt-4 flex justify-center gap-6">
        {footer.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-500 transition hover:text-accent dark:text-slate-400"
          >
            {link.label}
          </a>
        ))}
      </div>

      <p className="mt-6 text-xs text-slate-400 dark:text-slate-500">
        &copy; {year} {profile.name[lang]}. {lang === "th" ? "สงวนลิขสิทธิ์" : "All rights reserved."}
      </p>
      <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{footer.credit[lang]}</p>
    </footer>
  );
}
