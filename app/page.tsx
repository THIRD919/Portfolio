/**
 * [ไฟล์] app/page.tsx
 * -----------------------------------------------------------------------
 * หน้าที่: หน้าแรกของเว็บ (route "/") — แค่นำ 4 section มาเรียงต่อกัน
 *          ตัว section แต่ละอันมี id ของตัวเอง ไว้ให้ navbar ลิงก์แบบ anchor
 *          (#home #about #skills #projects) เลื่อนมาหาได้
 *
 * ลำดับการแสดงผล:
 *   1. Hero      (components/hero.tsx)      id="home"
 *   2. About     (components/about.tsx)     id="about"
 *   3. Skills    (components/skills.tsx)    id="skills"
 *   4. Projects  (components/projects.tsx)  id="projects"
 *
 * อยากสลับลำดับ section หรือซ่อน section ไหน แก้ได้ตรงนี้ที่เดียว
 * -----------------------------------------------------------------------
 */
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
