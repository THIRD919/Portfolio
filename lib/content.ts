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
    { value: "0+", label: { th: "โปรเจกต์ที่สร้าง", en: "Projects Built" } as Bi },
    { value: "0+", label: { th: "เทคโนโลยีหลัก", en: "Core Technologies" } as Bi },
    { value: "0", label: { th: "ฝึกงาน", en: "Internships" } as Bi },
    { value: "0+", label: { th: "ภาษาโปรแกรมมิ่ง", en: "Programming Languages" } as Bi },
  ],
};

// ชนิดข้อมูลของ 1 หมวดหมู่ทักษะ ใน skillsSection.categories ด้านล่าง
export type SkillCategory = {
  eyebrow: Bi;
  title: Bi;
  description: Bi;
  tags: string[];
};

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
  categories: [
    {
      eyebrow: { th: "หน้าตาแอปพลิเคชัน", en: "Frontend Interfaces" } as Bi,
      title: { th: "การพัฒนา Frontend", en: "Frontend Development" } as Bi,
      description: { th: "[แก้เป็นสแต็กจริงของคุณ]", en: "[Replace with your real stack]" } as Bi,
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      eyebrow: { th: "บริการฝั่งเซิร์ฟเวอร์", en: "Backend Services" } as Bi,
      title: { th: "การพัฒนา Backend", en: "Backend Development" } as Bi,
      description: { th: "[แก้เป็นสแต็กจริงของคุณ]", en: "[Replace with your real stack]" } as Bi,
      tags: ["Node.js"],
    },
    {
      eyebrow: { th: "ระบบข้อมูล", en: "Data Systems" } as Bi,
      title: { th: "ฐานข้อมูล", en: "Databases" } as Bi,
      description: { th: "[แก้เป็นสแต็กจริงของคุณ]", en: "[Replace with your real stack]" } as Bi,
      tags: ["MySQL"],
    },
    {
      eyebrow: { th: "เครื่องมือพัฒนา", en: "Development Toolkit" } as Bi,
      title: { th: "เครื่องมือ", en: "Tools" } as Bi,
      description: { th: "[แก้เป็นเครื่องมือจริงของคุณ]", en: "[Replace with your real tools]" } as Bi,
      tags: ["Git", "VS Code"],
    },
    {
      eyebrow: { th: "การสื่อสารและการเรียนรู้", en: "Communication & Learning" } as Bi,
      title: { th: "ภาษาและซอฟต์สกิล", en: "Languages & Soft Skills" } as Bi,
      description: { th: "[แก้ตามความจริง]", en: "[Replace with your real skills]" } as Bi,
      tags: ["Thai", "English"],
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
  image?: string;
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
      slug: "project-one",
      title: "[ชื่อโปรเจกต์ 1]",
      status: "planned",
      summary: {
        th: "[อธิบายสั้น ๆ 1 บรรทัดว่าโปรเจกต์นี้คืออะไร]",
        en: "[One-line summary of what this project is]",
      },
      description: {
        th: "[อธิบายรายละเอียด ทำอะไร แก้ปัญหาอะไร ใช้เทคโนโลยีอะไรบ้าง สถานะปัจจุบันเป็นอย่างไร]",
        en: "[Detailed description what it does, what problem it solves, tech used, current status]",
      },
      tags: ["Next.js"],
      demoUrl: "",
      image: "",
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
      image: "",
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
  // [ใส่ลิงก์จริงของคุณ ไม่มี GitHub]
  links: [
    { label: "LinkedIn", href: "[https://www.linkedin.com/in/your-handle]" },
    { label: "Facebook", href: "[https://www.facebook.com/your-handle]" },
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
    { label: "Facebook", href: "[https://www.facebook.com/your-handle]" },
  ],
  credit: { th: "สร้างด้วย Next.js & Tailwind CSS", en: "Crafted with Next.js & Tailwind CSS" } as Bi,
};
