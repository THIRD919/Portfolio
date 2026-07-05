/**
 * [ไฟล์] components/project-detail.tsx
 * -----------------------------------------------------------------------
 * หน้าที่: เนื้อหาหน้ารายละเอียดโปรเจกต์ 1 อัน (Client Component)
 *          รับ project object มาจากไฟล์ page.tsx (Server Component) แล้วโชว์
 *          ชื่อ, สถานะ, ภาพตัวอย่าง, tag เทคโนโลยี, คำอธิบายเต็ม, ลิงก์ demo
 *
 * ทำไมต้องแยกไฟล์นี้ออกจาก page.tsx:
 *   หน้า app/projects/[slug]/page.tsx ต้องเป็น Server Component เพื่อให้ใช้
 *   generateStaticParams() ได้ (ฟีเจอร์นี้ใช้ไม่ได้ในไฟล์ที่มี "use client")
 *   จึงแยกส่วนที่ต้องใช้ useLanguage() (client-only) มาไว้ที่นี่แทน
 *
 * ถูกเรียกใช้ที่: app/projects/[slug]/page.tsx
 * ใช้ร่วมกับ: components/status-pill.tsx, lib/content.ts (ชนิด Project)
 * -----------------------------------------------------------------------
 */
"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { Project, projectsSection } from "@/lib/content";
import StatusPill from "./status-pill";

// รับ project เป็น prop เดียว (ชนิด Project มาจาก lib/content.ts)
export default function ProjectDetail({ project }: { project: Project }) {
  const { lang } = useLanguage();

  return (
    <section className="section max-w-3xl">
      {/* ลิงก์ย้อนกลับไปหน้าแรก ส่วน #projects (components/projects.tsx) */}
      <Link href="/#projects" className="text-sm font-semibold text-accent hover:underline">
        ← {projectsSection.backToProjects[lang]}
      </Link>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-bold md:text-4xl">{project.title}</h1>
        <StatusPill status={project.status} lang={lang} />
      </div>

      <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
        {project.summary[lang]}
      </p>

      {/* กรอบภาพตัวอย่าง/mockup: ถ้ายังไม่มีไฟล์ภาพ (project.image ว่าง) จะโชว์ข้อความแทน
          วิธีใส่ภาพจริง: เพิ่ม path ที่ field image ของโปรเจกต์นั้นใน lib/content.ts
          แล้ววางไฟล์จริงไว้ที่ public/ ตาม path ที่ระบุ */}
      <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-slate-400 dark:text-slate-500">
            {lang === "th" ? "ยังไม่มีภาพตัวอย่าง" : "No preview image yet"}
          </div>
        )}
      </div>

      {/* tag เทคโนโลยีที่ใช้ในโปรเจกต์นี้ (เหมือนที่การ์ดพรีวิวโชว์) */}
      <div className="mt-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {/* คำอธิบายเต็มของโปรเจกต์ whitespace-pre-line ทำให้ขึ้นบรรทัดใหม่ตามที่พิมพ์ไว้ในข้อมูลได้ */}
      <p className="mt-6 whitespace-pre-line text-slate-600 dark:text-slate-300">
        {project.description[lang]}
      </p>

      {/* ปุ่ม/ข้อความด้านล่างสุด: ถ้ามีลิงก์ demo จริงแล้ว (project.demoUrl ไม่ว่าง) โชว์ปุ่มลิงก์
          ถ้ายังไม่มี (ยังไม่ได้ deploy) โชว้อความแจ้งแทน — ตรงนี้คือจุดที่รองรับ
          "โปรเจกต์ที่เตรียมจะ host ในอนาคต" ตามที่วางแผนไว้ */}
      <div className="mt-10">
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {lang === "th" ? "ดู Demo →" : "View Demo →"}
          </a>
        ) : (
          <p className="text-sm text-slate-400 dark:text-slate-500">
            {lang === "th"
              ? "ยังไม่ได้ขึ้น Host ลิงก์ demo จะเพิ่มให้ภายหลัง"
              : "Not hosted yet. The demo link will be added later."}
          </p>
        )}
      </div>
    </section>
  );
}
