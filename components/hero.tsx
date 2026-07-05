/**
 * [ไฟล์] components/hero.tsx
 * -----------------------------------------------------------------------
 * หน้าที่: ส่วนบนสุดของหน้าแรก (id="home") — ชื่อ, ตำแหน่งงาน, คำโปรย,
 *          ปุ่ม Download CV, ปุ่ม Get in Touch, และวงกลมรูปโปรไฟล์
 *
 * ข้อมูลที่ใช้ (มาจาก lib/content.ts): profile, hero
 * ถูกเรียกใช้ที่: app/page.tsx (เป็น section แรกสุดของหน้าแรก)
 * เชื่อมกับ: components/navbar.tsx (ลิงก์ #home ในเมนูจะเลื่อนมาที่ section นี้)
 * -----------------------------------------------------------------------
 */
"use client";

import { useLanguage } from "@/lib/language-context";
import { profile, hero } from "@/lib/content";

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section id="home" className="section grid items-center gap-12 md:grid-cols-2">
      {/* คอลัมน์ซ้าย: ข้อความทั้งหมด */}
      <div className="animate-fadeUp">
        <p className="eyebrow">{hero.greeting[lang]}</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
          {profile.name[lang]}
        </h1>
        <h2 className="mt-2 text-xl font-semibold text-accent md:text-2xl">
          {profile.role[lang]}
        </h2>
        <p className="mt-6 max-w-lg text-slate-600 dark:text-slate-300">
          {hero.tagline[lang]}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          {/* ปุ่มดาวน์โหลด CV: ลิงก์ไปที่ public/cv.pdf ผ่าน profile.cvFile */}
          <a href={profile.cvFile} download className="btn-primary">
            {lang === "th" ? "ดาวน์โหลด CV" : "Download CV"}
          </a>
          {/* ปุ่มติดต่อ: ลิงก์ไปหน้า /contact (ดูที่ app/contact/page.tsx) */}
          <a href="/contact" className="btn-ghost">
            {lang === "th" ? "ติดต่อผม" : "Get in Touch"}
          </a>
        </div>
      </div>

      {/* คอลัมน์ขวา: กรอบรูปโปรไฟล์ทรงกลม-เหลี่ยมมน */}
      <div className="relative mx-auto flex aspect-square w-64 items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl md:w-80 dark:border-white/10 dark:bg-white/5">
        {/* ตัวอักษรย่อ (initials) โชว์เป็น fallback อยู่ข้างหลังรูปเสมอ
            ตัดคำนำหน้าชื่อ (Mr./Mrs./Ms./Miss) ออกก่อน แล้วเอาตัวอักษรแรกของแต่ละคำมาต่อกัน
            เช่น "Suracheat Inta" -> "SI" */}
        <span className="text-5xl font-bold text-slate-300 dark:text-white/10">
          {profile.name.en
            .replace(/^(Mr\.|Mrs\.|Ms\.|Miss)\s*/i, "")
            .split(" ")
            .map((w) => w[0])
            .join("")}
        </span>
        {/* รูปโปรไฟล์จริง: วางไฟล์ที่ public/images/profile.jpg (path มาจาก profile.profileImage)
            ถ้ายังไม่มีไฟล์ รูปจะ error แล้ว onError จะซ่อนรูปทิ้ง เหลือแค่ตัวอักษรย่อด้านหลัง
            หมายเหตุ: ใช้ <img> ธรรมดาแทน next/image เพราะรูปนี้เป็น optional/placeholder
            ไม่จำเป็นต้องผ่านตัว optimize รูปของ Next.js */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={profile.profileImage}
          alt={profile.name.en}
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
    </section>
  );
}
