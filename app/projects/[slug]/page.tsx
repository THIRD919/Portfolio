/**
 * [ไฟล์] app/projects/[slug]/page.tsx
 * -----------------------------------------------------------------------
 * หน้าที่: หน้ารายละเอียดของแต่ละโปรเจกต์ (route "/projects/ชื่อ-slug")
 *          เป็น dynamic route — 1 ไฟล์นี้ทำหน้าที่แทนทุกโปรเจกต์ทุกอัน
 *          โดยดึง slug จาก URL มาค้นหา project ที่ตรงกันใน lib/content.ts
 *
 * ทำไมไฟล์นี้ "ไม่มี" "use client" ที่บรรทัดบนสุด:
 *   เพราะต้อง export ฟังก์ชัน generateStaticParams() ซึ่งทำงานตอน build
 *   (ฝั่ง server เท่านั้น) — ฟังก์ชันนี้ export ไม่ได้ถ้าไฟล์เป็น "use client"
 *   ส่วนที่ต้องใช้ useLanguage() (client-only) ถูกแยกไปไว้ที่
 *   components/project-detail.tsx แทน แล้วไฟล์นี้แค่ import มาใช้
 *
 * generateStaticParams(): บอก Next.js ล่วงหน้าตอน build ว่ามี slug อะไรบ้าง
 * (วนลูปจาก projectsSection.items ใน lib/content.ts) เพื่อ prerender เป็น
 * static HTML ทุกหน้าโปรเจกต์ไว้ล่วงหน้า (เร็วกว่า render สดทุกครั้ง)
 *
 * notFound(): ถ้า slug ใน URL ไม่ตรงกับโปรเจกต์ไหนเลย จะเด้งไปหน้า 404
 * -----------------------------------------------------------------------
 */
import { notFound } from "next/navigation";
import { projectsSection } from "@/lib/content";
import ProjectDetail from "@/components/project-detail";

// รายชื่อ slug ทั้งหมดที่ต้อง prerender ล่วงหน้าตอน build
// อัปเดตอัตโนมัติเมื่อเพิ่ม/ลบโปรเจกต์ใน lib/content.ts (projectsSection.items)
export function generateStaticParams() {
  return projectsSection.items.map((project) => ({ slug: project.slug }));
}

// params.slug มาจากชื่อโฟลเดอร์ [slug] ในพาธไฟล์นี้ (Next.js กำหนดให้อัตโนมัติ)
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsSection.items.find((p) => p.slug === params.slug);

  // ถ้าไม่เจอโปรเจกต์ที่ตรงกับ slug นี้เลย ให้ขึ้นหน้า 404 ของ Next.js
  if (!project) {
    notFound();
  }

  // ส่งต่อ project object ให้ Client Component ไปแสดงผลจริง
  return <ProjectDetail project={project} />;
}
