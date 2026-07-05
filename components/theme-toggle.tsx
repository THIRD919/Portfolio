/**
 * [ไฟล์] components/theme-toggle.tsx
 * -----------------------------------------------------------------------
 * หน้าที่: ปุ่มไอคอน (พระอาทิตย์/พระจันทร์) สำหรับสลับ Dark/Light theme
 * ถูกใช้ที่: components/navbar.tsx (ทั้งเวอร์ชันเดสก์ท็อปและเมนูมือถือ)
 * ทำงานร่วมกับ: components/theme-provider.tsx (ตัว Provider ที่ครอบแอปไว้)
 * -----------------------------------------------------------------------
 */
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // เหตุผลที่ต้องมี mounted:
  // next-themes รู้ค่า theme จริงได้ก็ต่อเมื่อ component render ฝั่ง client แล้วเท่านั้น
  // ถ้าไม่กันจุดนี้ไว้ หน้าเว็บจะกระพริบ/ไม่ตรงกันระหว่าง server กับ client (hydration mismatch)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-9 w-9" />; // ที่ว่างขนาดเท่าปุ่มจริง กันเลย์เอาต์กระโดด

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-accent hover:text-accent dark:border-white/20 dark:text-slate-200"
    >
      {/* ถ้าตอนนี้เป็นธีมมืด โชว์ไอคอนพระอาทิตย์ (กดแล้วจะเปลี่ยนเป็นสว่าง) และกลับกัน */}
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
      )}
    </button>
  );
}
