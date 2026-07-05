/**
 * [ไฟล์] components/projects.tsx
 * -----------------------------------------------------------------------
 * หน้าที่: ส่วน "โปรเจกต์ของผม" (id="projects") ในหน้าแรก
 *          โชว์การ์ดพรีวิวของทุกโปรเจกต์ กดที่การ์ดแล้วไปหน้ารายละเอียด
 *          /projects/{slug} (ไม่ใช่ลิงก์ออกไป GitHub ตามที่ตั้งใจไว้)
 *
 * ข้อมูลที่ใช้ (มาจาก lib/content.ts): projectsSection (โดยเฉพาะ projectsSection.items)
 * ถูกเรียกใช้ที่: app/page.tsx (section สุดท้ายของหน้าแรก)
 * เชื่อมกับ:
 *   - components/status-pill.tsx        (ป้ายสถานะบนการ์ด)
 *   - app/projects/[slug]/page.tsx      (หน้าที่จะเปิดเมื่อกดการ์ด)
 *   - components/navbar.tsx             (ลิงก์ #projects ในเมนู)
 *
 * วิธีเพิ่มโปรเจกต์ใหม่: เพิ่ม object ใหม่ใน projectsSection.items ที่ lib/content.ts
 * หน้ารายละเอียดจะถูกสร้างให้อัตโนมัติ ไม่ต้องสร้างไฟล์เพิ่ม
 * -----------------------------------------------------------------------
 */
"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { projectsSection } from "@/lib/content";
import StatusPill from "./status-pill";

export default function Projects() {
  const { lang } = useLanguage();

  return (
    <section id="projects" className="section">
      <p className="eyebrow text-center">{projectsSection.eyebrow[lang]}</p>
      <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">
        {projectsSection.heading[lang]}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-slate-500 dark:text-slate-400">
        {projectsSection.subheading[lang]}
      </p>

      {/* กริดการ์ดโปรเจกต์ 1 คอลัมน์บนมือถือ, 2 คอลัมน์บนจอ md ขึ้นไป */}
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projectsSection.items.map((project) => (
          // ทั้งการ์ดคือ Link เดียว กดตรงไหนของการ์ดก็เข้าหน้ารายละเอียดได้หมด
          // href รูปแบบ /projects/{slug} จะไปตรงกับ app/projects/[slug]/page.tsx
          <Link key={project.slug} href={`/projects/${project.slug}`} className="card block">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold">{project.title}</h3>
              {/* ป้ายสถานะ ใช้ component เดียวกับหน้ารายละเอียด (components/status-pill.tsx) */}
              <StatusPill status={project.status} lang={lang} />
            </div>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {project.summary[lang]}
            </p>
            {/* tag เทคโนโลยีที่ใช้ในโปรเจกต์นี้ */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-4 inline-block text-sm font-semibold text-accent">
              {projectsSection.viewDetail[lang]} →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
