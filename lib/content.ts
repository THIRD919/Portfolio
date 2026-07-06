/**
 * [ไฟล์] lib/content.ts
 * =========================================================================
 *  ไฟล์นี้คือ "จุดเดียว" ที่ต้องแก้เมื่อจะใส่/แก้ข้อมูลจริงของคุณ
 *  This is the SINGLE FILE to edit with your real info.
 *
 *  โครงสร้างข้อมูลเป็นแบบ Bi = { th: string; en: string } เสมอ (ยกเว้นบางฟิลด์
 *  ที่ไม่ต้องแปล เช่น ชื่อโปรเจกต์ ลิงก์ เบอร์โทร) แก้ทั้งสองภาษาให้ตรงกันทุกครั้ง
 *  จุดที่ยังเป็น [...] คือส่วนที่ยังไม่มีข้อมูลจริง ใส่เพิ่มได้ภายหลังโดยไม่กระทบโค้ดอื่น
 *
 *  แต่ละ export ในไฟล์นี้ถูกใช้ที่ component ไหนบ้าง (สรุปภาพรวม อ่านละเอียด
 *  ในคอมเมนต์เหนือแต่ละ export ด้านล่าง):
 *    profile        -> hero.tsx, about.tsx, navbar.tsx, footer.tsx, contact/page.tsx
 *    hero           -> hero.tsx
 *    about          -> about.tsx
 *    skillsSection  -> skills.tsx
 *    projectsSection-> projects.tsx, project-detail.tsx, projects/[slug]/page.tsx
 *    contact        -> contact/page.tsx
 *    footer         -> footer.tsx
 * =========================================================================
 */

// ชนิดข้อมูล 2 ภาษา ใช้ซ้ำเกือบทุก field ในไฟล์นี้
export type Bi = { th: string; en: string };

/**
 * profile — ข้อมูลตัวคุณโดยตรง
 * ใช้ที่: components/hero.tsx (ชื่อ/ตำแหน่ง/ปุ่ม CV), components/about.tsx (ชื่อ/ที่อยู่/เบอร์โทร),
 *         components/navbar.tsx และ components/footer.tsx (shortName เป็นโลโก้),
 *         app/contact/page.tsx (เบอร์โทร/อีเมล)
 */
export const profile = {
  name: { th: "สุรเชษฐ์ อินถา", en: "Suracheat Inta" } as Bi,
  // ชื่อสั้นไว้ใช้โชว์ที่โลโก้/แถบเมนู (navbar.tsx, footer.tsx)
  shortName: { th: "สุรเชษฐ์", en: "Suracheat" } as Bi,
  role: { th: "นักพัฒนาซอฟต์แวร์", en: "Software Developer" } as Bi,
  location: { th: "[เชียงใหม่, ประเทศไทย]", en: "[ChiangMai, Thailand]" } as Bi,
  // ยังไม่มีข้อมูล ใส่ทีหลังได้ (โชว์ที่ about.tsx และ contact/page.tsx)
  phone: "[098-018-7517]",
  email: "[Suracheatm02@gmail.com]",
  // วางไฟล์ CV จริงไว้ที่ public/cv.pdf แล้วปุ่ม Download CV (hero.tsx) จะใช้งานได้ทันที
  cvFile: "/cv.pdf",
  // วางรูปโปรไฟล์ไว้ที่ public/images/profile1.jpg แล้ว hero.tsx จะโชว์รูปนี้แทนตัวอักษรย่อ
  profileImage: "/images/profile1.jpg",
};

/**
 * hero — ข้อความในส่วน Hero (บนสุดของหน้าแรก)
 * ใช้ที่: components/hero.tsx เท่านั้น
 */
export const hero = {
  greeting: { th: "สวัสดีครับ ยินดีต้อนรับ", en: "Hello, Welcome" } as Bi,
  tagline: {
    th: "ออกแบบและพัฒนาระบบ Backend ที่สามารถรองรับการขยายตัวได้อย่างมีประสิทธิภาพ พร้อมสร้าง Frontend ที่ตอบสนองการใช้งานได้ดี โดยมุ่งเน้นการเขียนโค้ดที่มีคุณภาพ การออกแบบสถาปัตยกรรมระบบที่มีเสถียรภาพ และการพัฒนาซอฟต์แวร์ที่พร้อมใช้งานจริงในระดับ Production",
    en: "Design and develop scalable backend systems and responsive frontend applications, with a strong focus on writing high-quality code, building robust system architectures, and delivering production-ready software.",
  } as Bi,
};

/**
 * about — ข้อความ/ข้อมูลในส่วน About (เกี่ยวกับผม)
 * ใช้ที่: components/about.tsx เท่านั้น
 * about.stats: แถวตัวเลขสรุป 4 ช่อง (ค่าเริ่มต้นเป็น 0 ทั้งหมด แก้เป็นตัวเลขจริงได้)
 */
export const about = {
  eyebrow: { th: "รู้จักผม", en: "Who I Am" } as Bi,
  heading: { th: "เกี่ยวกับ ผม", en: "About Me" } as Bi,
  quote: { th: "ความฝันอยู่ข้างหน้า เส้นทางนี้เป็นของผม", en: "The dream is ahead, the journey is mine." } as Bi,
  bio: {
    th: "นักศึกษาสาขาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยราชภัฏเชียงใหม่ คาดว่าจะสำเร็จการศึกษาในเดือนกุมภาพันธ์ 2569 (เกรดเฉลี่ย 3.25) มีความสนใจด้าน Backend Development, Full Stack Development และ Machine Learning พร้อมพัฒนาทักษะด้านการออกแบบสถาปัตยกรรมระบบ การเขียนโค้ดที่มีคุณภาพ และการสร้างซอฟต์แวร์ที่มีประสิทธิภาพ พร้อมใช้งานจริง",
    en: "Computer Science undergraduate at Chiang Mai Rajabhat University, expected to graduate in February 2027 (GPA: 3.25). Passionate about scalable backend development, full-stack web applications, machine learning, and software architecture. Dedicated to writing clean, maintainable code and building reliable production-ready systems.",
  } as Bi,
  education: {
    degree: { th: "ปริญญาตรี วิทยาการคอมพิวเตอร์", en: "Bachelor of Computer Science" } as Bi,
    school: { th: "คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยราชภัฏเชียงใหม่", en: "Faculty of Science and Technology, Chiang Mai Rajabhat University" } as Bi,
    detail: { th: "GPAX 3.25 / ก.พ. 2027", en: "GPAX 3.25 / FEB 2027" } as Bi,
  },
  stats: [
    { value: "5+", label: { th: "โปรเจกต์ที่สร้าง", en: "Projects Built" } as Bi },
    { value: "15+", label: { th: "เทคโนโลยีหลัก", en: "Core Technologies" } as Bi },
    { value: "10+", label: { th: "โปรเจกต์กลุ่มในวิชาเรียน", en: "Class Group Projects" } as Bi },
    { value: "4+", label: { th: "ภาษาโปรแกรมมิ่ง", en: "Programming Languages" } as Bi },
  ],
};

// ชนิดข้อมูลของ 1 หมวดหมู่ทักษะ ใน skillsSection.categories ด้านล่าง
// แต่ละหมวดมี "kind" กำหนดรูปแบบภาพประกอบในการ์ด (ดูการ render จริงที่ components/skills.tsx):
//   "hierarchy"   -> รายการลำดับขั้นแบบย่อหน้า (ใช้กับ Frontend)
//   "flow"        -> ลูกศรขั้นตอนต่อกัน (ใช้กับ Backend)
//   "database"    -> รายชื่อฐานข้อมูล + แถบสีประกอบ (ใช้กับ Database)
//   "grid"        -> กริดปุ่มเครื่องมือ 2 คอลัมน์ (ใช้กับ Tools)
//   "proficiency" -> แถวระดับภาษา/ซอฟต์สกิล (ใช้กับ Languages & Soft Skills)
//   "plain"       -> การ์ดพื้นฐาน (แค่ description + tags) เผื่อเพิ่มหมวดใหม่ที่ยังไม่มีภาพประกอบเฉพาะ
export type SkillCategory = {
  eyebrow: Bi;
  title: Bi;
  tags: string[];
  // description ใช้เฉพาะตอน kind เป็น "plain" เท่านั้น (หมวดอื่นใช้ข้อมูลเฉพาะของตัวเองแทน)
  description?: Bi;
} & (
  | { kind: "hierarchy"; items: { label: Bi; indent: number }[] }
  | { kind: "flow"; steps: Bi[]; caption: Bi }
  | { kind: "database"; items: { name: string; desc: Bi; level: number }[] }
  | { kind: "grid"; items: { name: string; desc: Bi }[] }
  | { kind: "proficiency"; items: { label: Bi; desc: Bi }[] }
  | { kind: "plain" }
);

/**
 * skillsSection — หมวดหมู่ทักษะทั้งหมด
 * ใช้ที่: components/skills.tsx (วนลูปจาก categories เป็นการ์ด)
 * วิธีเพิ่ม/ลบหมวดหมู่: เพิ่ม/ลบ object ใน categories array นี้ได้เลย
 * ไม่ต้องแก้ skills.tsx เพราะ UI รองรับจำนวนหมวดหมู่ตามที่มีอัตโนมัติ
 */
export const skillsSection = {
  eyebrow: { th: "ความเชี่ยวชาญ", en: "Technical Expertise" } as Bi,
  heading: { th: "ทักษะ ทางเทคนิค", en: "Technical Expertise" } as Bi,
  subheading: {
    th: "เทคโนโลยีหลักที่ผมใช้สร้างแอปพลิเคชัน",
    en: "Core technologies I use to build applications.",
  } as Bi,
  // [แก้รายการด้านล่างให้ตรงกับสกิลจริงของคุณ]
  // ทุกหมวดมี tags (แสดงเป็นป้ายท้ายการ์ด) และข้อมูลเฉพาะตาม kind (ดูคำอธิบายที่ type ด้านบน)
  categories: [
    {
      eyebrow: { th: "อินเทอร์เฟซผู้ใช้", en: "User Interface" } as Bi,
      title: { th: "การพัฒนาระบบหน้าบ้าน", en: "Frontend Development" } as Bi,
      kind: "hierarchy",
      // โครงสร้างแบบต้นไม้: App เป็นราก (indent 0) แล้วแตกกิ่งลูก (indent 1)
      // และหลานที่ลึกลงไปอีกชั้น (indent 2) ตามภาพตัวอย่างที่ผู้ใช้ส่งมา
      items: [
        { label: { th: "App", en: "App" } as Bi, indent: 0 },
        { label: { th: "เลย์เอาต์ - รองรับทุกหน้าจอ", en: "Layout - Responsive on all screens" } as Bi, indent: 1 },
        { label: { th: "ระบบเส้นทาง - Next.js", en: "Routing - Next.js" } as Bi, indent: 1 },
        { label: { th: "คอมโพเนนต์ - TypeScript", en: "Components - TypeScript" } as Bi, indent: 2 },
      ],
      tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    },
    {
      eyebrow: { th: "บริการฝั่งเซิร์ฟเวอร์", en: "Backend Services" } as Bi,
      title: { th: "การพัฒนา Backend", en: "Backend Development" } as Bi,
      kind: "flow",
      // ขั้นตอนการทำงานของ Backend แสดงเป็นลูกศรต่อกัน (แก้ลำดับ/จำนวนขั้นได้ตามจริง)
      steps: [
        { th: "คำขอ", en: "Request" } as Bi,
        { th: "การประมวลผล", en: "Processing" } as Bi,
        { th: "ฐานข้อมูล", en: "Database" } as Bi,
      ],
      caption: { th: "บริการฝั่งเซิร์ฟเวอร์แบบ RESTful API", en: "RESTful API backend services" } as Bi,
      tags: ["Node.js", "PHP", "Python"],
    },
    {
      eyebrow: { th: "ระบบข้อมูล", en: "Data Systems" } as Bi,
      title: { th: "ฐานข้อมูลและแคช", en: "Database & Cache" } as Bi,
      kind: "database",
      // level (0-100) เป็นแค่แถบสีประกอบสายตา ไม่ใช่ตัวเลขวัดผลจริง ปรับได้ตามชอบ
      items: [
        { name: "PostgreSQL", desc: { th: "ฐานข้อมูลเชิงสัมพันธ์ (Relational)", en: "Relational Database" } as Bi, level: 50 },
        { name: "MongoDB", desc: { th: "ฐานข้อมูลแบบเอกสาร (Documents)", en: "Document Database" } as Bi, level: 75 },
        { name: "MySQL", desc: { th: "ฐานข้อมูลเชิงสัมพันธ์ (Relational)", en: "Relational Database" } as Bi, level: 85 },
      ],
      tags: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    {
      eyebrow: { th: "ชุดเครื่องมือ", en: "Toolkit" } as Bi,
      title: { th: "เครื่องมือพัฒนา", en: "Development Tools" } as Bi,
      kind: "grid",
      items: [
        { name: "Git", desc: { th: "การควบคุมเวอร์ชัน", en: "Version control" } as Bi },
        { name: "Postman", desc: { th: "ทดสอบ API", en: "API testing" } as Bi },
        { name: "VS Code", desc: { th: "เครื่องมือแก้ไขโค้ด", en: "Code editor" } as Bi },
        { name: "Figma", desc: { th: "ออกแบบหน้าเว็บ", en: "Web design" } as Bi },
      ],
      tags: ["Git", "Postman", "VS Code", "Figma"],
    },
    {
      eyebrow: { th: "การสื่อสารและการเรียนรู้", en: "Communication & Learning" } as Bi,
      title: { th: "ภาษาและทักษะอื่นๆ", en: "Languages & Other Skills" } as Bi,
      kind: "proficiency",
      items: [
        { label: { th: "ภาษาไทย", en: "Thai" } as Bi, desc: { th: "เจ้าของภาษา", en: "Native" } as Bi },
        { label: { th: "ภาษาอังกฤษ", en: "English" } as Bi, desc: { th: "พอใช้", en: "Intermediate" } as Bi },
        { label: { th: "การปรับตัว", en: "Adaptability" } as Bi, desc: { th: "มีความยืดหยุ่นและปรับตัวได้สูง", en: "Highly flexible and adaptable" } as Bi },
      ],
      tags: ["Thai", "English", "Adaptability", "Learning"],
    },
  ] as SkillCategory[],
};

// ---------------------------------------------------------------------
// Projects — ใช้ที่ components/projects.tsx (การ์ดพรีวิว),
//            components/project-detail.tsx (เนื้อหาหน้ารายละเอียด),
//            components/status-pill.tsx (แปลสถานะเป็นป้ายสี),
//            app/projects/[slug]/page.tsx (generateStaticParams + ค้นหาด้วย slug)
// ---------------------------------------------------------------------

// สถานะของโปรเจกต์ มี 3 แบบเท่านั้น ใช้ตรงกับ STATUS_STYLE ใน status-pill.tsx
export type ProjectStatus = "done" | "in-progress" | "planned";

// ข้อความของแต่ละสถานะ (คู่ภาษา) ใช้โดย components/status-pill.tsx
export const statusLabel: Record<ProjectStatus, Bi> = {
  done: { th: "เสร็จแล้ว", en: "Completed" },
  "in-progress": { th: "กำลังพัฒนา", en: "In Progress" },
  planned: { th: "เตรียม Deploy", en: "Planned to Deploy" },
};

// ชนิดข้อมูลของโปรเจกต์ 1 อัน — slug ต้องไม่ซ้ำกัน เพราะใช้เป็น URL /projects/{slug}
export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  summary: Bi;      // ข้อความสั้น โชว์ในการ์ดพรีวิว (projects.tsx)
  description: Bi;  // ข้อความเต็ม โชว์ในหน้ารายละเอียด (project-detail.tsx)
  tags: string[];
  // เว้นว่างไว้ก่อนได้ ใส่ทีหลังตอน deploy จริงแล้ว (project-detail.tsx จะโชว์ข้อความ
  // "ยังไม่ได้ขึ้น Host" แทนปุ่ม demo ถ้ายังว่างอยู่)
  demoUrl?: string;
  // ภาพตัวอย่าง (สกรีนช็อต) ของโปรเจกต์ ใส่ได้หลายภาพ แสดงเป็นแกลเลอรีที่หน้ารายละเอียด
  // (components/project-detail.tsx) วิธีใส่จริง: เอาไฟล์ภาพไปวางที่ public/images/...
  // แล้วใส่ path ทุกภาพไว้ใน array นี้ (เว้นว่าง/ไม่ใส่ก็ได้ ถ้ายังไม่มีภาพ)
  images?: string[];
};

/**
 * projectsSection — รายการโปรเจกต์ทั้งหมด + ข้อความประกอบ
 * วิธีเพิ่มโปรเจกต์ใหม่: copy object ใน items array แล้วแก้ข้อมูล (slug ห้ามซ้ำ)
 * หน้ารายละเอียาง /projects/{slug} จะถูกสร้างให้อัตโนมัติ ไม่ต้องแก้ไฟล์อื่นเลย
 */
export const projectsSection = {
  eyebrow: { th: "ผลงาน", en: "Selected Work" } as Bi,
  heading: { th: "โปรเจกต์ ของผม", en: "My Projects" } as Bi,
  subheading: {
    th: "โปรเจกต์ที่ทำแล้ว กำลังพัฒนา และเตรียมนำขึ้น Host ในอนาคต",
    en: "Projects completed, in progress, and planned for future hosting.",
  } as Bi,
  viewDetail: { th: "ดูรายละเอียด", en: "View Details" } as Bi,
  backToProjects: { th: "กลับไปหน้าโปรเจกต์", en: "Back to Projects" } as Bi,
  // [เพิ่ม/แก้โปรเจกต์จริงของคุณที่นี่ — แต่ละอันจะมีหน้าของตัวเองที่ /projects/{slug}]
  items: [
    {
      // โปรเจกต์จริงตัวแรก: ระบบจองห้องเรียนของโรงเรียนสอนภาษา iGenius เชียงใหม่
      // deploy จริงแล้วที่ demoUrl ด้านล่าง (ยังพัฒนาต่อเนื่องอยู่ จึง status เป็น in-progress)
      slug: "igenius-classroom-booking",
      title: "iGenius Classroom Booking",
      status: "in-progress",
      summary: {
        th: "ระบบจองห้องเรียนออนไลน์สำหรับโรงเรียนสอนภาษา iGenius จังหวัดเชียงใหม่",
        en: "Online classroom booking system for iGenius language school in Chiang Mai",
      },
      description: {
        th: "ระบบจองห้องเรียนออนไลน์สำหรับโรงเรียนสอนภาษา iGenius จังหวัดเชียงใหม่ รองรับผู้ใช้งาน 3 บทบาท ได้แก่ ครู เจ้าหน้าที่ และผู้ดูแลระบบ (Admin) แต่ละบทบาทมีสิทธิ์การเข้าถึงและฟังก์ชันที่แตกต่างกัน ช่วยให้การจัดสรรห้องเรียนสะดวกขึ้นและลดปัญหาการจองซ้ำซ้อน ปัจจุบันอยู่ระหว่างพัฒนาต่อเนื่อง (v1.0)",
        en: "An online classroom booking system built for iGenius, a language school in Chiang Mai. Supports three user roles — Teacher, Staff, and Admin — each with different access levels and permissions, streamlining classroom scheduling and reducing booking conflicts. Currently in active development (v1.0).",
      },
      tags: ["Next.js", "TypeScript", "Node.js", "MySQL"],
      demoUrl: "https://igenius-fixed.vercel.app/",
      // ไฟล์ภาพจริงที่ผู้ใช้วางไว้ที่ public/images/ (a1/a2/a3.jpg) — ไม่ได้อยู่ในโฟลเดอร์ย่อย
      // projects/igenius/ ตามที่เตรียมไว้แต่แรก จึงแก้ path ให้ตรงกับตำแหน่งไฟล์จริงตรงนี้แทน
      images: ["/images/a1.jpg", "/images/a2.jpg", "/images/a3.jpg"],
    },
    {
      slug: "project-two",
      title: "[ชื่อโปรเจกต์ 2]",
      status: "in-progress",
      summary: {
        th: "[อธิบายสั้น ๆ 1 บรรทัดว่าโปรเจกต์นี้คืออะไร]",
        en: "[One-line summary of what this project is]",
      },
      description: {
        th: "[อธิบายรายละเอียด ทำอะไร แก้ปัญหาอะไร ใช้เทคโนโลยีอะไรบ้าง สถานะปัจจุบันเป็นอย่างไร]",
        en: "[Detailed description what it does, what problem it solves, tech used, current status]",
      },
      tags: ["JavaScript"],
      demoUrl: "",
      images: [],
    },
  ] as Project[],
};

/**
 * contact — ใช้ที่ app/contact/page.tsx เท่านั้น
 * contact.links: ลิงก์โซเชียลที่จะโชว์ในหน้าติดต่อ (ตั้งใจไม่มี GitHub)
 */
export const contact = {
  eyebrow: { th: "ติดต่อ", en: "Get In Touch" } as Bi,
  heading: { th: "มาคุยกัน", en: "Let's Talk" } as Bi,
  intro: {
    th: "สนใจร่วมงานหรืออยากพูดคุย ทักมาได้เลยครับ",
    en: "Open to opportunities and always happy to talk, reach out anytime.",
  } as Bi,
  // [ใส่ลิงก์จริงของคุณ ไม่มี GitHub — ตัด LinkedIn ออกแล้วตามที่ผู้ใช้ขอ]
  links: [
    { label: "Facebook", href: "https://www.facebook.com/suracheat.pongpa" },
  ],
};

/**
 * footer — ใช้ที่ components/footer.tsx เท่านั้น
 * footer.links: ลิงก์โซเชียลท้ายเว็บทุกหน้า (ตั้งใจไม่มี GitHub เช่นกัน)
 */
export const footer = {
  // [ใส่ลิงก์จริงของคุณ ไม่มี GitHub]
  links: [
    { label: "LinkedIn", href: "[https://www.linkedin.com/in/your-handle]" },
    { label: "Facebook", href: "https://www.facebook.com/suracheat.pongpa" },
  ],
  credit: { th: "สร้างด้วย Next.js & Tailwind CSS", en: "Crafted with Next.js & Tailwind CSS" } as Bi,
};
