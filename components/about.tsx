/**
 * [ไฟล์] components/about.tsx
 * -----------------------------------------------------------------------
 * หน้าที่: ส่วน "เกี่ยวกับผม" (id="about") ในหน้าแรก
 *          โครงสร้าง 2 คอลัมน์ (จัดตามแบบที่อ้างอิง):
 *            แถวบน   : [หัวข้อ "About Me"]      | [กล่องคำคม + Philosophy]
 *            แถวล่าง  : [การ์ดโปรไฟล์]            | [กริดสถิติ 2x2 + การ์ดการศึกษา]
 *
 * ข้อมูลที่ใช้ (มาจาก lib/content.ts): profile, about
 * ถูกเรียกใช้ที่: app/page.tsx (section ที่ 2 ต่อจาก Hero)
 * เชื่อมกับ: components/navbar.tsx (ลิงก์ #about ในเมนูจะเลื่อนมาที่ section นี้)
 * ไอคอน: ใช้ไลบรารี lucide-react (ติดตั้งใน package.json แล้ว)
 * -----------------------------------------------------------------------
 */
"use client";

import { Code2, MapPin, Phone, Rocket, Layers, TrendingUp, Globe, GraduationCap } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { profile, about } from "@/lib/content";

// ไอคอนของสถิติ 4 ช่อง เรียงลำดับให้ตรงกับ about.stats ใน lib/content.ts
// (โปรเจกต์ที่สร้าง -> เทคโนโลยีหลัก -> ฝึกงาน -> ภาษาโปรแกรมมิ่ง)
const STAT_ICONS = [Rocket, Layers, TrendingUp, Globe];

export default function About() {
  const { lang } = useLanguage();

  // แยกคำสุดท้ายของหัวข้อ (about.heading) ออกมาทำสีเน้น (accent) ตามสไตล์ที่อ้างอิง
  // เช่น "เกี่ยวกับ ผม" -> "เกี่ยวกับ" (สีปกติ) + "ผม" (สีเน้น)
  const headingWords = about.heading[lang].split(" ");
  const headingLast = headingWords.pop();
  const headingRest = headingWords.join(" ");

  return (
    <section id="about" className="section">
      {/* แถวบน: หัวข้อฝั่งซ้าย + กล่องคำคมฝั่งขวา */}
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-slate-400 dark:bg-slate-600" aria-hidden="true" />
            <p className="eyebrow">{about.eyebrow[lang]}</p>
          </div>
          <h2 className="mt-4 text-5xl font-bold leading-[1.05] md:text-6xl">
            {headingRest} <span className="text-accent">{headingLast}</span>
          </h2>
        </div>

        {/* กล่องคำคม: เส้นเน้นสีอยู่ด้านซ้าย (border-l) ตามแบบที่อ้างอิง */}
        <div className="border-l-2 border-accent pl-6">
          <p className="text-xl text-slate-600 dark:text-slate-300">{about.quote[lang]}</p>
          <div className="mt-4 flex items-center gap-3">
            <span className="h-px w-8 bg-slate-400 dark:bg-slate-600" aria-hidden="true" />
            <p className="eyebrow">{lang === "th" ? "ปรัชญา" : "Philosophy"}</p>
          </div>
        </div>
      </div>

      {/* แถวล่าง: การ์ดโปรไฟล์ฝั่งซ้าย + (กริดสถิติ + การ์ดการศึกษา) ฝั่งขวา */}
      <div className="mt-14 grid gap-6 md:grid-cols-2 md:items-start">
        {/* การ์ดโปรไฟล์ */}
        <div className="card">
          {/* แถวหัวการ์ด: ไอคอนซ้าย + ชื่อ/ตำแหน่งขวา อยู่แถวเดียวกัน (ตามแบบที่อ้างอิง) */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10">
              <Code2 className="h-5 w-5 text-accent" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{profile.name[lang]}</h3>
              <p className="font-medium text-accent">{profile.role[lang]}</p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {profile.location[lang]}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {profile.phone}
            </span>
          </div>
          <hr className="my-4 border-slate-200 dark:border-white/10" />
          <p className="text-slate-600 dark:text-slate-300">{about.bio[lang]}</p>
        </div>

        {/* คอลัมน์ขวา: กริดสถิติ 2x2 ด้านบน + การ์ดการศึกษาด้านล่าง */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((stat, i) => {
              const Icon = STAT_ICONS[i] ?? Rocket; // เผื่อกรณีเพิ่ม/ลด stat แล้วไอคอนไม่ครบ
              return (
                <div key={stat.label.en} className="card text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10">
                    <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                  </div>
                  <p className="mt-3 text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {stat.label[lang]}
                  </p>
                </div>
              );
            })}
          </div>

          {/* การ์ดการศึกษา */}
          <div className="card flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10">
              <GraduationCap className="h-5 w-5 text-accent" aria-hidden="true" />
            </div>
            <div>
              <p className="eyebrow">{lang === "th" ? "การศึกษา" : "Education"}</p>
              <h3 className="mt-1 text-lg font-bold">{about.education.degree[lang]}</h3>
              <p className="mt-1 text-slate-600 dark:text-slate-300">
                {about.education.school[lang]}
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {about.education.detail[lang]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
