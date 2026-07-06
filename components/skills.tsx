/**
 * [ไฟล์] components/skills.tsx
 * -----------------------------------------------------------------------
 * หน้าที่: ส่วน "ทักษะทางเทคนิค" (id="skills") ในหน้าแรก
 *          แต่ละการ์ดมีภาพประกอบเฉพาะตาม kind ของหมวดนั้น (ดูรายละเอียด kind
 *          ที่ lib/content.ts บริเวณ type SkillCategory):
 *            hierarchy   -> Frontend  : รายการลำดับขั้นแบบย่อหน้า
 *            flow        -> Backend   : ลูกศรขั้นตอนต่อกัน
 *            database    -> Database  : รายชื่อฐานข้อมูล + แถบสีประกอบ
 *            grid        -> Tools     : กริดปุ่มเครื่องมือ
 *            proficiency -> Languages : แถวระดับภาษา/ซอฟต์สกิล
 *            plain       -> fallback  : การ์ดพื้นฐาน (description + tags)
 *
 * ข้อมูลที่ใช้ (มาจาก lib/content.ts): skillsSection
 * ถูกเรียกใช้ที่: app/page.tsx (section ที่ 3 ต่อจาก About)
 * เชื่อมกับ: components/navbar.tsx (ลิงก์ #skills ในเมนูจะเลื่อนมาที่ section นี้)
 * ไอคอน: ใช้ไลบรารี lucide-react (ตัวเดียวกับที่ components/about.tsx ใช้)
 *
 * วิธีเพิ่มหมวดใหม่: เพิ่ม object ใน skillsSection.categories ที่ lib/content.ts
 * เลือก kind ที่ตรงกับสิ่งที่อยากโชว์ (หรือใช้ kind: "plain" ถ้ายังไม่มีภาพประกอบเฉพาะ)
 * -----------------------------------------------------------------------
 */
"use client";

import { Monitor, Cpu, Database, Palette, Users, Code2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { skillsSection, SkillCategory } from "@/lib/content";

// ไอคอนประจำแต่ละ kind ของการ์ด
const KIND_ICON: Record<SkillCategory["kind"], typeof Monitor> = {
  hierarchy: Monitor,
  flow: Cpu,
  database: Database,
  grid: Palette,
  proficiency: Users,
  plain: Code2,
};

export default function Skills() {
  const { lang } = useLanguage();

  // แยกคำสุดท้ายของหัวข้อออกมาทำสีเน้น เหมือนที่ components/about.tsx ทำ
  // เพื่อให้สไตล์หัวข้อทั้งเว็บไปในทิศทางเดียวกัน
  const headingWords = skillsSection.heading[lang].split(" ");
  const headingLast = headingWords.pop();
  const headingRest = headingWords.join(" ");

  return (
    <section id="skills" className="section">
      <p className="eyebrow text-center">{skillsSection.eyebrow[lang]}</p>
      <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">
        {headingRest} <span className="text-accent">{headingLast}</span>
      </h2>
      {/* เส้นเน้นสั้น ๆ ใต้หัวข้อ (ตามสไตล์ที่อ้างอิง) */}
      <div className="mx-auto mt-3 h-0.5 w-12 bg-accent" aria-hidden="true" />
      <p className="mx-auto mt-4 max-w-xl text-center text-slate-500 dark:text-slate-400">
        {skillsSection.subheading[lang]}
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillsSection.categories.map((cat) => {
          const Icon = KIND_ICON[cat.kind];
          return (
            <div key={cat.title.en} className="card">
              <p className="eyebrow">{cat.eyebrow[lang]}</p>
              {/* เส้นแบ่งใต้ eyebrow ใช้สีเส้นเดียวกับที่ใช้ทั่วเว็บอยู่แล้ว
                  (border-slate-200 / dark:border-white/10 — สีเดียวกับขอบการ์ด .card
                  และขอบป้าย .tag ใน app/globals.css) เพื่อให้เข้าชุดกับดีไซน์ของระบบเรา
                  ไม่ใช้สีใหม่แยกต่างหาก ตามที่ผู้ใช้ขอ */}
              <div className="mt-3 border-t border-slate-200 dark:border-white/10" />
              <div className="mt-4 flex items-center gap-2">
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="text-lg font-bold">{cat.title[lang]}</h3>
              </div>

              {/* ภาพประกอบเฉพาะ kind — ดูคำอธิบายแต่ละแบบด้านล่าง */}
              <div className="mt-4">
                {cat.kind === "hierarchy" && (
                  // รายการลำดับขั้นแบบย่อหน้า ไม่มีเส้นไกด์แล้ว (ตัดออกตามที่ผู้ใช้ขอ)
                  // เหลือแค่จุด (bullet) + ข้อความ ยิ่ง indent มาก ยิ่งเยื้องขวามากขึ้น
                  <ul className="space-y-2 text-sm">
                    {cat.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2"
                        style={{ paddingLeft: `${item.indent * 18}px` }}
                      >
                        <span
                          className={
                            item.indent === 0
                              ? "mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent"
                              : "mt-1.5 h-2 w-2 shrink-0 rounded-full border-2 border-accent/70"
                          }
                          aria-hidden="true"
                        />
                        <span
                          className={
                            item.indent === 0
                              ? "font-semibold text-slate-800 dark:text-slate-100"
                              : "text-slate-600 dark:text-slate-300"
                          }
                        >
                          {item.label[lang]}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {cat.kind === "flow" && (
                  // ขั้นตอนการทำงานต่อกันด้วยลูกศร เช่น Request -> Response -> Database
                  // บังคับให้อยู่แถวเดียว (flex-nowrap) ถ้าพื้นที่ไม่พอจริง ๆ ให้เลื่อนแนวนอนได้
                  // แทนที่จะตกบรรทัด (แก้ตามที่ผู้ใช้แจ้งว่าอยากให้อยู่แถวเดียวกัน)
                  <div>
                    <div className="flex flex-nowrap items-center gap-1.5 overflow-x-auto pb-1 text-xs font-medium text-slate-700 dark:text-slate-200 sm:text-sm">
                      {cat.steps.map((step, i) => (
                        <span key={i} className="flex shrink-0 items-center gap-1.5">
                          <span className="whitespace-nowrap rounded-lg border border-slate-200 px-2 py-1 dark:border-white/10">
                            {step[lang]}
                          </span>
                          {i < cat.steps.length - 1 && (
                            <ArrowRight className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                          )}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{cat.caption[lang]}</p>
                  </div>
                )}

                {cat.kind === "database" && (
                  // รายชื่อฐานข้อมูล + แถบสีประกอบ (level เป็นแค่ความยาวแถบตกแต่ง ไม่ใช่ตัวชี้วัดจริง)
                  <div className="space-y-3">
                    {cat.items.map((item) => (
                      <div key={item.name}>
                        <div className="flex items-baseline justify-between text-sm">
                          <span className="font-semibold">{item.name}</span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{item.desc[lang]}</span>
                        </div>
                        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                          <div
                            className="h-full rounded-full bg-accent"
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {cat.kind === "grid" && (
                  // กริดปุ่มเครื่องมือ 2 คอลัมน์
                  <div className="grid grid-cols-2 gap-2">
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-white/10"
                      >
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc[lang]}</p>
                      </div>
                    ))}
                  </div>
                )}

                {cat.kind === "proficiency" && (
                  // แถวระดับภาษา/ซอฟต์สกิล: ป้ายซ้าย + ระดับสีเน้นด้านขวา
                  <div className="space-y-2">
                    {cat.items.map((item) => (
                      <div key={item.label.en} className="flex items-center justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-300">{item.label[lang]}</span>
                        <span className="font-medium text-accent">{item.desc[lang]}</span>
                      </div>
                    ))}
                  </div>
                )}

                {cat.kind === "plain" && cat.description && (
                  <p className="text-sm text-slate-500 dark:text-slate-400">{cat.description[lang]}</p>
                )}
              </div>

              {/* ป้าย tag เทคโนโลยีของหมวดนี้ อยู่ท้ายการ์ดเสมอไม่ว่าจะเป็น kind ไหน */}
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
