/**
 * [ไฟล์] components/status-pill.tsx
 * -----------------------------------------------------------------------
 * หน้าที่: ป้ายเล็ก ๆ (pill) โชว์สถานะของโปรเจกต์ 1 ใน 3 แบบ
 *          done (เสร็จแล้ว) / in-progress (กำลังพัฒนา) / planned (เตรียม deploy)
 *
 * ใช้ type ProjectStatus และ statusLabel จาก lib/content.ts (บรรทัดที่นิยาม
 * ProjectStatus และ statusLabel อยู่ในหมวด "Projects" ของไฟล์นั้น)
 *
 * ถูกใช้ที่:
 *   - components/projects.tsx        (การ์ดพรีวิวโปรเจกต์ในหน้าแรก)
 *   - components/project-detail.tsx  (หน้ารายละเอียดโปรเจกต์ /projects/[slug])
 * -----------------------------------------------------------------------
 */
import { ProjectStatus, statusLabel, Bi } from "@/lib/content";
import { Lang } from "@/lib/language-context";

// สีพื้นหลัง/ตัวอักษรของแต่ละสถานะ (รองรับทั้งโหมดสว่าง/มืดในตัวเอง)
const STATUS_STYLE: Record<ProjectStatus, string> = {
  done: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
  "in-progress": "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
  planned: "bg-slate-200 text-slate-600 dark:bg-white/10 dark:text-slate-300",
};

// props: status = สถานะโปรเจกต์, lang = ภาษาปัจจุบัน (มาจาก useLanguage() ของ component แม่)
export default function StatusPill({ status, lang }: { status: ProjectStatus; lang: Lang }) {
  const label: Bi = statusLabel[status]; // ดึงข้อความ { th, en } ตามสถานะจาก lib/content.ts
  return <span className={`status-pill ${STATUS_STYLE[status]}`}>{label[lang]}</span>;
}
