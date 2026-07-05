/**
 * [ไฟล์] components/theme-provider.tsx
 * -----------------------------------------------------------------------
 * หน้าที่: ครอบแอปด้วยระบบสลับ Dark/Light theme (ใช้ไลบรารีสำเร็จรูป next-themes)
 *
 * ใช้งานร่วมกับ:
 *   - app/layout.tsx            -> ครอบ <ThemeProvider> ไว้นอกสุดของทั้งแอป
 *   - components/theme-toggle.tsx -> ปุ่มกดสลับธีม เรียก useTheme() จาก next-themes โดยตรง
 *   - app/globals.css           -> คลาส dark: ของ Tailwind จะทำงานตาม attribute="class"
 *     ที่ next-themes เติมให้ที่ <html> (เช่น <html class="dark">)
 * -----------------------------------------------------------------------
 */
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    // attribute="class"   -> เติม/ลบ class="dark" ที่ <html> โดยตรง (ตรงกับ darkMode: "class" ใน tailwind.config.ts)
    // defaultTheme="dark" -> เปิดเว็บครั้งแรกเป็นธีมมืดก่อน (แก้เป็น "light" ได้ถ้าอยากให้เริ่มเป็นสว่าง)
    // enableSystem={false} -> ไม่ยึดตามธีมของระบบปฏิบัติการผู้ใช้ ให้ผู้ใช้เลือกเองอย่างเดียว
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </NextThemesProvider>
  );
}
