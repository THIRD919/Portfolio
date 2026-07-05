/**
 * [ไฟล์] app/layout.tsx
 * -----------------------------------------------------------------------
 * หน้าที่: Root Layout ของ Next.js App Router — ครอบทุกหน้าในเว็บนี้
 *          กำหนดโครงสร้าง <html><body> ชั้นนอกสุด, เมทาดาต้า (title/description),
 *          ฟอนต์หลักของทั้งเว็บ (Kanit) และลำดับการครอบ Provider ต่าง ๆ
 *          (Theme -> Language -> Navbar/Footer)
 *
 * ฟอนต์ (Kanit):
 *   โหลดผ่านลิงก์ Google Fonts ตรง ๆ ใน <head> (ไม่ใช้ next/font/google เพราะ
 *   next/font ต้องโหลดฟอนต์จากอินเทอร์เน็ตตอน build ซึ่งบางสภาพแวดล้อม
 *   build อาจเข้าอินเทอร์เน็ตไม่ได้ วิธีนี้ให้เบราว์เซอร์ผู้เข้าชมเว็บโหลดฟอนต์เอง
 *   ตอนเปิดเว็บแทน ซึ่งใช้ได้ปกติทุกที่ที่มีอินเทอร์เน็ต)
 *   รองรับทั้งภาษาไทยและอังกฤษในฟอนต์เดียวกัน (Kanit มีทั้งสองชุดตัวอักษร)
 *   ตัวแปร --font-sans ที่ tailwind.config.ts อ้างอิงอยู่ ถูกประกาศไว้ที่
 *   app/globals.css (:root) ให้ชี้มาที่ "Kanit" เป็นตัวแรก ทำให้ทั้งเว็บใช้ฟอนต์นี้
 *   โดยไม่ต้องแก้ไฟล์ component อื่นเลย
 *
 * ลำดับการครอบสำคัญ:
 *   ThemeProvider (components/theme-provider.tsx)
 *     -> LanguageProvider (lib/language-context.tsx)
 *       -> Navbar (components/navbar.tsx)
 *       -> {children}  <-- ตรงนี้คือเนื้อหาของแต่ละหน้า เช่น app/page.tsx,
 *                          app/contact/page.tsx, app/projects/[slug]/page.tsx
 *       -> Footer (components/footer.tsx)
 *
 * suppressHydrationWarning ที่ <html>: จำเป็นเพราะ next-themes จะเปลี่ยน
 * class ของ <html> ตอน mount ฝั่ง client (dark/light) ซึ่งต่างจากที่ server
 * render ไว้ตอนแรก ถ้าไม่ suppress ไว้ React จะเตือน hydration mismatch เฉย ๆ
 * (ไม่ใช่บั๊ก เป็นพฤติกรรมปกติที่ next-themes ต้องใช้)
 * -----------------------------------------------------------------------
 */
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// ข้อมูล SEO/แท็บเบราว์เซอร์ (แก้ชื่อ-คำอธิบายได้ตรงนี้)
export const metadata: Metadata = {
  title: "Suracheat Inta | Portfolio",
  description: "Portfolio of Suracheat Inta, Software Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        {/* preconnect ช่วยให้เบราว์เซอร์เชื่อมต่อ Google Fonts เร็วขึ้นก่อนโหลดจริง */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* โหลดฟอนต์ Kanit น้ำหนัก 300-700 ครอบคลุมทุกคลาส font-normal/medium/semibold/bold
            ที่ใช้อยู่ในโปรเจกต์ */}
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
