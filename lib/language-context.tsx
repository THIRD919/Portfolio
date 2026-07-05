/**
 * [ไฟล์] lib/language-context.tsx
 * -----------------------------------------------------------------------
 * หน้าที่: ระบบสลับภาษาไทย/อังกฤษของทั้งเว็บ (Global Language Context)
 *
 * วิธีทำงาน:
 *   1. LanguageProvider ครอบทั้งแอปไว้ที่ app/layout.tsx (ดู <LanguageProvider> ที่นั่น)
 *   2. ทุกคอมโพเนนต์ที่ต้องการรู้ว่าตอนนี้ภาษาอะไร ให้เรียก useLanguage()
 *      แล้วจะได้ { lang, toggleLang, setLang } กลับมา
 *   3. ค่าภาษาที่เลือกจะถูกจำไว้ใน localStorage (key: "portfolio-lang")
 *      เพื่อให้ปิดเปิดเว็บใหม่แล้วยังจำภาษาเดิมได้
 *
 * ใช้งานร่วมกับ:
 *   - app/layout.tsx        -> ครอบ <LanguageProvider> ไว้นอกสุด (รองจาก ThemeProvider)
 *   - components/language-toggle.tsx -> ปุ่มกด EN/TH เรียก setLang()
 *   - ทุกไฟล์ที่ import { useLanguage } เช่น hero.tsx, about.tsx, skills.tsx ฯลฯ
 *   - lib/content.ts         -> ข้อมูลที่ดึงมาโชว์เป็นแบบ { th, en } เข้าคู่กับ lang นี้
 * -----------------------------------------------------------------------
 */
"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// ชนิดข้อมูลภาษา มีแค่ 2 ค่า: "th" (ไทย) กับ "en" (อังกฤษ)
// type นี้ถูก import ไปใช้ที่ components/status-pill.tsx ด้วย (เพื่อระบุ prop lang)
export type Lang = "th" | "en";

// รูปแบบของ Context ที่ทุกคอมโพเนนต์ลูกจะเรียกใช้ผ่าน useLanguage()
type LanguageContextType = {
  lang: Lang;               // ภาษาปัจจุบัน
  toggleLang: () => void;   // สลับภาษาไปมา (th <-> en)
  setLang: (l: Lang) => void; // ตั้งค่าภาษาแบบเจาะจง (ใช้ในปุ่ม EN / TH)
};

// สร้าง React Context เปล่าไว้ก่อน (ค่าเริ่มต้น undefined เพื่อบังคับให้ต้องอยู่ใน Provider)
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// ชื่อ key ที่ใช้เก็บค่าภาษาลง localStorage ของเบราว์เซอร์
const STORAGE_KEY = "portfolio-lang";

/**
 * LanguageProvider
 * ครอบ (wrap) ทั้งแอปไว้ 1 ครั้งที่ app/layout.tsx เพื่อแจกจ่ายค่าภาษา
 * ให้ทุกหน้า/ทุกคอมโพเนนต์ลูกใช้งานร่วมกันได้
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  // ค่าเริ่มต้นคือภาษาไทย ("th") ก่อนจะเช็ค localStorage ใน useEffect ด้านล่าง
  const [lang, setLangState] = useState<Lang>("th");

  // ทำงานครั้งเดียวตอนโหลดหน้าเว็บฝั่ง client (localStorage ใช้ได้เฉพาะฝั่ง browser)
  // ถ้าเคยมีการเลือกภาษาไว้ก่อนหน้านี้ ให้ดึงมาใช้แทนค่าเริ่มต้น
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "th" || stored === "en") {
      setLangState(stored);
    }
  }, []);

  // ฟังก์ชันตั้งค่าภาษา พร้อมบันทึกลง localStorage ทุกครั้งที่เปลี่ยน
  // เรียกใช้จาก components/language-toggle.tsx เมื่อกดปุ่ม EN หรือ TH
  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  // สลับภาษาแบบ toggle (ถ้าไทยอยู่ -> เปลี่ยนเป็นอังกฤษ และกลับกัน)
  const toggleLang = () => setLang(lang === "th" ? "en" : "th");

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * useLanguage()
 * Hook ที่คอมโพเนนต์ไหนก็ตามเรียกใช้เพื่อดึงภาษาปัจจุบันมาโชว์ข้อความ
 * ตัวอย่างการใช้งาน: const { lang } = useLanguage(); แล้วเอาไปทำ profile.name[lang]
 * ถ้าเรียกใช้นอก <LanguageProvider> จะ throw error ทันที (กันลืม wrap)
 */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
