# คู่มือโครงสร้างโค้ด (Code Guide)

ทุกไฟล์โค้ดมีคอมเมนต์อธิบายไว้ในตัวแล้ว (เปิดไฟล์ดูได้เลย) เอกสารนี้สรุปภาพรวม
ว่าไฟล์ไหนเชื่อมกับไฟล์ไหน ไว้เป็นแผนที่ก่อนเข้าไปแก้โค้ดจริง

## จุดที่ต้องแก้บ่อยที่สุด

`lib/content.ts` — ข้อมูลทั้งหมดของเว็บ (ชื่อ, การศึกษา, สกิล, โปรเจกต์, ลิงก์ติดต่อ)
เกือบทุกครั้งที่อยากแก้ "เนื้อหา" (ไม่ใช่ "หน้าตา") จะมาแก้ที่ไฟล์นี้ไฟล์เดียว

## ลำดับการโหลด (จากบนลงล่าง)

```
app/layout.tsx                     (ครอบทุกหน้า)
  -> components/theme-provider.tsx      (ระบบ dark/light)
    -> lib/language-context.tsx         (ระบบภาษา TH/EN)
      -> components/navbar.tsx          (เมนูบนสุด)
      -> {children}                     (เนื้อหาแต่ละหน้า ดูด้านล่าง)
      -> components/footer.tsx          (ท้ายเว็บ)
```

## หน้าเว็บ (routes) และไฟล์ที่เกี่ยวข้อง

| Route | ไฟล์หลัก | ดึงข้อมูลจาก | คอมโพเนนต์ย่อยที่ใช้ |
|---|---|---|---|
| `/` | `app/page.tsx` | — | Hero, About, Skills, Projects |
| `/projects/[slug]` | `app/projects/[slug]/page.tsx` | `lib/content.ts` -> `projectsSection.items` | `components/project-detail.tsx`, `components/status-pill.tsx` |
| `/contact` | `app/contact/page.tsx` | `lib/content.ts` -> `contact`, `profile` | — |

## Component ในหน้าแรก (`app/page.tsx`) เรียงตามลำดับที่แสดงผล

1. `components/hero.tsx` — id="home" — ใช้ `profile`, `hero` จาก content.ts
2. `components/about.tsx` — id="about" — ใช้ `profile`, `about` จาก content.ts
3. `components/skills.tsx` — id="skills" — ใช้ `skillsSection` จาก content.ts
4. `components/projects.tsx` — id="projects" — ใช้ `projectsSection` จาก content.ts,
   เรียก `components/status-pill.tsx` เพื่อโชว์ป้ายสถานะ, ลิงก์แต่ละการ์ดไปที่
   `/projects/{slug}`

## ระบบที่ใช้ร่วมกันทั้งเว็บ (Global)

- **ภาษา**: `lib/language-context.tsx` — ทุกคอมโพเนนต์ที่โชว์ข้อความสองภาษา
  จะเรียก `useLanguage()` เพื่อดึง `lang` ("th" หรือ "en") มาใช้กับข้อมูลชนิด
  `Bi` (`{ th, en }`) ใน `lib/content.ts`
- **ธีม**: `components/theme-provider.tsx` (ครอบแอป) + `components/theme-toggle.tsx`
  (ปุ่มกด) ใช้ไลบรารี `next-themes`
- **สไตล์ที่ใช้ซ้ำ**: `app/globals.css` มีคลาสสำเร็จรูป เช่น `.section`, `.card`,
  `.tag`, `.btn-primary`, `.btn-ghost`, `.status-pill` — ใช้ซ้ำในแทบทุกคอมโพเนนต์

## ไฟล์ตั้งค่า (config) — เป็น JSON เขียนคอมเมนต์ในไฟล์ไม่ได้

- `package.json` — รายชื่อ dependency (next, react, tailwindcss ฯลฯ) และคำสั่ง
  `npm run dev` / `npm run build`
- `tsconfig.json` — ตั้งค่า TypeScript, กำหนด `@/*` ให้ชี้กลับไปที่ root ของโปรเจกต์
  (เป็นเหตุผลที่ไฟล์ import กันด้วย `@/components/...`, `@/lib/...` ได้)
- `tailwind.config.ts` — มีคอมเมนต์ในไฟล์แล้ว (ไฟล์ .ts เขียนคอมเมนต์ได้)
- `postcss.config.js`, `next.config.mjs` — ตั้งค่าพื้นฐาน ไม่ต้องแก้

## ลำดับตรวจสอบเวลาจะแก้บั๊ก

1. ข้อความ/เนื้อหาผิด -> ไปที่ `lib/content.ts`
2. หน้าตา/สี/ระยะห่างผิด -> ไปที่ `app/globals.css` หรือคลาส Tailwind ในไฟล์ component นั้น
3. ลิงก์/ปุ่มกดแล้วไม่ไปไหน -> เช็ค `href` ในไฟล์ component และ route ใน `app/`
4. ภาษาไม่สลับ/ธีมไม่สลับ -> เช็ค `lib/language-context.tsx` และ
   `components/theme-provider.tsx` ว่ายังครอบอยู่ใน `app/layout.tsx` เหมือนเดิม
