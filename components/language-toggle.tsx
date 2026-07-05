/**
 * [ไฟล์] components/language-toggle.tsx
 * -----------------------------------------------------------------------
 * หน้าที่: ปุ่มคู่ EN / TH สำหรับสลับภาษาทั้งเว็บ
 * ถูกใช้ที่: components/navbar.tsx (ทั้งเวอร์ชันเดสก์ท็อปและเมนูมือถือ)
 * ทำงานร่วมกับ: lib/language-context.tsx (ดึง lang ปัจจุบัน + ฟังก์ชัน setLang มาใช้)
 * -----------------------------------------------------------------------
 */
"use client";

import { useLanguage } from "@/lib/language-context";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-slate-300 p-0.5 text-xs font-semibold dark:border-white/20">
      {/* ปุ่ม EN: กดแล้วเรียก setLang("en") จาก lib/language-context.tsx */}
      <button
        onClick={() => setLang("en")}
        className={`rounded-full px-2 py-1 transition ${
          lang === "en" ? "bg-accent text-white" : "text-slate-500 dark:text-slate-300"
        }`}
      >
        EN
      </button>
      {/* ปุ่ม TH: กดแล้วเรียก setLang("th") จาก lib/language-context.tsx */}
      <button
        onClick={() => setLang("th")}
        className={`rounded-full px-2 py-1 transition ${
          lang === "th" ? "bg-accent text-white" : "text-slate-500 dark:text-slate-300"
        }`}
      >
        TH
      </button>
    </div>
  );
}
