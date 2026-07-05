/**
 * [ไฟล์] components/skills.tsx
 * -----------------------------------------------------------------------
 * หน้าที่: ส่วน "ทักษะทางเทคนิค" (id="skills") ในหน้าแรก
 *          แสดงการ์ดทักษะเป็นกริด วนลูปจากหมวดหมู่ใน lib/content.ts
 *
 * ข้อมูลที่ใช้ (มาจาก lib/content.ts): skillsSection (ชนิด SkillCategory[])
 * ถูกเรียกใช้ที่: app/page.tsx (section ที่ 3 ต่อจาก About)
 * เชื่อมกับ: components/navbar.tsx (ลิงก์ #skills ในเมนูจะเลื่อนมาที่ section นี้)
 *
 * วิธีเพิ่ม/แก้หมวดหมู่ทักษะ: ไปแก้ที่ skillsSection.categories ใน lib/content.ts
 * ไม่ต้องแก้ไฟล์นี้เลย เพราะ UI จะ map ตามจำนวนรายการที่มีอัตโนมัติ
 * -----------------------------------------------------------------------
 */
"use client";

import { useLanguage } from "@/lib/language-context";
import { skillsSection } from "@/lib/content";

export default function Skills() {
  const { lang } = useLanguage();

  return (
    <section id="skills" className="section">
      <p className="eyebrow text-center">{skillsSection.eyebrow[lang]}</p>
      <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">
        {skillsSection.heading[lang]}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-slate-500 dark:text-slate-400">
        {skillsSection.subheading[lang]}
      </p>

      {/* กริดการ์ดทักษะ: 1 คอลัมน์มือถือ, 2 คอลัมน์ md, 3 คอลัมน์ lg ขึ้นไป */}
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillsSection.categories.map((cat) => (
          // key ใช้ title ภาษาอังกฤษเป็นตัวระบุที่ไม่ซ้ำ (unique) ในการวนลูป
          <div key={cat.title.en} className="card">
            <p className="eyebrow">{cat.eyebrow[lang]}</p>
            <h3 className="mt-2 text-lg font-bold">{cat.title[lang]}</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {cat.description[lang]}
            </p>
            {/* tag ของแต่ละหมวด (เช่น React, Node.js) วนลูปจาก cat.tags (string[]) */}
            <div className="mt-4 flex flex-wrap gap-2">
              {cat.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
