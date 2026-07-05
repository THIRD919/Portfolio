/**
 * [ไฟล์] tailwind.config.ts
 * -----------------------------------------------------------------------
 * ตั้งค่า Tailwind CSS ของทั้งโปรเจกต์
 * darkMode: "class"  -> ทำงานคู่กับ components/theme-provider.tsx ที่เติม
 *                       class="dark" ที่ <html> เอง (ไม่ใช้ prefers-color-scheme)
 * content: []        -> บอก Tailwind ว่าไฟล์ไหนบ้างที่มีการใช้คลาส Tailwind
 *                       (ต้องครอบคลุมทุกโฟลเดอร์ที่มีคลาส ไม่งั้นคลาสจะไม่ถูกสร้าง)
 * colors.accent      -> สีธีมหลักของเว็บ ใช้ทั่วทั้งเว็บผ่านคลาส text-accent,
 *                       bg-accent ฯลฯ (ดูใน app/globals.css คลาส .eyebrow, .btn-primary)
 * animation/keyframes fadeUp -> ใช้ที่ components/hero.tsx (คลาส animate-fadeUp)
 * -----------------------------------------------------------------------
 */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          dark: "#4f46e5",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
